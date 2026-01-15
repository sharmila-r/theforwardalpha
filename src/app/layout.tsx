import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forward Alpha | Tech, AI & Finance Innovation",
  description:
    "Forward Alpha operates at the intersection of technology, AI, and finance. We deliver user-centric software solutions, AI-driven strategies, and staffing optimization services.",
  keywords: [
    "technology",
    "artificial intelligence",
    "AI",
    "finance",
    "software development",
    "staffing solutions",
    "innovation",
    "Forward Alpha",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Forward Alpha | Tech, AI & Finance Innovation",
    description:
      "Empowering innovation through people. We're not just staffing. We're strategy.",
    url: "https://theforwardalpha.com",
    siteName: "Forward Alpha",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
