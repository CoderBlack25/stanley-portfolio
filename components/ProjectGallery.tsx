import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

/**
 * Right column: a vertically stacked, scrollable list of screenshots.
 * Matches the design where the first image sits fully in view and the
 * next one peeks in from below.
 */
export function ProjectGallery({ project }: ProjectGalleryProps) {
  if (project.images.length === 0) {
    // Defensive fallback so a newly-added project without images yet
    // doesn't render a broken layout
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl bg-neutral-100 text-sm text-neutral-400">
        No images yet
      </div>
    );
  }

  return (
    <div
      key={project.id}
      className="flex max-h-125 flex-col gap-6 overflow-y-auto pr-1 md:max-h-160 lg:max-h-190"
    >
      {project.images.map((image, index) => (
        <div
          key={image.id}
          className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-neutral-100"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover p-4 md:p-8"
            // Only the first, above-the-fold image needs eager loading
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
