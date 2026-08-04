"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, User, ChevronRight, X, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: 'construction' | 'trade' | 'consultancy' | 'supply' | 'logistics';
  client: string;
  location: string;
  date: string;
  image: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Modern Structural Renovation',
    category: 'construction',
    client: 'Jaman Commercial Tower',
    location: 'Dhaka-1000, Bangladesh',
    date: 'December 2025',
    image: '/assets/images/Banner/project-renovation.webp',
    details: 'Complete building interior renovation and retrofitting of a multi-story commercial hub, maintaining international compliance standards.'
  },
  {
    id: 'proj-2',
    name: 'Cross-Border Electronics Sourcing',
    category: 'trade',
    client: 'Global Sourcing Ltd',
    location: 'Chittagong Port Terminal',
    date: 'March 2026',
    image: '/assets/images/Banner/project-electronics.webp',
    details: 'Coordinating high-volume international sourcing and customs clearance for industrial electrical setups.'
  },
  {
    id: 'proj-3',
    name: 'Corporate Compliance Setup',
    category: 'consultancy',
    client: 'Apex Ventures Group',
    location: 'Gulshan-2, Dhaka',
    date: 'June 2026',
    image: '/assets/images/Banner/project-compliance.webp',
    details: 'End-to-end legal compliance consultation, documentation structuring, and strategic advisory for setup of local subsidiaries.'
  },
  {
    id: 'proj-4',
    name: 'Industrial Machinery Supply',
    category: 'supply',
    client: 'National Infrastructure Agency',
    location: 'Narayanganj City, Bangladesh',
    date: 'April 2026',
    image: '/assets/images/Banner/project-machinery.webp',
    details: 'Supply of critical heavy-duty manufacturing and earthmoving machinery for government-approved logistics projects.'
  },
  {
    id: 'proj-5',
    name: 'Supply Chain Shipping Logistics',
    category: 'logistics',
    client: 'Intl Textiles Corporation',
    location: 'Dhaka - Chittagong Corridor',
    date: 'May 2026',
    image: '/assets/images/Banner/project-logistics.webp',
    details: 'Integrated supply chain distribution management, freight forwarding, and local warehouse logistics handling.'
  },
  {
    id: 'proj-6',
    name: 'Commercial Foundation Works',
    category: 'construction',
    client: 'Metro Infra Build',
    location: 'Uttara, Dhaka',
    date: 'February 2026',
    image: '/assets/images/Banner/project-foundation.webp',
    details: 'Executing deep foundation piling work and concrete reinforcement structures for multi-story mixed-use commercial space.'
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'construction', label: 'Construction' },
  { id: 'trade', label: 'Import & Export' },
  { id: 'consultancy', label: 'Consultancy' },
  { id: 'supply', label: 'General Supply' },
  { id: 'logistics', label: 'Logistics' },
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeFilter === cat.id
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                : 'bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer overflow-hidden bg-card/30 border border-border/80 hover:border-primary/50 rounded-2xl transition-all duration-300 hover:shadow-xl flex flex-col h-full"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-primary px-2.5 py-1 rounded-full flex items-center gap-1">
                  View Details <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors mb-4">
                {project.name}
              </h3>

              <div className="space-y-2 mt-auto text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                  <span className="truncate"><strong>Client:</strong> {project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                  <span className="truncate"><strong>Location:</strong> {project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                  <span><strong>Date:</strong> {project.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl bg-card rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative aspect-video w-full bg-muted">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-primary">
                  {selectedProject.category}
                </span>
                <h4 className="text-2xl font-black text-foreground mt-1">
                  {selectedProject.name}
                </h4>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-mono">CLIENT</span>
                    <span className="text-sm font-semibold text-foreground">{selectedProject.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-mono">LOCATION</span>
                    <span className="text-sm font-semibold text-foreground">{selectedProject.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-mono">COMPLETION</span>
                    <span className="text-sm font-semibold text-foreground">{selectedProject.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border bg-card flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
