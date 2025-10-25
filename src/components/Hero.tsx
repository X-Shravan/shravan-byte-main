import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Shravan</span>
            </h2>
            <div className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Mobile & Web App Developer
            </div>
            <div className="text-xl text-accent mb-8">
              AI & ML Enthusiast
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I'm a passionate software developer who loves building mobile and web apps with Flutter, Android, Java, Python, and SQL. Driven by curiosity, I turn ideas into practical, innovative solutions—ranging from AI-powered chatbots to machine-learning projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 animate-glow"
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 glow-cyan">
                <img 
                  src={profilePicture} 
                  alt="Shravan Pramod Wargantiwar - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent rounded-full p-4 animate-float">
                <div className="text-sm font-bold text-primary-foreground text-center">
                  <div>4+</div>
                  <div>Projects</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent to-primary rounded-full p-4 animate-float" style={{ animationDelay: '3s' }}>
                <div className="text-sm font-bold text-primary-foreground text-center">
                  <div>AI/ML</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
