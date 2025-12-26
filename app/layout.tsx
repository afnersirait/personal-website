import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afner Sirait - Portfolio & Resume",
  description: "Personal portfolio and resume website showcasing my work, skills, and experience.",
  keywords: ["portfolio", "resume", "cv", "developer", "designer"],
  authors: [{ name: "Afner Sirait" }],
  openGraph: {
    title: "Afner Sirait - Portfolio & Resume",
    description: "Personal portfolio and resume website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
