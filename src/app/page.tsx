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
import { Link2, LinkIcon, SquareArrowOutUpRightIcon } from "lucide-react";
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
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="space-y-4">
          <p dangerouslySetInnerHTML={{ __html: homepage.bioIntro }}></p>
          <p dangerouslySetInnerHTML={{ __html: homepage.bioSecondary }}></p>
        </div>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="career"
      >
        <ol className="group/list">
          {careers.map((career) => (
            <li className="mb-12" key={career._id}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={formatStartAndEndDate(
                    career.dateStarted,
                    career.dateEnded
                  )}
                >
                  {formatStartAndEndDate(career.dateStarted, career.dateEnded)}
                </header>
                <div className="z-10 sm:col-span-6 space-y-4">
                  <h3 className="font-medium leading-snug text-slate-300">
                    <div>
                      <span className="flex gap-2 items-center">
                        {career.title}
                      </span>
                      <p className="text-slate-400">{career.jobTitle}</p>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {career.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {career.links?.map((link, index) => (
                      <li key={index}>
                        <Link
                          target={link.newTab ? "_blank" : "_self"}
                          href={link.url}
                          className="text-white focus-visible:text-purple-300 hover:text-teal-300 flex items-center gap-2"
                        >
                          <LinkIcon size={14} /> {link.label}{" "}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {career.techStack?.map((tech, index) => (
                      <li key={tech + index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <Link
          href="cv.pdf"
          target="_blank"
          className="flex justify-start underline-offset-8 font-bold hover:underline decoration-teal-300 text-white items-center gap-2 text-lg"
        >
          View my resume
          <SquareArrowOutUpRightIcon size={16} />
        </Link>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="projects"
      >
        <ul className="group/list space-y-8">
          {projects.map((project) => (
            <Dialog key={project._id}>
              <DialogTrigger asChild>
                <li>
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3
                        className="cursor-pointer inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label={project.title}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="flex justify-between">
                          {project.title}
                        </span>
                      </h3>
                      {project.excerpt && (
                        <p className="mt-2 text-sm leading-normal">
                          {project.excerpt}
                        </p>
                      )}
                    </div>
                    {project.images && project.images.length > 0 && (
                      <Image
                        alt={project.images[0]?.alt || project.title}
                        loading="lazy"
                        width={project.images[0].width}
                        height={project.images[0].height}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src={project.images[0].url}
                      />
                    )}
                  </div>
                </li>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 h-full sm:h-auto sm:bg-transparent sm:max-w-5xl w-full sm:p-12 sm:border-2 border-none">
                <div className="flex flex-col">
                  <div className="text-slate-400">
                    <DialogTitle className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
                      {project.title}
                    </DialogTitle>
                    <PortableTextRenderer content={project.description} />
                  </div>
                  <div className="mb-6">
                    <ul>
                      {project?.links?.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white font-bold hover:underline focus-visible:underline decoration-teal-300 underline-offset-4 flex items-center gap-2"
                          >
                            {link.label}
                            <SquareArrowOutUpRightIcon size={16} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    {project.images && project.images.length > 0 && (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images?.map((projectImage, index) => (
                            <CarouselItem key={index} className="h-fit">
                              <Image
                                alt={projectImage.alt || project.title}
                                loading="lazy"
                                width={projectImage.width}
                                height={projectImage.height}
                                decoding="async"
                                data-nimg="1"
                                className="rounded w-full"
                                src={projectImage.url}
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </ul>
      </section>
      {/* <HeroBlock
        heroHeading={homepage.heroHeading}
        profileImage={homepage.profileImage}
        profileName={homepage.profileName}
        bioIntro={homepage.bioIntro}
        bioSecondary={homepage.bioSecondary}
      /> */}

      {/* <SkillsBlock
        title={homepage.skillsSectionTitle}
        description={homepage.skillsSectionDescription}
        skillCards={homepage.skillCards}
        skills={homepage.coreSkills}
      />

      <ProjectsBlock
        heading={homepage.projectsSectionHeading}
        projects={projects}
      /> */}
    </div>
  );
}
