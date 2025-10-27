import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  const categories = ["All", "AWS", "Azure", "MongoDB"] as const;
  type Category = typeof categories[number];

  const [active, setActive] = useState<Category>("All");

  const filenameToTitle = (url: string) => {
    const file = url.split("/").pop() || "Certificate";
    const base = file.replace(/\.[^/.]+$/, "");
    return base.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const awsImages = import.meta.glob("../assets/AWS/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,pdf,PDF,svg,SVG}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const azureImages = import.meta.glob("../assets/AZURE/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,pdf,PDF,svg,SVG}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const mongoImages = import.meta.glob("../assets/MongoDB/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,pdf,PDF,svg,SVG}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const buildItems = (images: Record<string, string>, category: Exclude<Category, "All">) =>
    Object.values(images).map((src) => ({
      title: filenameToTitle(src),
      category,
      src,
    }));

  const items: { title: string; category: Exclude<Category, "All">; src: string; note?: string }[] = [
    ...buildItems(awsImages, "AWS"),
    ...buildItems(azureImages, "Azure"),
    ...buildItems(mongoImages, "MongoDB"),
  ];

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const brandCards: { title: string; category: Exclude<Category, "All">; src: string }[] = [
    {
      title: "Amazon Web Services",
      category: "AWS",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      title: "Microsoft Azure",
      category: "Azure",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    },
    {
      title: "MongoDB",
      category: "MongoDB",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-3">ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognitions and expertise across leading cloud and database platforms.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={active === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {active === "All" && (
          <div className="grid gap-5 sm:grid-cols-3 mb-6">
            {brandCards.map((b) => (
              <Card key={b.category} className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer" onClick={() => setActive(b.category)}>
                <div className="relative bg-card/60 border border-border rounded-xl overflow-hidden h-40 md:h-44 flex items-center justify-center p-4">
                  <img
                    src={b.src}
                    alt={b.title}
                    className="max-w-[70%] max-h-[70%] object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        )}

        {active !== "All" && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => {
              const isPdf = /\.pdf$/i.test(item.src);
              return (
                <Card key={idx} className="group overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative bg-card/60 border border-border rounded-xl overflow-hidden h-56 md:h-64 lg:h-72 flex items-center justify-center p-2 sm:p-3">
                    {isPdf ? (
                      <div className="w-full h-full flex flex-col">
                        <embed
                          src={`${item.src}#toolbar=0&navpanes=0`}
                          type="application/pdf"
                          className="w-full h-full rounded-md object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-3 flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                          <Button size="sm" variant="outline" onClick={() => window.open(item.src, "_blank")}>
                            View
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={item.src}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain m-auto"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-3 flex items-center justify-start">
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
