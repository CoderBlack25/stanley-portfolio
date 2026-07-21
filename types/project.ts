/**
 * A single screenshot/image belonging to a project.
 * Kept as its own type so a project can hold as many images as it needs
 * (the gallery just maps over the array).
 */
export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
}

/**
 * Shape of a single project entry.
 * This is the only file you need to look at when adding a new project,
 * everything else just reads from this shape.
 */
export interface Project {
  id: string;
  /** Name shown in the left-hand tab list, e.g. "Fairmoney" */
  name: string;
  /** Category/heading shown at the top of the info panel, e.g. "Digital Banking" */
  category: string;
  description: string;
  role: string;
  platform: string;
  /** Rendered as pill badges, e.g. ["Lending", "B2B", "KYB"] */
  scope: string[];
  websiteLabel: string;
  websiteUrl: string;
  images: ProjectImage[];
}
