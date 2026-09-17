import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Font utama seluruh aplikasi (design system: docs/design.md).
// Variable --font-plus-jakarta-sans dipakai oleh --font-sans di globals.css.
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

// Root layout seluruh aplikasi: metadata, struktur HTML, dan global layout.
// Jangan menaruh UI khusus halaman tertentu di sini.

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
