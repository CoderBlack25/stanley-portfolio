import type { ReactNode } from "react";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectInfoProps {
  project: Project;
}

interface InfoRow {
  label: string;
  value: ReactNode;
}

/**
 * The middle column: category heading, description, then a small definition
 * list of role / platform / scope / website. Built as an array so adding a
 * new row later is a one-liner instead of copy-pasting markup.
 */
export function ProjectInfo({ project }: ProjectInfoProps) {
  const rows: InfoRow[] = [
    { label: "Role", value: project.role },
    { label: "Platform", value: project.platform },
    {
      label: "Scope",
      value: (
        <div className="flex flex-wrap gap-2">
          {project.scope.map((item) => (
            <span
              key={item}
              className="rounded-lg bg-ice px-3 py-1 font-medium font-switzer-regular text-black"
            >
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Visit Website",
      value: (
        <Link
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-neutral-600"
        >
          {project.websiteLabel}
        </Link>
      ),
    },
  ];

  return (
    <div
      id={`project-panel-${project.id}`}
      role="tabpanel"
      aria-labelledby={`project-tab-${project.id}`}
      // Re-mounts the panel content when the project changes so any
      // future enter animation retriggers instead of just swapping text
      key={project.id}
      className="max-w-xl"
    >
      <h3 className="text-lg md:text-xl font-display-medium text-black">
        {project.category}
      </h3>
      <p className="mt-3 leading-relaxed text-charcoal font-switzer-regular">
        {project.description}
      </p>

      <dl className="mt-6 border-t border-lilac">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[130px_1fr] items-center gap-4 border-b border-lilac py-4"
          >
            <dt className="text-charcoal font-switzer-regular">{row.label}</dt>
            <dd className="text-black font-switzer-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
