const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <section id={id} className="p-12 py-8 block">
      {children}
    </section>
  );
};

export default Section;
