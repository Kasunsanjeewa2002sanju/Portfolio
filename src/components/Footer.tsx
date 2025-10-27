import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-gradient">KASUN SANJEEWA</div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Full Stack and Mobile App Developer crafting performant, elegant digital experiences.
            </p>
          </div>

          
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xl text-muted-foreground">
            © {year} Kasun Sanjeewa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
