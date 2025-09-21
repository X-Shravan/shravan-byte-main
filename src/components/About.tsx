import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "St Vincent Pallotti College of Engineering",
      year: "2024 - 2027",
      status: "Pursuing"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Gov Polytechnic Gadchiroli",
      year: "2024",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about turning innovative ideas into reality through code and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Statement */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software developer who loves building mobile and web apps with Flutter, Android, Java, Python, and SQL. My journey in technology is driven by an insatiable curiosity and the desire to turn innovative ideas into practical solutions.
              </p>
              <p>
                From AI-powered chatbots to machine learning projects, I thrive on exploring the cutting edge of technology. My approach combines technical expertise with creative problem-solving to deliver applications that not only work flawlessly but also provide exceptional user experiences.
              </p>
              <p>
                I believe in continuous learning and adaptation, staying current with the latest technological trends while maintaining a strong foundation in core programming principles. Every project is an opportunity to push boundaries and create something remarkable.
              </p>
            </div>

            <Button 
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://drive.google.com/file/d/12oEG-4uPNfl2d4ReFFFQHOmJ0fwnMmF0/view?usp=sharing', '_blank')}
            >
              Download Resume
            </Button>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient border-border/50 p-6 hover:glow-cyan transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      edu.status === 'Completed' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-accent font-medium">{edu.year}</p>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="card-gradient border-border/50 p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </Card>
              <Card className="card-gradient border-border/50 p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;