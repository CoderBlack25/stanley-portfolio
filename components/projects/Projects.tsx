"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import projects from "./projects-data";
import ProjectPreview from "./ProjectPreview";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-16 flex items-center justify-between">
        <h2 className="text-4xl font-black tracking-tight uppercase">
          Projects
        </h2>

        <Link href="/projects">
          <Button variant="outline" className="rounded-full px-8">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid gap-14 lg:grid-cols-[260px_1fr]">
        <aside className="overflow-x-auto lg:overflow-visible">
          <div className="flex gap-5 lg:block">
            {projects.map((project) => {
              const active = selectedProject.id === project.id;

              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`whitespace-nowrap text-left text-2xl font-black uppercase transition-all lg:block lg:mb-8 ${
                    active
                      ? "text-black dark:text-white"
                      : "text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {project.name}
                </button>
              );
            })}
          </div>
        </aside>

        <ProjectPreview project={selectedProject} />
      </div>
    </section>
  );
}
