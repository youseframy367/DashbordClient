import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import MainLayout from "./SidarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200","300","400","500","600","700","800","900"],
  variable: "--font-cairo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300","400","500","700","900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Modern Admin Panel with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${poppins.variable} ${roboto.variable} antialiased`}
    >
      <body className="min-h-screen w-full flex flex-col bg-black overflow-x-hidden">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}