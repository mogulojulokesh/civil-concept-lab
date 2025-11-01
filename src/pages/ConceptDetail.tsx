import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
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
      <div className="min-h-screen bg-background">
        <Navbar />
        <GlossarySidebar />
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
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

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
                <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-muted-foreground">
                      Interactive animation placeholder
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (Lottie or custom animation would be embedded here)
                    </p>
                  </div>
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
          <p>&copy; 2024 Civil Concepts Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConceptDetail;
