import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
