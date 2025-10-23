import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  children: React.ReactNode;
  onReadMore: () => void;
};

const ProjectCard = ({ title, children, onReadMore }: ProjectCardProps) => {
  return (
    <div className="bg-slate-600 text-white rounded-lg overflow-hidden flex justify-between flex-col">
      <div className="p-8 border-t-amber-500 border-t-8">
        <h3 className="font-bold text-xl font-mono mb-2">{title}</h3>
        <div className="mb-2 font-mono">{children}</div>
        <button
          className="underline font-mono font-bold text-primary cursor-pointer"
          onClick={onReadMore}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
