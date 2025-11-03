import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mountain, Car, Leaf, ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import CivilGPT from "@/components/CivilGPT";

const WhatIsAConcept = () => {
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
    <>
      <Helmet>
        <title>What is a Concept? - Civil Concepts Lab</title>
        <meta 
          name="description" 
          content="Learn what civil engineering concepts are and how they form the foundation of modern infrastructure and design." 
        />
      </Helmet>

      <div className="min-h-screen bg-background content-wrapper">
        <Navbar />
        <GlossarySidebar />
        <CivilGPT />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What is a Concept?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Understanding the building blocks of civil engineering
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">The Foundation of Engineering Knowledge</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                In civil engineering, a <strong>concept</strong> is a fundamental principle, theory, or methodology 
                that forms the basis for understanding how structures, systems, and infrastructure work.
              </p>
              <p>
                These concepts are the building blocks that engineers use to design safe, efficient, and 
                sustainable solutions to real-world problems. From calculating the forces in a bridge to 
                understanding how water flows through a pipe network, every engineering decision is rooted 
                in core concepts.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Why Concepts Matter</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Problem Solving:</strong> Concepts provide the framework for analyzing and solving complex engineering challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Foundation for Learning:</strong> Master the basics to build advanced knowledge and skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Communication:</strong> Shared concepts create a common language for engineers worldwide</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-16 bg-muted/30">
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

      {/* Footer */}
        <footer className="bg-card border-t py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>Developed on Lovable AI — Civil Concepts Lab © 2025.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WhatIsAConcept;
