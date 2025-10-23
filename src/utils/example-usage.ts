// Example usage of the Sanity API library
// This file demonstrates how to use the API functions in your components

import { getProjects, getCareers, getProjectBySlug, getImageUrl } from './api';
import { Project, Career } from '@/types/sanity';

// Example: Using in a Server Component
export async function ExampleServerComponent() {
  // Fetch all projects
  const projectsResponse = await getProjects();
  if (projectsResponse.error) {
    console.error('Failed to fetch projects:', projectsResponse.error);
    return <div>Error loading projects</div>;
  }

  // Fetch all careers
  const careersResponse = await getCareers();
  if (careersResponse.error) {
    console.error('Failed to fetch careers:', careersResponse.error);
    return <div>Error loading careers</div>;
  }

  return (
    <div>
      <h2>Projects ({projectsResponse.data.length})</h2>
      {projectsResponse.data.map((project: Project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.images && project.images.length > 0 && (
            <img 
              src={getImageUrl(project.images[0], 300, 200)} 
              alt={project.title}
            />
          )}
        </div>
      ))}

      <h2>Careers ({careersResponse.data.length})</h2>
      {careersResponse.data.map((career: Career) => (
        <div key={career._id}>
          <h3>{career.title}</h3>
          <p>{career.excerpt}</p>
          <p>Started: {new Date(career.dateStarted).toLocaleDateString()}</p>
          {career.dateEnded && (
            <p>Ended: {new Date(career.dateEnded).toLocaleDateString()}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// Example: Using in an API route
export async function GET() {
  try {
    const projectsResponse = await getProjects();
    const careersResponse = await getCareers();

    return Response.json({
      projects: projectsResponse.data,
      careers: careersResponse.data,
      errors: {
        projects: projectsResponse.error,
        careers: careersResponse.error,
      }
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

// Example: Fetching a single project by slug
export async function getProjectPage(slug: string) {
  const projectResponse = await getProjectBySlug(slug);
  
  if (projectResponse.error || !projectResponse.data) {
    return { notFound: true };
  }

  return {
    project: projectResponse.data
  };
}
