import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Try importing images with error handling
let tracklyImage: string;
let agroFarmingImage: string;
let aisleNavigationImage: string;
let hotelux: string;
let skillbridge: string;
let apartmentImg: string;

try {
  tracklyImage = new URL("../assets/Trackly.jpeg", import.meta.url).href;
} catch (e) {
  console.warn("Trackly image not found, using placeholder");
  tracklyImage = "/placeholder.svg";
}

try {
  agroFarmingImage = new URL("../assets/AgroFarming.jpeg", import.meta.url)
    .href;
} catch (e) {
  console.warn("AgroFarming image not found, using placeholder");
  agroFarmingImage = "/placeholder.svg";
}

try {
  hotelux = new URL("../assets/HotelUx.jpg", import.meta.url).href;
} catch (e) {
  console.warn("Hotelux image not found, using placeholder");
  hotelux = "/placeholder.svg";
}

try {
  aisleNavigationImage = new URL(
    "../assets/AisleNavigation.png",
    import.meta.url
  ).href;
} catch (e) {
  console.warn("AisleNavigation image not found, using placeholder");
  aisleNavigationImage = "/placeholder.svg";
}

try {
  skillbridge = new URL("../assets/skillbridge.png", import.meta.url).href;
} catch (e) {
  console.warn("SkillBridge image not found, using placeholder");
  skillbridge = "/placeholder.svg";
}

try {
  apartmentImg = new URL("../assets/Apartment.jpg", import.meta.url).href;
} catch (e) {
  console.warn("Apartment image not found, using placeholder");
  apartmentImg = "/placeholder.svg";
}

const Portfolio = () => {
  const projects = [
    {
      title: "Trackly Mobile App",
      description:
        "A comprehensive income and expense management application with intelligent budget categorization, financial analytics, and spending insights.",
      tech: ["Kotlin", "Android", "Shared Preferences", "Material Design"],
      category: "Mobile App",
      icon: <Smartphone className="h-6 w-6" />,
      image: tracklyImage,
      features: [
        "Budget Tracking",
        "Expense Categories",
        "Financial Reports",
        "Goal Setting",
      ],
      status: "Completed",
      link: "",
      link2: "https://github.com/Kasunsanjeewa2002sanju/Trackly-Mobile-App",
    },
    {
      title: "Agro-Farming Platform",
      description:
        "A digital marketplace connecting farmers directly with buyers, featuring product listings, communication tools, and secure transactions.",
      tech: ["Kotlin", "Android"],
      category: "Mobile App",
      icon: <Smartphone className="h-6 w-6" />,
      image: agroFarmingImage,
      features: [
        "Farmer-Buyer Connect",
        "Product Catalog",
        "Location Services",
        "Real-time Chat",
      ],
      status: "Completed",
      link: "",
      link2: "",
    },
    {
      title: "Aisle Navigation System",
      description:
        "Full-stack web application for supermarket product location and personalized recommendations with advanced search capabilities.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Web App",
      icon: <Globe className="h-6 w-6" />,
      image: aisleNavigationImage,
      features: [
        "Product Search",
        "Store Navigation",
        "Recommendations",
        "Admin Dashboard",
      ],
      status: "Completed",
      link: "",
      link2:
        "https://github.com/Kasunsanjeewa2002sanju/Aisle-Navigation-Backend",
    },
    {
      title: "Hotel Booking Website",
      description:
        "Responsive hotel booking platform with beautiful UI, booking forms, image galleries, and room management system.",
      tech: ["React.js", "Tailwind CSS", "Node.js"],
      category: "Web App",
      icon: <Globe className="h-6 w-6" />,
      image: hotelux,
      features: [
        "Room Booking",
        "Gallery Showcase",
        "Responsive Design",
        "Payment Integration",
      ],
      status: "Completed",
      link: "",
      link2: "https://github.com/Kasunsanjeewa2002sanju/Hotel-Booking-Web",
    },
    {
      title: "Apartment Booking Web App",
      description:
        "Full-stack apartment browsing and booking platform with real-time availability management and an admin dashboard for apartment listings.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Web App",
      icon: <Globe className="h-6 w-6" />,
      image: apartmentImg, 
      features: [
        "Apartment Listing & Search",
        "Booking Management",
        "Admin Dashboard",
        "Responsive UI",
      ],
      status: "Completed",
      link: "",
      link2: "https://github.com/Group12ITP/Apartment",
    },

    {
      title: "Skill Bridge",
      description:
        "Smart job recommendation and skill-development mobile application where institutes can add courses and skill categories and students can follow learning paths.",
      tech: [
        "React Native",
        "Firebase Authentication",
        "Firebase Firestore",
        "JavaScript",
      ],
      category: "Mobile App",
      icon: <Smartphone className="h-6 w-6" />,
      image: skillbridge,
      features: [
        "Institute Profile Management",
        "Course & Skill Publishing",
        "Student Course Follow",
        "Real-time Updates",
      ],
      status: "Completed",
      link: "",
      link2: "https://github.com/Kasunsanjeewa2002sanju/SkillBridge",
    },
    {
  title: "POS System",
  description:
    "A web-based Point of Sale (POS) system for managing sales, inventory, and customer transactions efficiently with a user-friendly interface.",
  tech: ["HTML", "PHP", "MySQL", "CSS"],
  category: "Web App",
  icon: <Globe className="h-6 w-6" />,
  image: "", 
  features: [
    "Sales Management",
    "Inventory Tracking",
    "Customer Management",
    "Invoice Generation",
  ],
  status: "Completed",
  link: "",
  link2: "", 
},

  ];

  const getStatusColor = (status: string) => {
    return status === "Completed"
      ? "bg-green-500/10 text-green-500"
      : "bg-blue-500/10 text-blue-500";
  };

  // Design Works data and state
  const designCategories = [
    "Merch Designs",
    "AIESEC Posts",
    "Logos",
    "Posters",
  ];

  const filenameToTitle = (url: string) => {
    const file = url.split("/").pop() || "Design";
    const base = file.replace(/\.[^/.]+$/, "");
    return base.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const aiesecImages = import.meta.glob("../assets/AIESEC POSTS/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const logoImages = import.meta.glob("../assets/Logos/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const merchImages = import.meta.glob("../assets/Merch designs/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const posterImages = import.meta.glob("../assets/Posters/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const buildItems = (images: Record<string, string>, category: string) =>
    Object.values(images).map((src) => ({
      title: filenameToTitle(src),
      category,
      src,
    }));

  const designItems: { title: string; category: string; src: string }[] = [
    ...buildItems(aiesecImages, "AIESEC Posts"),
    ...buildItems(logoImages, "Logos"),
    ...buildItems(merchImages, "Merch Designs"),
    ...buildItems(posterImages, "Posters"),
  ];

  const [activeCategory, setActiveCategory] = useState<string>(designCategories[0]);
  const filtered = designItems.filter((d) => d.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack
            development, mobile applications, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-primary">{project.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    {project.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.link2, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card to-card/50 rounded-2xl p-8 border">
            <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">More Projects on GitHub</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Explore my complete portfolio of projects, contributions, and
              open-source work.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/Kasunsanjeewa2002sanju"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-3">DESIGN WORKS</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Design Works</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated selection of my graphic design work across brand identity, social media, merchandise, and posters.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {designCategories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, idx) => (
              <Card key={idx} className="group overflow-hidden hover:shadow-lg transition-all">
                <div className="relative aspect-[4/3] bg-card overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      {/* <h4 className="text-white font-semibold drop-shadow">{item.title}</h4> */}
                      <Badge variant="secondary" className="text-xs mt-1">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Portfolio;
