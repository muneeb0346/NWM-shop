import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./reset.css";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NWM - NeedleWorks Management",
  description: "Set up your shop profile, add your team, and customize your booking system. In just a few steps, you’ll be ready to take appointments, track payments, and grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
