import Link from "next/link";
import Image from "next/image";
import { CONFIG } from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const address = CONFIG.contact.address;

  const socialLinks = Object.entries(CONFIG.social).filter(
    ([, url]) => url && url.length > 0
  );

  return (
    <footer style={{ background: CONFIG.colors.primaryDark }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-xl px-5 py-3 inline-flex items-center justify-center shadow-sm w-full max-w-[280px]">
                <Image 
                  src="/logo.png" 
                  alt={`${CONFIG.company.name} Logo`} 
                  width={320}
                  height={80}
                  className="h-12 md:h-14 w-full object-contain object-center mix-blend-multiply contrast-[1.2] brightness-[1.1]"
                />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {CONFIG.company.tagline}
            </p>
            <p className="text-white/50 text-xs">
              Est. {CONFIG.company.founded} · {CONFIG.company.experience} Years of Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-5 flex items-center gap-2">
              <i className="fa-solid fa-link text-xs" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {CONFIG.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <i className="fa-solid fa-chevron-right text-[8px]" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-5 flex items-center gap-2">
              <i className="fa-solid fa-address-card text-xs" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONFIG.contact.phoneRaw}`}
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-start gap-3"
                >
                  <i className="fa-solid fa-phone mt-0.5" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
                  <div>
                    <span className="block font-medium text-white">{CONFIG.contact.phone}</span>
                    <span className="text-xs text-white/50">{CONFIG.contact.person}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONFIG.contact.email}`}
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-start gap-3"
                >
                  <i className="fa-solid fa-envelope mt-0.5" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
                  {CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <i className="fa-solid fa-location-dot mt-0.5 shrink-0" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
                <address className="h-card not-italic m-0 p-0" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{address.line1}, {address.line2}, {address.area}</span>,{" "}
                  <span itemProp="addressLocality">{address.city}</span>,{" "}
                  <span itemProp="addressRegion">{address.state}</span> —{" "}
                  <span itemProp="postalCode">{address.pin}</span>
                </address>
              </li>
            </ul>
          </div>

          {/* Social & Business Hours */}
          <div>
            <h3 className="font-semibold text-base mb-5 flex items-center gap-2">
              <i className="fa-solid fa-clock text-xs" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li className="flex justify-between">
                <span>Mon – Sat</span>
                <span className="text-white font-medium">9:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </li>
            </ul>

            {socialLinks.length > 0 && (
              <>
                <h3 className="font-semibold text-base mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map(([key, url]) => {
                    const iconMap: Record<string, string> = {
                      whatsapp: "fa-brands fa-whatsapp",
                      instagram: "fa-brands fa-instagram",
                      linkedin: "fa-brands fa-linkedin-in",
                      facebook: "fa-brands fa-facebook-f",
                    };
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                        aria-label={`Visit our ${key} page`}
                      >
                        <i className={iconMap[key] || ""} aria-hidden="true"></i>
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {currentYear} {CONFIG.company.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Industrial Painting & Protective Coating Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
