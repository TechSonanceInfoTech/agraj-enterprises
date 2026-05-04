"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONFIG } from "@/config";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { getServiceSchemas, getBreadcrumbSchema } from "@/lib/seo";

import servicesData from "@/content/services.json";
import coatingsData from "@/content/coatings.json";
import industriesData from "@/content/industries.json";
import processData from "@/content/process.json";

import type { Service, Coating, Industry, ProcessStep } from "@/types";

const services = servicesData as Service[];
const coatings = coatingsData as Coating[];
const industries = industriesData as Industry[];
const process = processData as ProcessStep[];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[
        ...getServiceSchemas(services),
        getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ])
      ]} />

      <PageHero
        title="Industrial Painting & Protective Coating Services"
        subtitle="Comprehensive industrial painting and protective coating solutions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Detailed Service Cards */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              Our Specialized Services
            </h2>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl border overflow-hidden card-hover scroll-mt-24"
                style={{ borderColor: CONFIG.colors.border }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto lg:col-span-2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={`${service.title} — Industrial Painting & Coating — Bhavnagar Gujarat`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 lg:col-span-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg"
                        style={{ background: CONFIG.colors.primaryMid }}
                      >
                        <i className={service.icon} aria-hidden="true"></i>
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: CONFIG.colors.darkText }}>
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-5 leading-relaxed">{service.fullDesc}</p>

                    {/* Steps */}
                    <div className="mb-5">
                      <h4 className="font-semibold text-sm mb-2" style={{ color: CONFIG.colors.darkText }}>
                        Process Steps:
                      </h4>
                      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.steps.map((step, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span
                              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                              style={{ background: CONFIG.colors.primaryMid }}
                            >
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Industries */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.industries.map((industry) => (
                        <span
                          key={industry}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            background: `${CONFIG.colors.accentOrange}15`,
                            color: CONFIG.colors.accentOrange,
                          }}
                        >
                          {industry}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact?service=inspection"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ background: CONFIG.colors.accentOrange }}
                    >
                      <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coating Types */}
      <CoatingTabs />

      {/* Industries Served */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              Industries Served
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="bg-white rounded-xl border p-5 text-center card-hover"
                style={{ borderColor: CONFIG.colors.border }}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-lg"
                  style={{
                    background: `${CONFIG.colors.primaryDark}10`,
                    color: CONFIG.colors.primaryDark,
                  }}
                >
                  <i className={industry.icon} aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold text-xs" style={{ color: CONFIG.colors.darkText }}>
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.primaryDark }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.accentOrange }}>
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="text-center relative"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"
                  style={{ background: `${CONFIG.colors.accentOrange}`, color: CONFIG.colors.white }}
                >
                  <i className={step.icon} aria-hidden="true"></i>
                </div>
                <div className="text-xs font-bold mb-2 text-white/50 uppercase tracking-wider">
                  Step {step.step}
                </div>
                <h3 className="font-bold text-base mb-2 text-white">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Request a Free Site Inspection"
        subtext="Our expert team will visit your site and recommend the best coating solution."
      />
    </>
  );
}

/* ─── Coating Tabs Component ─── */
function CoatingTabs() {
  const [activeTab, setActiveTab] = useState(coatings[0].id);
  const activeCoating = coatings.find((c) => c.id === activeTab) || coatings[0];

  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            Coating Systems
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
            Coating Types We Apply
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {coatings.map((coating) => (
            <button
              key={coating.id}
              onClick={() => setActiveTab(coating.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === coating.id
                  ? "text-white shadow-lg"
                  : "bg-white border text-gray-600 hover:border-gray-300"
              }`}
              style={
                activeTab === coating.id
                  ? { background: CONFIG.colors.primaryMid }
                  : { borderColor: CONFIG.colors.border }
              }
            >
              <i className={`${coating.icon} mr-2`} aria-hidden="true"></i>
              {coating.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className="bg-white rounded-xl border p-6 md:p-10"
          style={{ borderColor: CONFIG.colors.border }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg"
              style={{ background: CONFIG.colors.primaryMid }}
            >
              <i className={activeCoating.icon} aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-bold" style={{ color: CONFIG.colors.darkText }}>
              {activeCoating.name}
            </h3>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{activeCoating.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Properties */}
            <div>
              <h4
                className="font-semibold text-sm mb-3 uppercase tracking-wider"
                style={{ color: CONFIG.colors.primaryMid }}
              >
                Key Properties
              </h4>
              <ul className="space-y-2">
                {activeCoating.properties.map((prop) => (
                  <li key={prop} className="flex items-center gap-2 text-sm text-gray-600">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: CONFIG.colors.accentOrange }}
                      aria-hidden="true"
                    ></i>
                    {prop}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h4
                className="font-semibold text-sm mb-3 uppercase tracking-wider"
                style={{ color: CONFIG.colors.primaryMid }}
              >
                Applications
              </h4>
              <ul className="space-y-2">
                {activeCoating.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2 text-sm text-gray-600">
                    <i
                      className="fa-solid fa-industry text-xs"
                      style={{ color: CONFIG.colors.primaryDark }}
                      aria-hidden="true"
                    ></i>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
