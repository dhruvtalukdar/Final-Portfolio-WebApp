// import { AccordionHeader } from "@radix-ui/react-accordion";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Next.js",
    "GraphQL",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate frontend developer with a keen eye for design and a
              love for creating seamless user experiences. With years of experience
              in web development, I specialize in building modern, responsive
              applications that make an impact.
            </p>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
