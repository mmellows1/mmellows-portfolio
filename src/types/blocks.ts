import { SanityImage, SkillCard, Career, Project } from "./sanity";

// Hero Block Props
export interface HeroBlockProps {
  heroHeading: string;
  profileImage: SanityImage;
  profileName: string;
  bioIntro: string;
  bioSecondary: string;
}

// Skills Block Props
export interface SkillsBlockProps {
  title: string;
  description: string;
  skillCards: SkillCard[];
  skills: string[];
}

// Career Block Props
export interface CareerBlockProps {
  heading: string;
  careers: Career[];
  coreSkills: string[];
}

// Projects Block Props
export interface ProjectsBlockProps {
  heading: string;
  projects: Project[];
}
