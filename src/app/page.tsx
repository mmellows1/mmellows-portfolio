import { Careers } from "@/blocks/Careers";
import { Projects } from "@/blocks/Projects";
import { Section } from "@/components/layout/Section";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCareers, getHomepage, getProjects } from "@/utils/api";
import { formatStartAndEndDate } from "@/utils/dates";
import { LinkIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const [homepageResponse, projectsResponse, careersResponse] =
    await Promise.all([getHomepage(), getProjects(), getCareers()]);

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
  const careers = careersResponse.data;
  const projects = projectsResponse.data;

  return (
    <div>
      <Section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="space-y-4">
          <p dangerouslySetInnerHTML={{ __html: homepage.bioIntro }}></p>
          <p dangerouslySetInnerHTML={{ __html: homepage.bioSecondary }}></p>
        </div>
      </Section>
      <Careers id="careers" careers={careers} />
      <Projects id="projects" projects={projects} />
    </div>
  );
}
