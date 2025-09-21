import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "FarmCure",
      description: "AI-powered crop disease detection Android application using Firebase ML Kit and Gemini API for accurate diagnosis and treatment recommendations.",
      image: "🌾",
      tech: ["Android", "Java", "Firebase ML Kit", "Gemini API", "Machine Learning"],
      features: ["Real-time Disease Detection", "AI-powered Recommendations", "Offline Capability", "Multi-language Support"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "EdTech Learning Platform", 
      description: "Interactive educational platform with speech-to-text and text-to-speech features, built with Android (Java) frontend and Python backend.",
      image: "📚",
      tech: ["Android", "Java", "Python", "Speech-to-Text", "TTS", "Educational Tech"],
      features: ["Interactive Learning", "Voice Commands", "Progress Tracking", "Adaptive Content"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "G Board - AI Chat App",
      description: "Intelligent chat application built with Flutter, featuring Gemini API integration and multiple conversation modes for enhanced user experience.",
      image: "💬",
      tech: ["Flutter", "Dart", "Gemini API", "AI/ML", "Chat Interface"],
      features: ["AI Conversations", "Multiple Chat Modes", "Real-time Messaging", "Cross-platform"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing development skills with dark theme, animations, and seamless user experience.",
      image: "🎨",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Modern UI"],
      features: ["Dark Theme", "Smooth Animations", "Responsive Design", "SEO Optimized"],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovation through practical applications and cutting-edge solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 overflow-hidden hover:glow-purple transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-8xl group-hover:animate-float">{project.image}</div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
                    onClick={() => window.open(project.links.demo, '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-8">
              Check out my GitHub for additional projects and contributions to the development community.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3"
              onClick={() => window.open('https://github.com/X-Shravan', '_blank')}
            >
              Visit GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;