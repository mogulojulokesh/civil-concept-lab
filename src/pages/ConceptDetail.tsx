import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import CivilGPT from "@/components/CivilGPT";
import Quiz from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen } from "lucide-react";
import { concepts } from "@/data/concepts";

const ConceptDetail = () => {
  const { id } = useParams();
  const concept = concepts.find((c) => c.id === id);

  if (!concept) {
    return (
      <>
        <Helmet>
          <title>Concept Not Found - Civil Concepts Lab</title>
          <meta name="description" content="The requested concept could not be found." />
        </Helmet>

        <div className="min-h-screen bg-background">
          <Navbar />
          <GlossarySidebar />
          <CivilGPT />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Concept Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The concept you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/library">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{concept.title} - Civil Concepts Lab</title>
        <meta name="description" content={concept.shortDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <GlossarySidebar />
        <CivilGPT />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/library">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Link>
          </Button>

          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                {concept.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{concept.title}</h1>

            {/* Explanation */}
            <Card className="mb-8 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Concept Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {concept.fullExplanation}
                </p>
              </CardContent>
            </Card>

            {/* Animation Block */}
            <Card className="mb-8 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Interactive Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[300px] overflow-hidden relative">
                  {concept.category === "Structural" && (
                    <div className="flex items-end gap-4 h-40">
                      <div className="w-32 h-3 bg-primary/70 rounded-full" style={{ animation: "beam-bend 3s ease-in-out infinite" }} />
                      <div className="w-32 h-3 bg-primary/70 rounded-full" style={{ animation: "beam-bend 3s ease-in-out infinite 0.5s" }} />
                    </div>
                  )}
                  {concept.category === "Transportation" && (
                    <div className="relative w-full h-32">
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted-foreground/20" />
                      <div className="absolute top-1/2 -translate-y-1/2 w-16 h-10 bg-primary rounded-lg" style={{ animation: "vehicle-move 4s linear infinite" }} />
                      <div className="absolute top-1/2 -translate-y-1/2 w-12 h-8 bg-primary/60 rounded-lg" style={{ animation: "vehicle-move 5s linear infinite 2s" }} />
                    </div>
                  )}
                  {(concept.category === "Hydraulics & Water Resources" || concept.category === "Environmental") && (
                    <div className="flex gap-2 items-center h-32">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-primary/60 rounded-full" style={{ animation: `water-flow 2s ease-in-out infinite ${i * 0.3}s` }} />
                      ))}
                    </div>
                  )}
                  {concept.category === "Geotechnical" && (
                    <div className="flex flex-col gap-2 items-center">
                      <div className="w-48 h-16 bg-primary/80 rounded" style={{ animation: "soil-compress 4s ease-in-out infinite" }} />
                      <div className="w-56 h-20 bg-primary/60 rounded" style={{ animation: "soil-compress 4s ease-in-out infinite 0.5s" }} />
                      <div className="w-64 h-24 bg-primary/40 rounded" style={{ animation: "soil-compress 4s ease-in-out infinite 1s" }} />
                    </div>
                  )}
                  {concept.category === "Construction Mgmt Advanced" && (
                    <div className="flex gap-4 items-end h-40">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-12 bg-primary/70 rounded-t" style={{ animation: `construction-rise 3s ease-in-out infinite ${i * 0.5}s` }} />
                      ))}
                    </div>
                  )}
                  {concept.category === "Surveying Advanced" && (
                    <div className="relative w-32 h-32">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-32 bg-primary/70 origin-bottom" style={{ animation: "survey-scan 4s ease-in-out infinite" }} />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary/30 rounded-full" />
                    </div>
                  )}
                  {concept.category === "Urban Planning & Sustainability" && (
                    <div className="grid grid-cols-3 gap-3">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-12 h-12 bg-primary/60 rounded" style={{ animation: `city-pulse 3s ease-in-out infinite ${i * 0.2}s` }} />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quiz Section */}
            <Card className="mb-8 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Test Your Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <Quiz questions={concept.quiz} title={concept.title} />
              </CardContent>
            </Card>

            {/* Further Reading */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Further Reading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Want to learn more about {concept.title.toLowerCase()}? 
                  Explore additional resources and advanced topics.
                </p>
                <Button asChild>
                  <a href={concept.furtherReading || "#"} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Resources
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Developed on Lovable AI — Civil Concepts Lab © 2025.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default ConceptDetail;
