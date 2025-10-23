"use client";

import Modal from "@/components/Modal";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { ProjectsBlockProps } from "@/types/blocks";
import {
  PortableText,
  PortableTextBlock,
  PortableTextChild,
  Project,
  SanityImage,
} from "@/types/sanity";
import { useState } from "react";

export default function ProjectsBlock({
  heading,
  projects,
}: ProjectsBlockProps) {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  // Helper function to extract plain text from portable text
  const getPlainText = (portableText: PortableText): string => {
    if (!portableText || !Array.isArray(portableText)) return "";

    return (
      portableText
        .map((block: PortableTextBlock | SanityImage) => {
          if (block._type === "block" && block.children) {
            return block.children
              .map((child: PortableTextChild) => child.text || "")
              .join("");
          }
          return "";
        })
        .join(" ")
        .substring(0, 150) + "..."
    );
  };

  const handleReadMore = (project: Project) => {
    setOpen(true);
    setActiveProject(project);
  };

  return (
    <Section id="my-projects">
      {open && (
        <Modal onRequestClose={() => setOpen(false)}>
          <div className="font-mono text-gray-700">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {activeProject?.title}
            </h1>
            <PortableTextRenderer content={activeProject?.description || []} />
          </div>
        </Modal>
      )}
      <div className="">
        <h2 className="col-span-1 text-xl lg:text-2xl font-bold font-mono mb-8">
          {heading}
          <div className="grid grid-cols-3"></div>
        </h2>
        <div className="flex flex-col md:grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              key={project._id}
              onReadMore={() => handleReadMore(project)}
            >
              {getPlainText(project.description)}
            </ProjectCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
