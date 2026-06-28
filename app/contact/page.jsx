import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact VK Academy | Saki Naka Mumbai",
  description: "Get in touch with VK Academy in Saki Naka, Mohili Village, Andheri East Mumbai. Call us or visit our campus for course details and admissions.",
  alternates: {
    canonical: "https://www.vkacademy.co.in/contact",
  },
  openGraph: {
    title: "Contact VK Academy | Saki Naka Mumbai",
    description: "Get in touch with VK Academy in Saki Naka, Mohili Village, Andheri East Mumbai. Call us or visit our campus for course details and admissions.",
    url: "https://www.vkacademy.co.in/contact",
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
    title: "Contact VK Academy | Saki Naka Mumbai",
    description: "Get in touch with VK Academy in Saki Naka, Mohili Village, Andheri East Mumbai. Call us or visit our campus for course details and admissions.",
    images: ["https://www.vkacademy.co.in/images/vkLogo.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}