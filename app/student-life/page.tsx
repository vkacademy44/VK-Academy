import type { Metadata } from "next";
import { getStudentLifeItems } from "@/sanity/lib/queries";
import StudentLifeClient from "./StudentLifeClient";

export const metadata: Metadata = {
  title: "Student Life & Gallery | VK Academy Mumbai",
  description: "Explore student life, classroom activities, events, and cultural moments at VK Academy, Saki Naka, Mumbai.",
  alternates: {
    canonical: "https://www.vkacademy.co.in/student-life",
  },
  openGraph: {
    title: "Student Life & Gallery | VK Academy Mumbai",
    description: "Explore student life, classroom activities, events, and cultural moments at VK Academy, Saki Naka, Mumbai.",
    url: "https://www.vkacademy.co.in/student-life",
    siteName: "VK Academy",
    type: "website",
    images: [
      {
        url: "https://www.vkacademy.co.in/images/vkLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "VK Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Life & Gallery | VK Academy Mumbai",
    description: "Explore student life, classroom activities, events, and cultural moments at VK Academy, Saki Naka, Mumbai.",
    images: ["https://www.vkacademy.co.in/images/vkLogo.jpeg"],
  },
};

export default async function StudentLifePage() {
  const moments = await getStudentLifeItems().catch(() => []);

  return <StudentLifeClient moments={moments} />;
}