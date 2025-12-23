// Sanity Image type for image references
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  url: string;
  width: number;
  height: number;
  caption?: string;
}

// Portable Text Block types
export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style?: string;
  children: PortableTextChild[];
  markDefs?: PortableTextMarkDef[];
  listItem?: string;
}

export interface PortableTextChild {
  _type: "span";
  _key: string;
  text: string;
  marks?: string[];
}

export interface PortableTextMarkDef {
  _type: string;
  _key: string;
  href?: string;
}

export type PortableText = (PortableTextBlock | SanityImage)[];

// Skill Card interface for homepage
export interface SkillCard {
  title: string;
  progress: number;
  description: string;
}

// Reference interface for project links
export interface Reference {
  title: string;
  url: string;
  type: "github" | "website" | "demo" | "other";
}

// Project Link interface for project links
export interface ProjectLink {
  label: string;
  url: string;
  newTab: boolean;
}

// Project interface matching the project schema
export interface Project {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: PortableText;
  slug: {
    _type: "slug";
    current: string;
  };
  images?: SanityImage[];
  links?: ProjectLink[];
  subtitle?: string;
  fullDescription?: string;
  keyFeatures?: string[];
  techStack?: string[];
  references?: Reference[];
}

// Career interface matching the career schema
export interface Career {
  _id: string;
  _type: "career";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  dateStarted: string;
  dateEnded?: string;
  description: string;
  jobTitle: string;
  company: string;
  links?: ProjectLink[];
  techStack?: string[];
}

// Homepage interface matching the homepage schema
export interface Homepage {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroHeading: string;
  profileImage: SanityImage;
  profileName: string;
  bioIntro: string;
  bioSecondary: string;
  skillsSectionTitle: string;
  skillsSectionDescription: string;
  skillCards: SkillCard[];
  coreSkills: string[];
  careerSectionHeading: string;
  projectsSectionHeading: string;
}

// API Response types
export interface SanityResponse<T> {
  data: T;
  error?: string;
}
