const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-gradient mb-2">Shravan Pramod Wargantiwar</div>
            <p className="text-muted-foreground text-sm">
              Mobile & Web App Developer | AI & ML Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com/in/shravan001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/X-Shravan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:shravanwargantiwar@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Shravan Pramod Wargantiwar — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;