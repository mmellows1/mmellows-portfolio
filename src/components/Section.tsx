const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section id={id} className={["p-12 py-8 block", className].join(" ")}>
      {children}
    </section>
  );
};

export default Section;
