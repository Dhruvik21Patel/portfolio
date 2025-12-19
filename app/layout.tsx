import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dhruvik Bhagiya | Dhruvik Patel | .NET & React Developer",
    template: "%s | Dhruvik Bhagiya | Dhruvik Patel",
  },
  description:
    "Full-stack developer specializing in .NET, React, and scalable web applications.",
  keywords: [
    ".NET Developer",
    "React Developer",
    "Next.js Portfolio",
    "Full Stack Developer India",
  ],
  authors: [{ name: "Dhruvik Bhagiya" }],
  openGraph: {
    title: "Dhruvik Bhagiya Portfolio",
    description: "Production-ready web applications using .NET & React",
    url: "https://yourdomain.com",
    siteName: "Dhruvik Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}