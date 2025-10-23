import { getCareers, getProjects, getHomepage } from "@/utils/api";
import HeroBlock from "@/blocks/HeroBlock";
import SkillsBlock from "@/blocks/SkillsBlock";
import CareerBlock from "@/blocks/CareerBlock";
import ProjectsBlock from "@/blocks/ProjectsBlock";

export default async function Home() {
  // Fetch data from Sanity
  const homepageResponse = await getHomepage();
  const projectsResponse = await getProjects();
  const careersResponse = await getCareers();

  if (projectsResponse.error) {
    return <div>Error loading projects</div>;
  }

  if (careersResponse.error) {
    return <div>Error loading careers</div>;
  }

  // Handle errors
  if (homepageResponse.error || !homepageResponse.data) {
    return <div>Error loading homepage content</div>;
  }

  const homepage = homepageResponse.data;
  const projects = projectsResponse.data;
  const careers = careersResponse.data;

  return (
    <div className="overflow-y-scroll h-[100vh]">
      <HeroBlock
        heroHeading={homepage.heroHeading}
        profileImage={homepage.profileImage}
        profileName={homepage.profileName}
        bioIntro={homepage.bioIntro}
        bioSecondary={homepage.bioSecondary}
      />

      <SkillsBlock
        title={homepage.skillsSectionTitle}
        description={homepage.skillsSectionDescription}
        skillCards={homepage.skillCards}
        skills={homepage.coreSkills}
      />

      <ProjectsBlock
        heading={homepage.projectsSectionHeading}
        projects={projects}
      />
    </div>
  );
}
