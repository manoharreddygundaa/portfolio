import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "SR University",
    year: "2023 - 2027 (Currently Pursuing)",
    grade: "9.4 CGPA",
    isCurrent: true,
  },
  {
    degree: "Intermediate (12th)",
    institution: "Sri Krishnaveni Jr College",
    year: "2021 - 2023",
    grade: "9.83%",
    isCurrent: false,
  },
  {
    degree: "Secondary School (10th)",
    institution: "Sri Chaitanya School",
    year: "2021",
    grade: "10 CGPA",
    isCurrent: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative mb-8 last:mb-0 ${
                  index === 0 ? "animate-fade-up opacity-0 animation-delay-100" : ""
                } ${index === 1 ? "animate-fade-up opacity-0 animation-delay-200" : ""} ${
                  index === 2 ? "animate-fade-up opacity-0 animation-delay-300" : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:flex w-16 h-16 rounded-2xl items-center justify-center shrink-0 ${
                      edu.isCurrent
                        ? "bg-primary text-primary-foreground shadow-card"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <GraduationCap size={28} />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 p-6 rounded-2xl transition-all duration-300 hover:shadow-card ${
                      edu.isCurrent
                        ? "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                        : "bg-background shadow-soft"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h3 className="font-heading font-bold text-lg text-foreground">
                        {edu.degree}
                      </h3>
                      {edu.isCurrent && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{edu.year}</span>
                      <span className="flex items-center gap-1 text-primary font-semibold">
                        <Award size={16} />
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Note */}
        <div className="mt-16 max-w-2xl mx-auto text-center p-6 bg-accent/50 rounded-2xl">
          <h3 className="font-heading font-semibold text-foreground mb-2">
            Internship Experience
          </h3>
          <p className="text-muted-foreground">
            Completed Infosys Springboard internship where I focused on frontend development 
            using React, building responsive UI components, designing user interfaces, and 
            collaborating with the backend team for seamless API integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
