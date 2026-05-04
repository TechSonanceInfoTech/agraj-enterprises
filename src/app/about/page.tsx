import { CONFIG } from "@/config";
import { generatePageMetadata, getBreadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";

import aboutData from "@/content/about.json";
import processData from "@/content/process.json";
import clientsData from "@/content/clients.json";

import type { AboutContent, ProcessStep, Client } from "@/types";

const about = aboutData as AboutContent;
const process = processData as ProcessStep[];
const clients = clientsData as Client[];

export const metadata = generatePageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ])
      ]} />

      <PageHero
        title="About Agraj Enterprise — 7+ Years of Industrial Coating Excellence"
        subtitle="Discover the story behind Gujarat's trusted industrial coating partner."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Story Section */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              The Agraj Story
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed" data-aos="fade-up">
            <p className="text-lg">{about.story}</p>
            <p>{about.expertise}</p>
            <p>{about.commitment}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Mission & Vision */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="bg-white rounded-xl border p-8 card-hover"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-right"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white text-xl"
                style={{ background: CONFIG.colors.primaryMid }}
              >
                <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: CONFIG.colors.darkText }}>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">{about.mission}</p>
            </div>

            {/* Vision */}
            <div
              className="bg-white rounded-xl border p-8 card-hover"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-left"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white text-xl"
                style={{ background: CONFIG.colors.accentOrange }}
              >
                <i className="fa-solid fa-eye" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: CONFIG.colors.darkText }}>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Step number */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold relative z-10"
                  style={{ background: CONFIG.colors.primaryMid }}
                >
                  <i className={step.icon} aria-hidden="true"></i>
                </div>
                <div
                  className="text-xs font-bold mb-2 uppercase tracking-wider"
                  style={{ color: CONFIG.colors.accentOrange }}
                >
                  Step {step.step}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: CONFIG.colors.darkText }}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced Companies */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              Companies We&apos;ve Worked With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl border p-6 text-center card-hover"
                style={{ borderColor: CONFIG.colors.border }}
                data-aos="fade-up"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${CONFIG.colors.primaryDark}10` }}
                >
                  <i className="fa-solid fa-building text-xl" style={{ color: CONFIG.colors.primaryDark }} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: CONFIG.colors.darkText }}>
                  {client.name}
                </h3>
                <p className="text-gray-500 text-sm">{client.siteAddress}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to Work With Us?"
        subtext="Get in touch today for a free site inspection and project consultation."
      />
    </>
  );
}
