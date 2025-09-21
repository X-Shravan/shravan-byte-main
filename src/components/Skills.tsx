import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Code, Database, Wrench, Bot, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C++", "Kotlin", "Advanced Java", "Dart", "JavaScript"]
    },
    {
      category: "Frameworks & Libraries", 
      icon: Monitor,
      skills: ["Flutter", "Django", "Bootstrap", "Android Framework", "React", "Express.js"]
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["Firebase", "SQL", "SQLite", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Android Studio", "VS Code", "PyCharm", "IntelliJ IDEA", "Postman"]
    },
    {
      category: "APIs & AI/ML",
      icon: Bot,
      skills: ["RESTful APIs", "Gemini API", "Firebase ML Kit", "TensorFlow", "OpenAI API", "Speech-to-Text"]
    },
    {
      category: "Development Concepts",
      icon: Lightbulb,
      skills: ["Mobile App Development", "Web Development", "UI/UX Design", "Agile Development", "Version Control"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Constantly evolving toolkit for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="card-gradient border-border/50 p-6 hover:glow-purple transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200 text-xs px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "7+", label: "Programming Languages" },
            { number: "6+", label: "Frameworks & Libraries" },
            { number: "5+", label: "Database Systems" },
            { number: "6+", label: "AI/ML & API Tools" }
          ].map((stat, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-6 text-center hover:glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;