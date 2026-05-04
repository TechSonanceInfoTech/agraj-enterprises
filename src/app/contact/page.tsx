"use client";

import { useState } from "react";
import { CONFIG } from "@/config";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/seo";

import servicesData from "@/content/services.json";
import faqData from "@/content/faq.json";

import type { Service, FAQ } from "@/types";

const services = servicesData as Service[];
const faqs = faqData as FAQ[];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[
        getFAQSchema(faqs),
        getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])
      ]} />

      <PageHero
        title="Contact Agraj Enterprise — Get a Free Quote"
        subtitle="Let's discuss your next industrial painting project."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Two-Column Contact Section */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <ContactForm />

            {/* Right: Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-8" style={{ background: CONFIG.colors.primaryMid }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:${CONFIG.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
            >
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              Call Now
            </a>
            <a
              href={`mailto:${CONFIG.contact.email}`}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              Email Us
            </a>
            <a
              href={CONFIG.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-all"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}

/* ─── Contact Form ─── */
function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${CONFIG.contact.formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div>
      <div className="mb-8">
        <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
          Send an Enquiry
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
          Get a Free Quote
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {formState === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm flex items-center gap-2">
          <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
          Thank you! Your enquiry has been sent successfully. We&apos;ll contact you shortly.
        </div>
      )}

      {formState === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i>
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: CONFIG.colors.darkText }}>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border text-sm focus:ring-2 outline-none transition-all"
              style={{ borderColor: CONFIG.colors.border }}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1.5" style={{ color: CONFIG.colors.darkText }}>
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-lg border text-sm focus:ring-2 outline-none transition-all"
              style={{ borderColor: CONFIG.colors.border }}
              placeholder="Your company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: CONFIG.colors.darkText }}>
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-lg border text-sm focus:ring-2 outline-none transition-all"
              style={{ borderColor: CONFIG.colors.border }}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: CONFIG.colors.darkText }}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border text-sm focus:ring-2 outline-none transition-all"
              style={{ borderColor: CONFIG.colors.border }}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1.5" style={{ color: CONFIG.colors.darkText }}>
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-lg border text-sm focus:ring-2 outline-none transition-all bg-white"
            style={{ borderColor: CONFIG.colors.border }}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: CONFIG.colors.darkText }}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border text-sm focus:ring-2 outline-none transition-all resize-none"
            style={{ borderColor: CONFIG.colors.border }}
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={formState === "sending"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg disabled:opacity-50"
          style={{ background: CONFIG.colors.accentOrange }}
        >
          {formState === "sending" ? (
            <>
              <i className="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
              Sending...
            </>
          ) : (
            <>
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Send Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}

/* ─── Contact Info ─── */
function ContactInfo() {
  const address = CONFIG.contact.address;

  return (
    <div>
      <div className="mb-8">
        <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
          Reach Out
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
          Contact Information
        </h2>
      </div>

      <div className="space-y-4 mb-8">
        {/* Phone */}
        <a
          href={`tel:${CONFIG.contact.phoneRaw}`}
          className="flex items-start gap-4 p-4 rounded-xl border transition-all hover:shadow-md"
          style={{ borderColor: CONFIG.colors.border }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
            style={{ background: CONFIG.colors.primaryMid }}
          >
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: CONFIG.colors.darkText }}>
              Phone
            </div>
            <div className="text-gray-600 text-sm">{CONFIG.contact.phone}</div>
            <div className="text-gray-400 text-xs mt-0.5">{CONFIG.contact.person}</div>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${CONFIG.contact.email}`}
          className="flex items-start gap-4 p-4 rounded-xl border transition-all hover:shadow-md"
          style={{ borderColor: CONFIG.colors.border }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
            style={{ background: CONFIG.colors.primaryMid }}
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: CONFIG.colors.darkText }}>
              Email
            </div>
            <div className="text-gray-600 text-sm">{CONFIG.contact.email}</div>
          </div>
        </a>

        {/* Address */}
        <div
          className="flex items-start gap-4 p-4 rounded-xl border"
          style={{ borderColor: CONFIG.colors.border }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
            style={{ background: CONFIG.colors.primaryMid }}
          >
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: CONFIG.colors.darkText }}>
              Address
            </div>
            <address className="h-card not-italic m-0 p-0 text-gray-600 text-sm" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">{address.line1}, {address.line2}, {address.area}</span>,{" "}
              <span itemProp="addressLocality">{address.city}</span>,{" "}
              <span itemProp="addressRegion">{address.state}</span> —{" "}
              <span itemProp="postalCode">{address.pin}</span>
            </address>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={CONFIG.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-all mb-8"
      >
        <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i>
        Chat on WhatsApp
      </a>

      {/* Google Maps */}
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: CONFIG.colors.border }}>
        <iframe
          src={CONFIG.contact.mapEmbedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Agraj Enterprise location — Bhavnagar, Gujarat"
        ></iframe>
      </div>
    </div>
  );
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border overflow-hidden"
              style={{ borderColor: CONFIG.colors.border }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: CONFIG.colors.darkText }}>
                  {faq.q}
                </span>
                <i
                  className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: CONFIG.colors.primaryMid }}
                  aria-hidden="true"
                ></i>
              </button>
              <div
                className={`accordion-content px-5 ${openIndex === index ? "open" : ""}`}
              >
                <p className="text-gray-600 text-sm leading-relaxed pb-3">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
