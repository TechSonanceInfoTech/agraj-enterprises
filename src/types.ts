export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  steps: string[];
  industries: string[];
  image: string;
  coatingTypes?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  client: string;
  description: string;
  featured: boolean;
  beforeImage: string;
  afterImage: string;
}

export interface Client {
  id: string;
  name: string;
  siteAddress: string;
  logo: string;
  testimonial: string;
  rating: number;
  personName: string;
  designation: string;
}

export interface SafetyItem {
  id: string;
  icon: string;
  name: string;
  purpose: string;
  standard: string;
}

export interface Coating {
  id: string;
  name: string;
  icon: string;
  description: string;
  properties: string[];
  applications: string[];
}

export interface Industry {
  id: string;
  icon: string;
  name: string;
}

export interface AboutContent {
  story: string;
  expertise: string;
  commitment: string;
  mission: string;
  vision: string;
}

export interface ProcessStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface SafetyProtocolStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface ProjectStats {
  totalProjects: string;
  totalArea: string;
  structuresTreated: string;
  industriesServed: string;
  yearsExperience: string;
  safetyRecord: string;
}

export interface SeoPageMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonicalPath: string;
}
