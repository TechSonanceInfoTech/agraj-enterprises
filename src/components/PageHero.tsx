import Link from "next/link";
import { CONFIG } from "@/config";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="pt-28 pb-16 md:pt-32 md:pb-20 text-center text-white relative"
      style={{ background: CONFIG.colors.primaryDark }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index === 0 && (
                  <i className="fa-solid fa-house text-xs" aria-hidden="true"></i>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <i className="fa-solid fa-chevron-right text-[10px] text-white/40" aria-hidden="true"></i>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        )}

        {/* Decorative line */}
        <div
          className="w-16 h-1 mx-auto mt-6 rounded-full"
          style={{ background: CONFIG.colors.accentOrange }}
        />
      </div>
    </section>
  );
}
