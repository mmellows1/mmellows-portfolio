type SkillCardProps = {
  title: string;
  children: React.ReactNode;
  progress: number;
};

const SkillCard = ({ title, children, progress }: SkillCardProps) => {
  const percentage = Math.round((progress / 100) * 100);
  const progressBarWidth = `${percentage}%`;
  return (
    <div className="bg-slate-600 rounded-lg p-6 text-white py-8 pb-8 flex justify-between flex-col font-mono">
      <div>
        <h3 className="font-bold mb-2 font-mono text-xl">{title}</h3>
        <div className="mb-8">{children}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-2 bg-slate-500 relative rounded-full w-full flex">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-full absolute left-0 top-0 rounded-full"
            style={{ width: progressBarWidth }}
          ></div>
        </div>
        <div className="font-bold">{progress}%</div>
      </div>
    </div>
  );
};

export default SkillCard;
