import { File, GithubIcon, LinkedinIcon, StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] flex-col lg:justify-between lg:py-24 gap-4">
      <div>
        <Image
          src="/me.webp"
          width={256}
          height={256}
          alt="Matthew Mellows"
          className="object-cover size-36 rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Matthew Mellows</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Developer | Wordpress Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Full-Stack developer with 5+ years of experience in Wordpress as well
          as React and NextJS
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#career">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Career
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8">
        <nav className="" aria-label="In-page jump links">
          <ul className="items-center justify-start gap-4 flex">
            <li className="hover:text-yellow-300 transition">
              <Link
                href="https://www.linkedin.com/in/matthew-mellows-b3166487/"
                target="_blank"
              >
                <LinkedinIcon />
              </Link>
            </li>
            <li className="hover:text-yellow-300 transition">
              <Link href="https://github.com/mmellows1" target="_blank">
                <GithubIcon />
              </Link>
            </li>
            <li className="hover:text-yellow-300 transition">
              <Link href="cv.pdf" target="_blank">
                <File />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
