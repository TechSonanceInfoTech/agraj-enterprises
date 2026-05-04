import Link from "next/link";
import Image from "next/image";
import { CONFIG } from "@/config";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { getWebSiteSchema } from "@/lib/seo";

import servicesData from "@/content/services.json";
import whyusData from "@/content/whyus.json";
import projectsData from "@/content/projects.json";
import clientsData from "@/content/clients.json";
import safetyData from "@/content/safety.json";

import type { Service, WhyUsItem, Project, Client, SafetyItem } from "@/types";

const services = servicesData as Service[];
const whyus = whyusData as WhyUsItem[];
const projects = projectsData as Project[];
const clients = clientsData as Client[];
const safety = safetyData as SafetyItem[];

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[getWebSiteSchema()]} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Before & After Gallery */}
      <BeforeAfterSection />

      {/* Trusted By */}
      <TrustedBySection />

      {/* Safety Standards */}
      <SafetySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Industrial painting and protective coating site — Bhavnagar Gujarat"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${CONFIG.colors.primaryDark}E6 0%, ${CONFIG.colors.primaryDark}CC 100%)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <i className="fa-solid fa-shield-halved text-sm" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
          <span className="text-white/90 text-sm font-medium">
            {CONFIG.company.experience} Years of Industrial Excellence
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Industrial Painting & Protective Coating Solutions in Gujarat
        </h1>

        <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-2">
          {CONFIG.company.tagline}
        </p>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {CONFIG.company.slogan}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-orange-500/20"
            style={{ background: CONFIG.colors.accentOrange }}
          >
            <i className="fa-solid fa-paint-roller" aria-hidden="true"></i>
            View our industrial painting services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border-2 border-white/30 text-white transition-all duration-200 hover:bg-white/10 hover:border-white/50"
          >
            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            Get a free protective coating quote
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <i className="fa-solid fa-chevron-down text-white/40 text-xl" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section ─── */
function ServicesSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            What We Do
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: CONFIG.colors.darkText }}
          >
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive industrial painting and protective coating solutions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border p-6 card-hover group"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:text-white"
                style={{
                  background: `${CONFIG.colors.primaryMid}15`,
                  color: CONFIG.colors.primaryMid,
                }}
              >
                <i className={`${service.icon} text-xl`} aria-hidden="true"></i>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: CONFIG.colors.darkText }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {service.shortDesc}
              </p>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: CONFIG.colors.primaryMid }}
              >
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            Our Advantage
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: CONFIG.colors.darkText }}
          >
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We deliver results that go beyond aesthetics — protection, durability, and safety that you can count on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyus.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border p-6 text-center card-hover"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl"
                style={{ background: CONFIG.colors.accentOrange }}
              >
                <i className={item.icon} aria-hidden="true"></i>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: CONFIG.colors.darkText }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Before & After Gallery ─── */
function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            Our Work
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: CONFIG.colors.darkText }}
          >
            Transforming Structures, Ensuring Durability
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See the difference our professional industrial painting and coating services make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <div className="grid grid-cols-2 h-56">
                  <div className="relative">
                    <Image
                      src={project.beforeImage}
                      alt={`Before ${project.category} painting — ${project.title} — Bhavnagar Gujarat`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.afterImage}
                      alt={`After ${project.category} coating — ${project.title} — Bhavnagar Gujarat`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 text-white"
                  style={{ background: CONFIG.colors.primaryMid }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-bold text-base"
                  style={{ color: CONFIG.colors.darkText }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border-2 transition-all duration-200"
            style={{
              borderColor: CONFIG.colors.primaryMid,
              color: CONFIG.colors.primaryMid,
            }}
          >
            View all industrial painting projects
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Trusted By ─── */
function TrustedBySection() {
  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            Our Partners
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: CONFIG.colors.darkText }}
          >
            Trusted By Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
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
              <h3
                className="font-bold text-base mb-1"
                style={{ color: CONFIG.colors.darkText }}
              >
                {client.name}
              </h3>
              <p className="text-gray-500 text-sm">{client.siteAddress}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "fa-solid fa-clock", label: "7+ Years" },
            { icon: "fa-solid fa-industry", label: "50+ Projects" },
            { icon: "fa-solid fa-shield-halved", label: "Zero Incidents" },
            { icon: "fa-solid fa-helmet-safety", label: "PPE Compliant" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white border text-sm font-medium"
              style={{ borderColor: CONFIG.colors.border, color: CONFIG.colors.darkText }}
            >
              <i className={badge.icon} style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Safety Standards ─── */
function SafetySection() {
  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.primaryDark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.accentOrange }}>
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Safety First — Always
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every worker on every site is equipped with full PPE. We maintain a zero safety incident record.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {safety.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl"
                style={{ background: `${CONFIG.colors.accentOrange}30`, color: CONFIG.colors.accentOrange }}
              >
                <i className={item.icon} aria-hidden="true"></i>
              </div>
              <h3 className="font-bold text-sm text-white mb-1">{item.name}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{item.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
            Client Feedback
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: CONFIG.colors.darkText }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl border p-8 relative card-hover"
              style={{ borderColor: CONFIG.colors.border }}
              data-aos="fade-up"
            >
              {/* Quote icon */}
              <div
                className="absolute -top-4 left-6 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ background: CONFIG.colors.primaryMid }}
              >
                <i className="fa-solid fa-quote-left text-sm" aria-hidden="true"></i>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: client.rating }, (_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-sm"
                    style={{ color: CONFIG.colors.accentOrange }}
                    aria-hidden="true"
                  ></i>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{client.testimonial}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: CONFIG.colors.border }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: CONFIG.colors.primaryDark }}
                >
                  {client.personName[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: CONFIG.colors.darkText }}>
                    {client.personName}
                  </div>
                  <div className="text-gray-500 text-xs">{client.designation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
