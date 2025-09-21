import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Creating intuitive Android & Flutter applications with modern UI/UX design and seamless Firebase integration for scalable mobile solutions.",
      icon: "📱",
      features: ["Android Native", "Flutter Cross-Platform", "Firebase Integration", "Modern UI/UX"]
    },
    {
      title: "Web Development", 
      description: "Building responsive websites and web applications using Django, React, and modern front-end technologies for optimal performance.",
      icon: "🌐",
      features: ["Django Backend", "React Frontend", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "AI & ML Integration",
      description: "Implementing machine learning models, AI-powered chatbots, and predictive analytics to bring intelligent features to your applications.",
      icon: "🤖",
      features: ["ML Model Deployment", "AI Chatbots", "Predictive Analytics", "Firebase ML Kit"]
    },
    {
      title: "API Development & Integration",
      description: "Designing robust RESTful APIs and seamlessly integrating third-party services to enhance application functionality and connectivity.",
      icon: "🔗",
      features: ["RESTful APIs", "Third-party Integration", "Gemini API", "Custom Endpoints"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Awesome <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into digital solutions with cutting-edge technology and innovative approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-8 hover:glow-cyan transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6 group-hover:animate-float">{service.icon}</div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8">
              Let's collaborate to bring your ideas to life with innovative technology solutions.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 animate-glow"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;