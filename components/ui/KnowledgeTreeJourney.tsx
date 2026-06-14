"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { PiStudentThin } from "react-icons/pi";

/* ═══════════════════════════════════════════════════════════════
   LAYOUT CONSTANTS  (viewBox: 0 0 600 1100)
   ─────────────────────────────────────────────────────────────
   Trunk: x=300, from trunkTopY to TRUNK_BOT_Y
   Branches radiate LEFT and RIGHT from trunk junctions
   Node cards: 176×64 px centred at their (cx,cy)
   Symmetric, balanced, vertically spacious layout
   ═══════════════════════════════════════════════════════════════ */
const VB_W = 600;
const VB_H = 1100;

const TRUNK_X      = 300;   // centre of trunk
const TRUNK_TOP_Y  = 122;   // top of trunk (junction for row-0 top node)
const TRUNK_BOT_Y  = 955;   // where trunk ends at the student box

// LEFT / RIGHT node X centre positions
const LX = 110;  // left column cx
const RX = 490;  // right column cx

// Row Y centres for each node (Vertically spaced)
const ROW_Y = [90, 260, 430, 600, 770];   // [top-center, r1, r2, r3, r4]

// Trunk junction Y: where branch leaves trunk for each row
const JUNC_Y = [TRUNK_TOP_Y, 330, 500, 670, 840];

// Student box dimensions
const STU_CX = 300;
const STU_CY = 1010;
const STU_W  = 180;
const STU_H  = 110;

/* ═══════════════════════════════════════════════════════════════
   NODE DATA
   threshold: 0‒1 scroll progress at which node activates
   ═══════════════════════════════════════════════════════════════ */
interface NodeDef {
  id: string;
  label: string[];     // up to 2 lines
  cx: number;
  cy: number;
  juncY: number;
  threshold: number;
  branchIdx: number;   // index into BRANCHES array
}

const NODES: NodeDef[] = [
  // ── Row 0: single top-centre node
  {
    id: "weekly-quiz",
    label: ["Weekly Quiz"],
    cx: TRUNK_X,
    cy: ROW_Y[0],
    juncY: JUNC_Y[0],
    threshold: 0.04,
    branchIdx: 0,
  },
  // ── Row 1
  {
    id: "monthly-quiz",
    label: ["Monthly Quiz"],
    cx: LX,
    cy: ROW_Y[1],
    juncY: JUNC_Y[1],
    threshold: 0.14,
    branchIdx: 1,
  },
  {
    id: "fun-activities",
    label: ["Fun Activities"],
    cx: RX,
    cy: ROW_Y[1],
    juncY: JUNC_Y[1],
    threshold: 0.17,
    branchIdx: 2,
  },
  // ── Row 2
  {
    id: "unit-tests",
    label: ["Unit Tests"],
    cx: LX,
    cy: ROW_Y[2],
    juncY: JUNC_Y[2],
    threshold: 0.27,
    branchIdx: 3,
  },
  {
    id: "extracurricular",
    label: ["Extracurricular"],
    cx: RX,
    cy: ROW_Y[2],
    juncY: JUNC_Y[2],
    threshold: 0.30,
    branchIdx: 4,
  },
  // ── Row 3
  {
    id: "monthly-tests",
    label: ["Monthly Tests"],
    cx: LX,
    cy: ROW_Y[3],
    juncY: JUNC_Y[3],
    threshold: 0.40,
    branchIdx: 5,
  },
  {
    id: "interpersonal",
    label: ["Interpersonal", "Skills"],
    cx: RX,
    cy: ROW_Y[3],
    juncY: JUNC_Y[3],
    threshold: 0.43,
    branchIdx: 6,
  },
  // ── Row 4
  {
    id: "parent-teacher",
    label: ["Parent-Teacher", "Meet"],
    cx: LX,
    cy: ROW_Y[4],
    juncY: JUNC_Y[4],
    threshold: 0.53,
    branchIdx: 7,
  },
  {
    id: "report-analysis",
    label: ["Report Analysis"],
    cx: RX,
    cy: ROW_Y[4],
    juncY: JUNC_Y[4],
    threshold: 0.56,
    branchIdx: 8,
  },
];

/* ═══════════════════════════════════════════════════════════════
   BRANCH PATH BUILDER
   Each branch goes from (TRUNK_X, juncY) → (cx, cy)
   using a cubic bezier that curves outward then levels off
   ═══════════════════════════════════════════════════════════════ */
function branchPath(node: NodeDef): string {
  const { cx, cy, juncY } = node;
  const tx = TRUNK_X;
  // Half-width offset: branches terminate just outside the text label area
  const TEXT_HW = 60; // ≈ half the visible text label width in SVG units

  if (cx === TRUNK_X) {
    // straight up for top-centre node
    return `M ${tx} ${juncY} L ${tx} ${cy + 16}`;
  }

  const isLeft = cx < tx;
  // Branch tip stops at the inner edge of the label text
  const endX = isLeft ? cx + TEXT_HW : cx - TEXT_HW;
  const endY = cy;

  const dx = Math.abs(tx - endX);
  const cp1x = isLeft ? tx - dx * 0.45 : tx + dx * 0.45;
  const cp1y = juncY;
  const cp2x = isLeft ? endX + dx * 0.35 : endX - dx * 0.35;
  const cp2y = endY;

  return `M ${tx} ${juncY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${endX} ${endY}`;
}


/* ═══════════════════════════════════════════════════════════════
   TRUNK PATH (animated light flows downward)
   ═══════════════════════════════════════════════════════════════ */
const TRUNK_PATH = `M ${TRUNK_X} ${TRUNK_TOP_Y} L ${TRUNK_X} ${TRUNK_BOT_Y}`;

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */
const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

function pathLen(el: SVGPathElement | null): number {
  if (!el) return 0;
  try {
    return el.getTotalLength();
  } catch {
    return 0;
  }
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function KnowledgeTreeJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  // one ref per branch animated path (9 nodes → 9 paths)
  const branchRefs  = useRef<(SVGPathElement | null)[]>([]);
  const trunkRef    = useRef<SVGPathElement | null>(null);

  const branchLens  = useRef<number[]>([]);
  const trunkLen    = useRef(0);

  const [activeNodes,   setActiveNodes]   = useState<Set<string>>(new Set());
  const [studentActive, setStudentActive] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);

  /* ── Initialise SVG path lengths ── */
  const initPaths = useCallback(() => {
    branchLens.current = branchRefs.current.map(pathLen);
    trunkLen.current   = pathLen(trunkRef.current);

    branchRefs.current.forEach((el, i) => {
      if (!el) return;
      const L = branchLens.current[i];
      el.style.strokeDasharray  = `${L}`;
      el.style.strokeDashoffset = `${L}`;
    });
    if (trunkRef.current) {
      const L = trunkLen.current;
      trunkRef.current.style.strokeDasharray  = `${L}`;
      trunkRef.current.style.strokeDashoffset = `${L}`;
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(initPaths, 120);
    return () => clearTimeout(t);
  }, [initPaths]);

  /* ── Scroll-scrub animation ── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect       = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled = clamp(-rect.top, 0, totalScroll);
      const p = scrolled / totalScroll;

      /* — Scroll Cue — */
      const isCueActive = p < 0.04;
      setShowScrollCue(prev => prev !== isCueActive ? isCueActive : prev);

      /* — Branches (p 0 → 0.65) — */
      NODES.forEach((node, i) => {
        const el = branchRefs.current[i];
        if (!el) return;
        const L = branchLens.current[i];
        if (!L) return;

        // Each branch has a 0.18-wide window starting at its threshold
        const start = node.threshold;
        const end   = Math.min(start + 0.18, 0.68);
        const bp    = clamp((p - start) / (end - start), 0, 1);

        el.style.strokeDashoffset = `${L * (1 - bp)}`;
        el.style.opacity = bp > 0 ? "1" : "0.6";
      });

      /* — Trunk (p 0.60 → 0.90) — */
      const trunkP = clamp((p - 0.60) / 0.30, 0, 1);
      if (trunkRef.current && trunkLen.current) {
        trunkRef.current.style.strokeDashoffset = `${trunkLen.current * (1 - trunkP)}`;
      }

      /* — Node card activation (optimized state updates) — */
      const next = new Set<string>();
      NODES.forEach(n => { if (p >= n.threshold) next.add(n.id); });
      setActiveNodes(prev => {
        if (prev.size !== next.size) return next;
        for (const id of next) {
          if (!prev.has(id)) return next;
        }
        return prev;
      });

      /* — Student (optimized state updates) — */
      const isStudentActive = p >= 0.90;
      setStudentActive(prev => prev !== isStudentActive ? isStudentActive : prev);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── PRE-COMPUTED branch paths ── */
  const BRANCH_PATHS = NODES.map(branchPath);

  /* ══════════════════════════════════════════════════════════
     RENDER
  ═══════════════════════════════════════════════════════════ */
  return (
    <section
      ref={sectionRef}
      className="relative border-y border-slate-100"
      style={{ height: "250vh" }}
      aria-label="VK Academy Knowledge Tree Journey"
    >
      {/* ── STICKY CANVAS ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA]">

        {/* Header */}
        <div className="text-center pt-6 md:pt-8 px-4 shrink-0 z-10">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#FFB300] mb-1">
            Your Journey
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
            From <span className="text-[#FFB300]">Knowledge</span> to{" "}
            <span className="text-[#FFB300]">Excellence</span>
          </h2>
          <p className="text-slate-500 text-xs mt-1 max-w-sm mx-auto leading-relaxed font-medium">
            Scroll to watch every branch of learning flow through VK Academy.
          </p>
        </div>

        {/* SVG area */}
        <div className="flex-1 w-full flex items-center justify-center p-2 sm:p-4">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="h-full w-auto max-h-[calc(100vh-130px)] max-w-full"
            aria-hidden="true"
            style={{ overflow: "visible" }}
          >
            <defs>
              {/* Gold glow */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              {/* Student glow */}
              <filter id="sglow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="10" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Gold stroke gradient for branches */}
              <linearGradient id="strokeG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#FFFBEB" />
                <stop offset="50%"  stopColor="#FFB300" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              {/* Student box gradient */}
              <linearGradient id="stuBoxG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8F9FA" />
              </linearGradient>
            </defs>

            {/* ── STATIC TRUNK RAIL (The background tree trunk) ── */}
            <line
              x1={TRUNK_X} y1={TRUNK_TOP_Y}
              x2={TRUNK_X} y2={TRUNK_BOT_Y}
              stroke="#E2E8F0"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* ── STATIC BRANCH RAILS (The background branches) ── */}
            {BRANCH_PATHS.map((d, i) => (
              <path
                key={`rail-${i}`}
                d={d}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
            ))}

            

            {/* ── ANIMATED BRANCH LIGHTS ── */}
            {BRANCH_PATHS.map((d, i) => (
              <path
                key={`branch-${i}`}
                ref={el => { branchRefs.current[i] = el; }}
                d={d}
                fill="none"
                stroke="url(#strokeG)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#glow)"
              />
            ))}

            {/* ── ANIMATED TRUNK LIGHT ── */}
            <path
              ref={el => { trunkRef.current = el; }}
              d={TRUNK_PATH}
              fill="none"
              stroke="#FFB300"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            {/* ── NODE LABELS — plain SVG text, no borders ── */}
            {NODES.map(node => {
              const active = activeNodes.has(node.id);
              const lines  = node.label;
              // Centre multi-line text vertically around node.cy
              const lineGap = 26;   // SVG user units between lines
              const totalH  = (lines.length - 1) * lineGap;

              return (
                <g key={node.id} aria-label={lines.join(" ")}>
                  {/* Gold accent bar — appears under active node */}
                  {active && (
                    <rect
                      x={node.cx - 18}
                      y={node.cy + totalH / 2 + 10}
                      width={36}
                      height={3}
                      rx={2}
                      fill="#FFB300"
                      opacity={0.85}
                      style={{ transition: "opacity 0.5s ease" }}
                    />
                  )}

                  {lines.map((line, li) => (
                    <text
                      key={li}
                      x={node.cx}
                      y={node.cy - totalH / 2 + li * lineGap}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={22}
                      fontWeight={active ? "800" : "600"}
                      letterSpacing="0.09em"
                      style={{
                        textTransform: "uppercase",
                        fill:    active ? "#003366" : "#94a3b8",
                        opacity: active ? 1 : 0.45,
                        transition: "fill 0.5s ease, opacity 0.5s ease",
                        fontFamily: "inherit",
                      }}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}


            {/* ── STUDENT BOX ── */}
            <g
              filter={studentActive ? "url(#sglow)" : undefined}
              aria-label="Student empowered – journey destination"
            >
              {/* Ripple rings */}
              {studentActive && (
                <>
                  <rect
                    x={STU_CX - STU_W / 2 - 10} y={STU_CY - STU_H / 2 - 10}
                    width={STU_W + 20} height={STU_H + 20}
                    rx={18}
                    fill="none"
                    stroke="rgba(255,179,0,0.2)"
                    strokeWidth="2"
                    style={{ animation: "rippleStu 1.8s ease-out infinite" }}
                  />
                  <rect
                    x={STU_CX - STU_W / 2 - 20} y={STU_CY - STU_H / 2 - 20}
                    width={STU_W + 40} height={STU_H + 40}
                    rx={22}
                    fill="none"
                    stroke="rgba(255,179,0,0.1)"
                    strokeWidth="1.5"
                    style={{ animation: "rippleStu 1.8s ease-out 0.5s infinite" }}
                  />
                </>
              )}

              {/* Student Card with react-icons PiStudentThin */}
              <foreignObject
                x={STU_CX - STU_W / 2}
                y={STU_CY - STU_H / 2}
                width={STU_W}
                height={STU_H}
                className="overflow-visible"
              >
                <div
                  className={`w-full h-full flex flex-col items-center justify-center rounded-2xl border px-4 py-3 transition-all duration-500 bg-white ${
                    studentActive
                      ? "border-[#FFB300] shadow-[0_12px_30px_rgba(255,179,0,0.25)] ring-1 ring-[#FFB300]/30 scale-105"
                      : "border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.02)] opacity-60"
                  }`}
                >
                  <PiStudentThin
                    className={`w-30 h-30 transition-colors duration-500 ${
                      studentActive ? "text-[black]" : "text-slate-400"
                    }`}
                  />
                  <span
                    className={`text-[12px] font-black tracking-wider uppercase mt-1.5 transition-colors duration-500 ${
                      studentActive ? "text-[#003366]" : "text-slate-500"
                    }`}
                  >
                    
                  </span>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        {/* Scroll cue */}
        {showScrollCue}

       
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes rippleStu {
          0%   { opacity: 0.8; }
          100% { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
