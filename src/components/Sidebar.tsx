import { Download, Linkedin } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="p-8">
        <nav>
          <h1 className="text-2xl mb-4 font-bold leading-6">
            Welcome to my wonderful site
          </h1>
          <ul className="flex flex-col gap-2 font-bold">
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#my-skills">What am I proficient in</a>
            </li>
            <li>
              <a href="#my-projects">High-end client projects</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bg-slate-700 p-8 flex flex-col gap-4 font-bold">
        <a
          className="font-mono flex gap-4 items-center"
          href="/cv.pdf"
          target="_blank"
        >
          <Download className="bg-amber-500 p-2 rounded-md" size={36} />
          Download my CV
        </a>
        <a
          className="font-mono flex gap-4 items-center"
          href="https://www.linkedin.com/in/matthew-mellows-b3166487/"
          target="_blank"
        >
          <Linkedin className="bg-amber-500 p-2 rounded-md" size={36} />
          View my LinkedIn
        </a>
      </div>
    </>
  );
};

export default Sidebar;
