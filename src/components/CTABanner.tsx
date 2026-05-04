import Link from "next/link";
import { CONFIG } from "@/config";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to Protect Your Assets?",
  subtext = "Get a free site inspection and quotation today.",
}: CTABannerProps) {
  return (
    <section style={{ background: CONFIG.colors.primaryDark }} className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${CONFIG.contact.phoneRaw}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg text-white"
            style={{ background: CONFIG.colors.accentOrange }}
          >
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
            Call Now
          </a>
          <Link
            href={CONFIG.nav.ctaHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold border-2 border-white/30 text-white transition-all duration-200 hover:bg-white/10"
          >
            <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
            {CONFIG.nav.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
