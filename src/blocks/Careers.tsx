import { Section } from "@/components/layout/Section";
import { Career } from "@/types/sanity";
import { formatStartAndEndDate } from "@/utils/dates";
import { LinkIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";

interface CarreerBlockProps {
  id?: string;
  careers: Career[];
}

const Careers = ({ id, careers }: CarreerBlockProps) => {
  return (
    <Section id={id}>
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
                        className="text-white focus-visible:text-purple-300 hover:text-yellow-300 flex items-center gap-2"
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
                      <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-300 ">
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
    </Section>
  );
};

export { Careers };
