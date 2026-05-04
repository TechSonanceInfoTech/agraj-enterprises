"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CONFIG } from "@/config";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo";

import projectsData from "@/content/projects.json";
import clientsData from "@/content/clients.json";
import projectStatsData from "@/content/projectstats.json";

import type { Project, Client, ProjectStats } from "@/types";

const projects = projectsData as Project[];
const clients = clientsData as Client[];
const projectStats = projectStatsData as ProjectStats;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" }
        ])
      ]} />

      <PageHero
        title="Industrial Painting Projects & Portfolio"
        subtitle="See the quality and scale of our industrial painting work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Filter Bar + Projects Grid */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "text-white shadow-lg"
                    : "bg-white border text-gray-600 hover:border-gray-300"
                }`}
                style={
                  activeFilter === cat
                    ? { background: CONFIG.colors.primaryMid }
                    : { borderColor: CONFIG.colors.border }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border overflow-hidden card-hover"
                style={{ borderColor: CONFIG.colors.border }}
                data-aos="fade-up"
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2 h-48">
                  <div className="relative">
                    <Image
                      src={project.beforeImage}
                      alt={`Before ${project.category} painting — ${project.title} — Bhavnagar Gujarat`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
                      alt={`After ${project.category} painting — ${project.title} — Bhavnagar Gujarat`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white mb-3"
                    style={{ background: CONFIG.colors.primaryMid }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ color: CONFIG.colors.darkText }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot" style={{ color: CONFIG.colors.accentOrange }} aria-hidden="true"></i>
                      {project.location}
                    </span>
                    {project.client !== "Confidential" && (
                      <span className="flex items-center gap-1">
                        <i className="fa-solid fa-building" style={{ color: CONFIG.colors.primaryMid }} aria-hidden="true"></i>
                        {project.client}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 md:py-20" style={{ background: CONFIG.colors.primaryMid }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(projectStats).map(([key, value]) => {
              const labelMap: Record<string, { label: string; icon: string }> = {
                totalProjects: { label: "Total Projects", icon: "fa-solid fa-industry" },
                totalArea: { label: "Area Covered", icon: "fa-solid fa-ruler-combined" },
                structuresTreated: { label: "Structures Treated", icon: "fa-solid fa-building" },
                industriesServed: { label: "Industries Served", icon: "fa-solid fa-gear" },
                yearsExperience: { label: "Years Experience", icon: "fa-solid fa-clock" },
                safetyRecord: { label: "Safety Record", icon: "fa-solid fa-shield-halved" },
              };
              const info = labelMap[key] || { label: key, icon: "fa-solid fa-circle" };
              return (
                <div key={key} className="text-center text-white" data-aos="fade-up">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mx-auto mb-2">
                    <i className={info.icon} aria-hidden="true"></i>
                  </div>
                  <div className="text-2xl font-extrabold mb-1">{value}</div>
                  <div className="text-white/70 text-xs font-medium">{info.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client References */}
      <section className="py-20 md:py-28" style={{ background: CONFIG.colors.lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: CONFIG.colors.primaryMid }}>
              Client References
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: CONFIG.colors.darkText }}>
              Our Valued Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl border p-6 card-hover"
                style={{ borderColor: CONFIG.colors.border }}
                data-aos="fade-up"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: `${CONFIG.colors.primaryDark}10` }}
                >
                  <i className="fa-solid fa-building text-lg" style={{ color: CONFIG.colors.primaryDark }} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: CONFIG.colors.darkText }}>
                  {client.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{client.siteAddress}</p>
                <p className="text-gray-600 text-sm italic">&ldquo;{client.testimonial}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
