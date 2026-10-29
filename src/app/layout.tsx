import type { Metadata } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";
import "@/styles/tokens.css";
import "@/styles/global.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { Loader } from "@/components/ui/Loader";

export const metadata: Metadata = {
  title: { default: `${site.name} | Company setup & corporate services in Dubai`, template: `%s | ${site.shortName}` },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <a href="#main" className="visually-hidden">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
