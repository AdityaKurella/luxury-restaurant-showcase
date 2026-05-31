import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "L'Étoile D'Or | Luxury Michelin-Star Restaurant",
  description: "Experience culinary mastery at L'Étoile D'Or. Exceptional ingredients, artistic presentation, and unforgettable sensory journeys curated by Chef Julien Julian.",
  openGraph: {
    title: "L'Étoile D'Or | Michelin-Star Fine Dining",
    description: "Exceptional ingredients, artistic presentation, and unforgettable moments.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F5F5F7]">
        {children}
      </body>
    </html>
  );
}
