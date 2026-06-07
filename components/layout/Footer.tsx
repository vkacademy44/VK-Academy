import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Explore: [
    { name: "Academic Divisions", href: "/academic-divisions" },
    { name: "Upcoming Batches", href: "/batches" },
    { name: "Wall of Fame", href: "/wall-of-fame" },
    { name: "Our Faculty", href: "/faculty" },
    { name: "Student Life", href: "/student-life" },
  ],
  Support: [
    { name: "Admissions Help", href: "/contact" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-700 shadow-sm flex items-center justify-center">
                <Image
                  src="/images/vkLogo.jpeg"
                  alt="VK Academy Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-extrabold tracking-tight">VK Academy</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students with knowledge, character, and the competitive edge for a bright future. A legacy of excellence.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Reach Us
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="leading-relaxed">
                Shop No. 4, M. N. Yadav Bhavan,<br />
                Mohili Village Pipeline, Above Jethva Tailor,<br />
                Mumbai - 400072
              </p>
              <p className="space-y-1">
                <a href="tel:8356992905" className="block hover:text-brand-gold transition-colors">
                  📞 83569 92905
                </a>
              </p>
              <p>
                <a href="mailto:vkacademy44@gmail.com" className="hover:text-brand-gold transition-colors">
                  vkacademy44@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VK Academy. All rights reserved.</p>
          <div className="flex gap-5">
            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
              <Link
                key={s}
                href="#"
                className="hover:text-slate-300 transition-colors duration-150"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}