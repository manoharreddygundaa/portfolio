import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
{
  title: "Frontend Development",
  description: "Building responsive and interactive user interfaces",
  icon: Code2,
  skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Bootstrap", "Tailwind CSS"]
},
{
  title: "Backend Development",
  description: "Creating robust server-side applications & APIs",
  icon: Server,
  skills: ["Node.js", "Express.js", "REST APIs", "EJS"]
},
{
  title: "Database",
  description: "Designing and managing data storage solutions",
  icon: Database,
  skills: ["MySQL", "MongoDB"]
},
{
  title: "Tools & Technologies",
  description: "Development tools and methodologies I use daily",
  icon: Wrench,
  skills: ["Git & GitHub", "VS Code", "Postman"]
}];


const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-card to-background">
      {/* Subtle floating background shapes */}
      <div className="absolute top-16 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-16 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">

          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Technologies and tools I work with
          </p>
          {/* Gradient underline */}
          <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) =>
          <div
            key={category.title}
            className="group relative rounded-[20px] bg-background/80 backdrop-blur-sm border border-border/50 p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500">

              {/* Gradient top border accent */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[20px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2.5 mt-5">
                {category.skills.map((skill) =>
              <span
                key={skill}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-accent/70 text-accent-foreground border border-border/30 hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:shadow-[0_0_16px_hsl(var(--primary)/0.2)] transition-all duration-300 cursor-default">

                    {skill}
                  </span>
              )}
              </div>
            </div>
          )}
        </div>

        {/* Soft Skills */}
        <div className="mt-20 text-center">
          <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
            Soft Skills
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            Beyond the code — traits that drive collaboration
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
            "Problem Solving",
            "Quick Learner",
            "Team Collaboration",
            "Communication",
            "Time Management",
            "Adaptability"].
            map((skill) =>
            <span
              key={skill}
              className="px-5 py-2.5 rounded-xl bg-background border border-border/50 text-foreground font-medium text-sm shadow-soft hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:shadow-[0_0_16px_hsl(var(--primary)/0.15)] transition-all duration-300 cursor-default">

                {skill}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default SkillsSection;