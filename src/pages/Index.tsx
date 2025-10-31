import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mountain, Car, Leaf, ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";

const Index = () => {
  const disciplines = [
    {
      title: "Structural Engineering",
      description: "Explore load types, beam behavior, trusses, and material properties",
      icon: Building2,
      path: "/structural",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Geotechnical Engineering",
      description: "Understand soil mechanics, foundations, and ground stability",
      icon: Mountain,
      path: "/geotechnical",
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Transportation Engineering",
      description: "Learn about traffic flow, pavement design, and road systems",
      icon: Car,
      path: "/transportation",
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Environmental Engineering",
      description: "Discover water treatment, pollution control, and sustainability",
      icon: Leaf,
      path: "/environmental",
      color: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Civil Engineering Concepts Library
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Master the fundamentals through interactive visualizations, diagrams, and hands-on learning
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/structural">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Topics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Engage with dynamic simulations and visualizations that bring concepts to life
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Comprehensive Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cover all major civil engineering disciplines with detailed explanations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Self-Paced</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn at your own pace with quizzes to test and reinforce your understanding
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Engineering Disciplines</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a discipline to begin your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {disciplines.map((discipline, index) => (
              <Link key={index} to={discipline.path} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                          <discipline.icon className={`h-8 w-8 ${discipline.color}`} />
                          {discipline.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {discipline.description}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About This Library</h2>
            <p className="text-lg text-muted-foreground mb-4">
              The Civil Engineering Concepts Library is designed for students, professionals, and
              enthusiasts who want to deepen their understanding of fundamental civil engineering
              principles.
            </p>
            <p className="text-lg text-muted-foreground">
              Each topic includes clear explanations, interactive demonstrations, and quizzes to help
              you master the material. Use the search bar to find specific topics, and explore the
              glossary for quick definitions of key terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
