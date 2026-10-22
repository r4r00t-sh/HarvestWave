import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: "Harvest Wave — Delivering Nature's Best, Worldwide",
    template: "%s — Harvest Wave",
  },
  description:
    "Harvest Wave is an agricultural products brand inspired by Kerala, connecting spices, grains, pulses, and other produce with business opportunities worldwide.",
};

export const viewport: Viewport = {
  themeColor: "#f6f1e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
