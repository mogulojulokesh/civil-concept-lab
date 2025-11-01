import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ArrowRight } from "lucide-react";
import { concepts, categories } from "@/data/concepts";

const ConceptLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredConcepts = concepts.filter((concept) => {
    const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         concept.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || concept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Concepts Library</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore interactive explanations of civil engineering concepts across all disciplines
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Concepts Grid */}
          {filteredConcepts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredConcepts.map((concept) => (
                <Card key={concept.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {concept.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{concept.title}</CardTitle>
                    <CardDescription className="text-base">
                      {concept.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full group">
                      <Link to={`/concept/${concept.id}`}>
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No concepts found. Try adjusting your search or filter.
              </p>
            </div>
          )}
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

export default ConceptLibrary;
