import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "77LAB Marketing Academy",
  description: "Il corso di marketing più completo in italiano. 26 moduli, 76 lezioni, dal WHY all'esecuzione.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pt-[57px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
