"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectSidebar } from "@/components/ProjectSideBar";
import { ProjectInfo } from "@/components/ProjectInfo";
import { ProjectGallery } from "@/components/ProjectGallery";

export default function ProjectsSection() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string>(projects[0]?.id ?? "");

  // Falls back to the first project if the active id somehow doesn't match
  // anything in the array (e.g. data was edited while a stale id was in state)
  const activeProject =
    projects.find((project) => project.id === activeId) ?? projects[0];

  if (!activeProject) {
    // Only happens if `projects` is empty, guards against a blank crash
    return null;
  }

  const handleViewAll = () => {
    router.push("/projects");
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 sm:mb-14">
        <h2 className="text-xl uppercase text-black sm:text-2xl md:text-3xl font-display-medium">
          Projects
        </h2>

        {/*
          Using the shadcn Button as a plain button (no `asChild`) and
          navigating on click. If your installed Button doesn't have
          `asChild` wired up yet, this sidesteps that entirely — see the
          note in the chat response if you want `asChild` support later.
        */}
        <Button
          //variant="outline"
          size="lg"
          type="button"
          onClick={handleViewAll}
          className="rounded-full bg-black px-6 text-white transition-colors hover:bg-neutral-800 font-switzer-medium cursor-pointer"
        >
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr_1fr] lg:gap-24">
        <ProjectSidebar
          projects={projects}
          activeId={activeProject.id}
          onSelect={setActiveId}
        />
        <ProjectInfo project={activeProject} />
        <ProjectGallery project={activeProject} />
      </div>
    </section>
  );
}
