import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afner Sirait - Portfolio & Resume",
  description: "Personal portfolio and resume website showcasing my work, skills, and experience.",
  keywords: ["portfolio", "resume", "cv", "developer", "designer", "data analyst", "devops"],
  authors: [{ name: "Afner Sirait" }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Afner Sirait - Portfolio & Resume",
    description: "Personal portfolio and resume website",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="personal-website-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
