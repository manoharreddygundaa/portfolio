import { ExternalLink, Github, Wallet, Brain } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Budget Tracker AI",
    description:
      "An intelligent budget tracking application built during the Infosys Springboard internship. Features AI-powered insights for better financial management, expense categorization, and spending analysis.",
    tech: ["Java", "Spring Boot", "AI/ML", "REST API"],
    icon: Brain,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Circle Funds",
    description:
      "A peer-to-peer lending platform that connects borrowers with lenders directly. Features secure transactions, user verification, loan management, and real-time tracking of lending activities.",
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    icon: Wallet,
    color: "from-primary/15 to-primary/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="w-20 h-20 rounded-2xl bg-background/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={36} className="text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon as I continue to build and learn!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
