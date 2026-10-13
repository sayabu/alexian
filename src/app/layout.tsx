import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/merriweather/900.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "./globals.css";
import { Header } from "@/components/interactive";
import { nav } from "@/data/navigation";
import { hospital } from "@/data/hospital";
export const metadata: Metadata = {
  title: {
    default: `A clearer signal. A clearer decision. | ${hospital.name}`,
    template: "%s | MCA Healthcare",
  },
  description:
    "An executive briefing on the potential workforce and human cost of poor cellular coverage. Start with measurement before selecting equipment.",
  robots: { index: hospital.indexable, follow: hospital.indexable },
  openGraph: {
    title: "Start with the Signal | MCA Healthcare",
    description:
      "A personalized, research-supported hospital executive briefing.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer>
          <div className="footer-top">
            <Link href="/" className="brand">
              MCA
              <span>
                HEALTHCARE
                <br />
                START WITH THE SIGNAL.
              </span>
            </Link>
            <p>
              Better decisions begin
              <br />
              with a clearer picture.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            {nav.map(([href, label]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="footer-bottom">
            <span>© 2026 MCA · Demonstration briefing</span>
            <span>Modeled estimates. Measured next steps.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
