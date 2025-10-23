import { Homepage, Project, Career, SanityResponse } from './sanity';

// Aliases for API response shapes
export type HomepageResponse = SanityResponse<Homepage | null>;
export type ProjectsResponse = SanityResponse<Project[]>;
export type CareersResponse = SanityResponse<Career[]>;
export type ProjectBySlugResponse = SanityResponse<Project | null>;

// Combined data shape commonly used on the home page
export interface HomeApiData {
  homepage: Homepage;
  projects: Project[];
  careers: Career[];
}

// Optional combined API response wrapper if returned together from a route
export interface HomeApiResponse {
  projects: Project[];
  careers: Career[];
  errors?: {
    projects?: string;
    careers?: string;
    homepage?: string;
  };
}


