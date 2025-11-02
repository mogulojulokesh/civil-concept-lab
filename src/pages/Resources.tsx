import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import CivilGPT from "@/components/CivilGPT";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, FileText, Video } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Textbooks",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        {
          title: "Strength of Materials",
          author: "R.K. Bansal",
          description: "Comprehensive guide to mechanics of materials and structural analysis"
        },
        {
          title: "Soil Mechanics and Foundation Engineering",
          author: "K.R. Arora",
          description: "In-depth coverage of geotechnical engineering principles"
        },
        {
          title: "Transportation Engineering",
          author: "Kadiyali & Lal",
          description: "Essential resource for highway and traffic engineering"
        }
      ]
    },
    {
      category: "Video Lectures",
      icon: <Video className="h-5 w-5" />,
      items: [
        {
          title: "NPTEL - Structural Analysis",
          author: "IIT Professors",
          link: "https://nptel.ac.in",
          description: "Free video lectures on structural engineering fundamentals"
        },
        {
          title: "NPTEL - Geotechnical Engineering",
          author: "IIT Professors",
          link: "https://nptel.ac.in",
          description: "Complete course on soil mechanics and foundation design"
        },
        {
          title: "NPTEL - Transportation Engineering",
          author: "IIT Professors",
          link: "https://nptel.ac.in",
          description: "Highway planning, design, and traffic management"
        }
      ]
    },
    {
      category: "IS Codes & Standards",
      icon: <FileText className="h-5 w-5" />,
      items: [
        {
          title: "IS 456:2000",
          description: "Plain and Reinforced Concrete - Code of Practice",
          link: "https://www.bis.gov.in"
        },
        {
          title: "IS 1893:2016",
          description: "Criteria for Earthquake Resistant Design of Structures",
          link: "https://www.bis.gov.in"
        },
        {
          title: "IS 800:2007",
          description: "General Construction in Steel - Code of Practice",
          link: "https://www.bis.gov.in"
        },
        {
          title: "IRC Codes",
          description: "Indian Roads Congress Standards for Highway Engineering",
          link: "https://www.irc.nic.in"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources - Civil Concepts Lab | Textbooks, NPTEL, IS Codes</title>
        <meta 
          name="description" 
          content="Essential civil engineering resources including textbooks, NPTEL video lectures, and IS codes for structural, geotechnical, and transportation engineering students." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <GlossarySidebar />
        <CivilGPT />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
              <p className="text-lg text-muted-foreground mb-12">
                Curated collection of textbooks, video lectures, and official standards to support your civil engineering education.
              </p>

              <div className="space-y-12">
                {resources.map((section, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {section.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{section.category}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {section.items.map((item, itemIdx) => (
                        <Card key={itemIdx} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="flex items-start justify-between">
                              <span>{item.title}</span>
                              {item.link && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  asChild
                                >
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${item.title}`}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </Button>
                              )}
                            </CardTitle>
                            {item.author && (
                              <CardDescription className="font-semibold">
                                by {item.author}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-card border-t py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>Developed on Lovable AI — Civil Concepts Lab © 2025.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Resources;
