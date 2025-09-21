import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      role: "App Developer - Intern",
      company: "ApexPlanet Software Pvt Ltd",
      location: "Remote",
      duration: "Apr 2025 - May 2025",
      description: "Developed mobile applications using modern frameworks and contributed to UI/UX improvements.",
      skills: ["Flutter", "Android", "Firebase", "API Integration"]
    },
    {
      role: "Web Application Developer - Intern",
      company: "Edunet Foundation",
      location: "Remote", 
      duration: "Mar 2025 - Apr 2025",
      description: "Built responsive web applications and implemented interactive learning features for educational platforms.",
      skills: ["React", "JavaScript", "CSS", "Educational Tech"]
    },
    {
      role: "Django Developer - Intern",
      company: "Anishree Technologies LLP",
      location: "Remote",
      duration: "Jun 2023 - Jul 2023",
      description: "Developed backend systems using Django framework and implemented RESTful APIs for web applications.",
      skills: ["Django", "Python", "REST APIs", "Database Design"]
    },
    {
      role: "Programmer - Intern",
      company: "PHN Technology Pvt Ltd", 
      location: "Remote",
      duration: "Apr 2023 - Jun 2023",
      description: "Worked on various programming projects and gained experience in software development lifecycle.",
      skills: ["Python", "Java", "Problem Solving", "Software Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience and real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="card-gradient border-border/50 p-8 hover:glow-cyan transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <span className="text-lg text-primary font-semibold">{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-accent font-medium text-sm lg:text-right">
                    {exp.duration}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;