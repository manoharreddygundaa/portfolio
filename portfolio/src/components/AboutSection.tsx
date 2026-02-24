import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building complete web applications from frontend to backend",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Strong foundation in DSA and algorithmic thinking",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach with effective communication",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Adaptable and always eager to learn new technologies",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm <span className="text-foreground font-semibold">Gunda Manoharreddy</span>, 
              a passionate aspiring software developer currently pursuing B.Tech in 
              Computer Science Engineering at SR University. I enjoy learning new 
              technologies and transforming ideas into real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software development has equipped me with skills in 
              full-stack web development using technologies like JavaScript, Node.js, 
              Express.js, and various databases. I also have a strong foundation in 
              Java and Data Structures & Algorithms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm driven by continuous improvement, teamwork, and solving meaningful 
              problems through coding and innovation. Currently looking for opportunities 
              to apply my skills and grow as a developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-accent px-4 py-2 rounded-lg">
                <span className="text-accent-foreground font-medium">📍 Kothagudem, Telangana</span>
              </div>
              <div className="bg-accent px-4 py-2 rounded-lg">
                <span className="text-accent-foreground font-medium">🎓 B.Tech CSE 2027</span>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "animate-fade-up opacity-0 animation-delay-100" : ""
                } ${index === 1 ? "animate-fade-up opacity-0 animation-delay-200" : ""} ${
                  index === 2 ? "animate-fade-up opacity-0 animation-delay-300" : ""
                } ${index === 3 ? "animate-fade-up opacity-0 animation-delay-400" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
