import CareerCard, { CareerCardProps } from "./CareerCard";

type TimetableProps = {
  items: CareerCardProps[];
};
const Timetable = ({ items }: TimetableProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 relative">
        <div className="absolute left-0 w-2 h-full bg-primary rounded-full"></div>
        <div className="pl-8 flex flex-col gap-12">
          {items.map((item: CareerCardProps, index: number) => (
            <div className="relative" key={index}>
              <div className="bg-white size-8 absolute -left-11 top-2 rounded-full"></div>
              <CareerCard usps={item.usps} title={item.title}>
                {item.children}
              </CareerCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
