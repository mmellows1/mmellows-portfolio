import { PortableText } from "@/types/sanity";
import PortableTextRenderer from "./PortableTextRenderer";

export type CareerCardProps = {
  title: string;
  children: React.ReactNode;
  usps: string[];
  dates: Date[];
  description: PortableText;
};

const CareerCard = ({
  title,
  description,
  children,
  usps,
}: CareerCardProps) => {
  return (
    <div className="text-white rounded-lg overflow-hidden flex justify-between flex-col">
      <div className="">
        <div className="pt-3">
          <span className="mb-3 font-bold text-sm italic block">
            August 2024 - present
          </span>
          <h2 className="text-2xl font-mono">{title}</h2>
          <div className="mb-4 font-bold text-sm font-mono"></div>
        </div>
        <PortableTextRenderer content={description} />
      </div>
    </div>
  );
};

export default CareerCard;
