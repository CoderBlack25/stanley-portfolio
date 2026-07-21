"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "./projects-data";

type Props = {
  project: Project;
};

export default function ProjectPreview({ project }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>

        <p className="mt-5 max-w-xl text-muted-foreground leading-8">
          {project.description}
        </p>
      </div>

      <div className="divide-y rounded-xl border bg-background">
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-muted-foreground">Role</span>

          <span className="font-medium">{project.role}</span>
        </div>

        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-muted-foreground">Platform</span>

          <span className="font-medium">{project.platform}</span>
        </div>

        <div className="flex items-center justify-between gap-6 px-6 py-5">
          <span className="text-muted-foreground shrink-0">Scope</span>

          <div className="flex flex-wrap justify-end gap-2">
            {project.scope.map((item) => (
              <span
                key={item}
                className="rounded-full bg-muted px-4 py-1.5 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-muted-foreground">Website</span>

          <Link
            href={project.website}
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Visit
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-neutral-100 p-8 dark:bg-neutral-900">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
