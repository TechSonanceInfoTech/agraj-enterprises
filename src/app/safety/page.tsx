import { CONFIG } from "@/config";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { generatePageMetadata, getBreadcrumbSchema } from "@/lib/seo";

import safetyData from "@/content/safety.json";
import safetyPolicyData from "@/content/safetypolicy.json";
import safetyProtocolData from "@/content/safetyprotocol.json";

import type { SafetyItem, SafetyProtocolStep } from "@/types";

const safety = safetyData as SafetyItem[];
const safetyPolicy = safetyPolicyData as string[];
const safetyProtocol = safetyProtocolData as SafetyProtocolStep[];

export const metadata = generatePageMetadata("safety");

export default function SafetyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Safety", path: "/safety" }
        ])
      ]} />

      <PageHero
        title="Industrial Site Safety Standards & PPE Compliance"
        subtitle="Safety is not a choice — it's our commitment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Safety" },
        ]}
      />

      {/* PPE Showcase */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              Personal Protective Equipment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              PPE Standards We Follow
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Every worker on every site is equipped with complete safety gear that meets international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {safety.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border p-6 text-center card-hover"
                style={{ borderColor: CONFIG.colors.border }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl"
                  style={{
                    background: `${CONFIG.colors.accentOrange}15`,
                    color: CONFIG.colors.accentOrange,
                  }}
                >
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: CONFIG.colors.darkText }}>
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{item.purpose}</p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: `${CONFIG.colors.primaryMid}10`,
                    color: CONFIG.colors.primaryMid,
                  }}
                >
                  {item.standard}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Policy */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              Our Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              Safety Policy
            </h2>
          </div>

          <div
            className="bg-white rounded-xl border p-6 md:p-10"
            style={{ borderColor: CONFIG.colors.border }}
            data-aos="fade-up"
          >
            <ul className="space-y-4">
              {safetyPolicy.map((policy, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <i
                    className="fa-solid fa-circle-check mt-0.5 shrink-0"
                    style={{ color: CONFIG.colors.accentOrange }}
                    aria-hidden="true"
                  ></i>
                  <span className="text-sm leading-relaxed">{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Protocol */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.primaryDark }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.accentOrange }}>
              Step by Step
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Site Safety Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyProtocol.map((step, index) => (
              <div
                key={step.step}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg"
                    style={{ background: CONFIG.colors.accentOrange }}
                  >
                    <i className={step.icon} aria-hidden="true"></i>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider">
                      Step {step.step}
                    </div>
                    <h3 className="font-bold text-sm text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Stats Callout */}
      <section className="py-16 md:py-20" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl border p-8 card-hover"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-up"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl"
                style={{
                  background: `${CONFIG.colors.accentOrange}15`,
                  color: CONFIG.colors.accentOrange,
                }}
              >
                <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
              </div>
              <div className="text-4xl font-extrabold mb-2" style={{ color: CONFIG.colors.primaryDark }}>
                0
              </div>
              <div className="text-gray-600 font-medium">Safety Incidents</div>
              <p className="text-gray-500 text-sm mt-2">Across all projects since inception</p>
            </div>

            <div
              className="bg-white rounded-xl border p-8 card-hover"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl"
                style={{
                  background: `${CONFIG.colors.primaryMid}15`,
                  color: CONFIG.colors.primaryMid,
                }}
              >
                <i className="fa-solid fa-clock" aria-hidden="true"></i>
              </div>
              <div className="text-4xl font-extrabold mb-2" style={{ color: CONFIG.colors.primaryDark }}>
                {CONFIG.company.experience}
              </div>
              <div className="text-gray-600 font-medium">Years of Safety Compliance</div>
              <p className="text-gray-500 text-sm mt-2">Maintaining strict safety standards since {CONFIG.company.founded}</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to See Our Safety Standards in Action?"
        subtext="Contact us for a site visit and see our safety culture firsthand."
      />
    </>
  );
}
