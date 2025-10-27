import { Palette, Globe, Smartphone, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
  icon: <Palette className="h-8 w-8" />,
  title: 'UI/UX & Graphic Design',
description:
  'Crafting intuitive and visually appealing interfaces with a strong focus on user experience. I create responsive, accessible, and engaging designs for web, mobile, posters, and merchandise that seamlessly connect with users.',
features: [
  'Wireframing & Mockups',
  'Interactive Prototyping',
  'Responsive & Adaptive Design',
  'Design Systems & Style Guides',
  'User-Centered Research',
  'Poster & Marketing Designs',
  'Merchandise & Branding Designs',
],

  color: 'from-blue-500 to-cyan-500',
},
{
  icon: <Globe className="h-8 w-8" />,
  title: 'Web Development',
  description:
    'Building modern full-stack web applications using React.js, Node.js, and scalable backend solutions. I focus on performance, security, and clean code architecture.',
  features: [
    'Frontend Development',
    'Backend APIs',
    'Database Design',
    'Performance Optimization',
  ],
  color: 'from-primary to-primary-glow',
},
{
  icon: <Smartphone className="h-8 w-8" />,
 title: "Mobile App Development",
description:
  "Building user-focused mobile applications with native Android (Kotlin) and cross-platform development using React Native, ensuring seamless performance and intuitive UI/UX across all device types.",
features: [
  "Native Android Development (Kotlin)",
  "Cross-platform App Development",
  "Firebase Integration & Authentication",
  "State Management & API Connectivity",
  "Mobile UI/UX Design & Prototyping"
],

  color: 'from-green-500 to-emerald-500',
},

  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I offer end-to-end software development services that combine creativity, technical expertise, and modern design principles. Whether it’s a responsive web app, a scalable backend, or a feature-rich mobile application, I build solutions that are tailored to meet your business goals and user needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/30"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="ghost" 
                className="group/btn p-0 h-auto font-medium hover:text-primary"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Whether you need a website, 
              mobile app, or complete digital solution, I'm here to help.
            </p>
            <Button 
              variant="hero"
              size="lg" 
              onClick={scrollToContact}
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;