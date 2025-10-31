import { useState } from "react";
import { BookText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const glossaryTerms = [
  { term: "Beam", definition: "A structural element that resists loads applied laterally to its axis" },
  { term: "Bearing Capacity", definition: "The ability of soil to support loads applied to the ground" },
  { term: "Cantilever", definition: "A beam fixed at one end and free at the other" },
  { term: "Compaction", definition: "Process of increasing soil density by removing air voids" },
  { term: "Deflection", definition: "The displacement of a structural member under load" },
  { term: "Elasticity", definition: "Property allowing material to return to original shape after deformation" },
  { term: "Footing", definition: "A foundation unit that distributes loads to the soil" },
  { term: "Grade", definition: "The slope or elevation of a road or surface" },
  { term: "Load", definition: "External force or weight applied to a structure" },
  { term: "Moment", definition: "Rotational force about a point or axis" },
  { term: "Plasticity", definition: "Ability of soil to be molded without cracking" },
  { term: "Retaining Wall", definition: "Structure that holds back soil or rock from a structure" },
  { term: "Shear", definition: "Force causing layers of material to slide past each other" },
  { term: "Strain", definition: "Deformation of material relative to its original dimensions" },
  { term: "Stress", definition: "Internal force per unit area within a material" },
  { term: "Truss", definition: "Framework of members forming triangular units" },
];

const GlossarySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-24 z-40"
        size="icon"
        variant="secondary"
      >
        <BookText className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-card border-l shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <BookText className="h-5 w-5 text-primary" />
              Glossary
            </h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-4">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="border-b pb-3">
                  <h4 className="font-semibold text-primary mb-1">{item.term}</h4>
                  <p className="text-sm text-muted-foreground">{item.definition}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default GlossarySidebar;
