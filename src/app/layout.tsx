import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "PARIZAAD | Handcrafted Ethnic & Fusion Wear",
  description: "Discover exquisite handcrafted ethnic and fusion wear from PARIZAAD. Premium quality suits, traditional wear, and designer pieces with intricate embroidery. Worldwide shipping available.",
  keywords: ["ethnic wear", "fusion wear", "handcrafted clothing", "Indian suits", "designer wear", "PARIZAAD", "Chandigarh fashion"],
  authors: [{ name: "PARIZAAD" }],
  openGraph: {
    title: "PARIZAAD | From Our Hearts to Your Wardrobe",
    description: "Premium handcrafted ethnic and fusion wear",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
