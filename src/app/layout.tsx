import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({ weight: ["500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranay's Portfolio",
  description:
    "Pranay Boreddy is a seasoned front-end developer with over five years of experience in creating seamless user experiences. Skilled in JavaScript, TypeScript, ReactJs, NextJs, VueJs, and Angular. Awarded High Potential Employee at Monster.com and ROOKIE at Tavant Technologies. Connect with Pranay for innovative web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
