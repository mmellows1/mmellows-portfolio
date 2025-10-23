import HeroBlock from "@/blocks/HeroBlock";
import ProjectsBlock from "@/blocks/ProjectsBlock";
import SkillsBlock from "@/blocks/SkillsBlock";
import { getCareers, getHomepage, getProjects } from "@/utils/api";
import { Download, Linkedin } from "lucide-react";

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

      <div className="flex lg:hidden bg-slate-700 p-8 justify-center gap-4 font-bold">
        <a
          className="font-mono flex gap-4 items-center text-sm"
          href="/cv.pdf"
          target="_blank"
        >
          <div>
            <Download className="bg-amber-500 p-1 rounded-md" size={24} />
          </div>
          Download my CV
        </a>
        <a
          className="font-mono flex gap-4 items-center text-sm"
          href="https://www.linkedin.com/in/matthew-mellows-b3166487/"
          target="_blank"
        >
          <div>
            <Linkedin className="bg-amber-500 p-1 rounded-md" size={24} />
          </div>
          View my LinkedIn
        </a>
      </div>
    </div>
  );
}
