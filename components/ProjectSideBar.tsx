"use client";

import type { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectSidebarProps {
  projects: Project[];
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * Renders the list of project names as an ARIA tablist.
 * On desktop it's a vertical stack; on smaller screens it becomes a
 * horizontally scrollable row so the whole list is still reachable.
 */
export function ProjectSidebar({
  projects,
  activeId,
  onSelect,
}: ProjectSidebarProps) {
  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    // Standard WAI-ARIA tablist behavior: arrow keys move focus + selection
    const isForward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const isBackward = event.key === "ArrowUp" || event.key === "ArrowLeft";

    if (!isForward && !isBackward) return;
    event.preventDefault();

    const direction = isForward ? 1 : -1;
    const nextIndex = (index + direction + projects.length) % projects.length;
    const nextProject = projects[nextIndex];
    if (!nextProject) return;

    onSelect(nextProject.id);

    // Move focus along with selection so keyboard users can keep tabbing through
    const nextTab = document.getElementById(`project-tab-${nextProject.id}`);
    nextTab?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Projects"
      aria-orientation="vertical"
      className="flex gap-6 overflow-x-auto pb-2 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0"
    >
      {projects.map((project, index) => {
        const isActive = project.id === activeId;

        return (
          <button
            key={project.id}
            id={`project-tab-${project.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`project-panel-${project.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(project.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-sm text-left text-lg uppercase transition-colors duration-300 md:text-xl font-display-medium cursor-pointer",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4",
              isActive ? "text-black" : "text-silver hover:text-neutral-300",
            )}
          >
            {project.name}
          </button>
        );
      })}
    </div>
  );
}
