import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import { SkillsBlockProps } from "@/types/blocks";

export default function SkillsBlock({
  title,
  description,
  skillCards,
  skills,
}: SkillsBlockProps) {
  return (
    <Section
      id="my-skills"
      className="border-t-slate-700 lg:border-none border-t-4"
    >
      <div className="flex flex-col lg:grid lg:col-span-6 xl:grid-cols-12 gap-12">
        <div className="col-span-3 font-mono">
          <h2 className="text-lg lg:text-3xl mb-2 font-bold">{title}</h2>
          <p className="mb-4">{description}</p>
          <p className="mb-2 font-bold">Key skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="bg-amber-500 p-1 rounded-md">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-9 ">
          <div className="w-full flex flex-col md:grid lg:grid-cols-1 xl:grid-cols-3 gap-12">
            {skillCards.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                progress={skill.progress}
              >
                {skill.description}
              </SkillCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
