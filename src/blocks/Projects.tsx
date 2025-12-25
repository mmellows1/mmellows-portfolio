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
import { Project } from "@/types/sanity";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";

interface ProjectBlockProps {
  projects: Project[];
  id?: string;
}

const Projects = ({ id, projects }: ProjectBlockProps) => {
  return (
    <Section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id={id}
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
                      className="cursor-pointer inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-yellow-300 focus-visible:text-yellow-300  group/link text-base"
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
            <DialogContent className="bg-slate-900 h-[90vh] overflow-y-auto sm:bg-transparent sm:max-w-5xl w-full sm:p-12 sm:border-2 border-none">
              <div className="flex flex-col">
                <div className="text-slate-400">
                  <DialogTitle className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
                    {project.title}
                  </DialogTitle>
                  <PortableTextRenderer content={project.description} />
                </div>
                <div className="mb-6">
                  <ul>
                    {project?.links?.map((link: any, index: number) => (
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
                        {project.images?.map(
                          (projectImage: any, index: number) => (
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
                          )
                        )}
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
    </Section>
  );
};

export { Projects };
