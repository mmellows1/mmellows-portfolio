import { createClient } from "@sanity/client";
import {
  Project,
  Career,
  Homepage,
  SanityImage,
  SanityResponse,
} from "@/types/sanity";

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false, // Use CDN for faster responses
  token: process.env.SANITY_API_TOKEN, // Optional: for private datasets
});

// GROQ queries
const HOMEPAGE_QUERY = `*[_type == "homepage"][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  heroHeading,
  profileImage,
  profileName,
  bioIntro,
  bioSecondary,
  skillsSectionTitle,
  skillsSectionDescription,
  skillCards,
  coreSkills,
  careerSectionHeading,
  projectsSectionHeading
}`;

const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  description,
  excerpt,
  slug,
  images[]{
    "url": asset->url,
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height,
    "alt": coalesce(alt, "") 
  },
  links,
  subtitle,
  fullDescription,
  keyFeatures,
  techStack,
  references
}`;

const CAREERS_QUERY = `*[_type == "career"] | order(defined(dateEnded) asc, dateStarted desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  dateStarted,
  dateEnded,
  description,
  jobTitle,
  techStack,
  links
}`;

const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  description,
  slug,
  images,
  links,
  subtitle,
  fullDescription,
  keyFeatures,
  techStack,
  references
}`;

/**
 * Fetch homepage content from Sanity
 * @returns Promise<Homepage> - Homepage content
 */
export async function getHomepage(): Promise<SanityResponse<Homepage | null>> {
  try {
    const data = await client.fetch<Homepage | null>(HOMEPAGE_QUERY);
    return { data };
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return {
      data: null,
      error:
        error instanceof Error ? error.message : "Failed to fetch homepage",
    };
  }
}

/**
 * Fetch all projects from Sanity
 * @returns Promise<Project[]> - Array of all projects
 */
export async function getProjects(): Promise<SanityResponse<Project[]>> {
  try {
    const data = await client.fetch<Project[]>(PROJECTS_QUERY);
    return { data };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      data: [],
      error:
        error instanceof Error ? error.message : "Failed to fetch projects",
    };
  }
}

/**
 * Fetch all careers from Sanity
 * @returns Promise<Career[]> - Array of all careers
 */
export async function getCareers(): Promise<SanityResponse<Career[]>> {
  try {
    const data = await client.fetch<Career[]>(CAREERS_QUERY);
    return { data };
  } catch (error) {
    console.error("Error fetching careers:", error);
    return {
      data: [],
      error: error instanceof Error ? error.message : "Failed to fetch careers",
    };
  }
}

/**
 * Fetch a single project by slug
 * @param slug - The project slug
 * @returns Promise<Project | null> - The project or null if not found
 */
export async function getProjectBySlug(
  slug: string
): Promise<SanityResponse<Project | null>> {
  try {
    const data = await client.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, {
      slug,
    });
    return { data };
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch project",
    };
  }
}

/**
 * Generate optimized image URL for Sanity images
 * @param image - Sanity image reference
 * @param width - Desired width (optional)
 * @param height - Desired height (optional)
 * @param quality - Image quality 0-100 (optional, default: 75)
 * @returns Optimized image URL
 */
export function getImageUrl(
  image: SanityImage,
  width?: number,
  height?: number,
  quality: number = 75
): string {
  if (!image?.asset?._ref) {
    return "";
  }

  const baseUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
  const imageId = image.asset._ref
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-png", ".png")
    .replace("-webp", ".webp");

  let url = `${baseUrl}/${imageId}`;
  const params = new URLSearchParams();

  if (width) params.append("w", width.toString());
  if (height) params.append("h", height.toString());
  params.append("q", quality.toString());
  params.append("fit", "crop");
  params.append("auto", "format");

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  return url;
}
