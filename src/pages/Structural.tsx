import { useState } from "react";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import ConceptCard from "@/components/ConceptCard";
import Quiz from "@/components/Quiz";
import { Slider } from "@/components/ui/slider";
import { Building2, Activity, Network } from "lucide-react";

const Structural = () => {
  const [beamLoad, setBeamLoad] = useState([50]);
  const [stress, setStress] = useState([30]);

  const quizQuestions = [
    {
      question: "What type of beam is fixed at one end and free at the other?",
      options: ["Simply supported beam", "Cantilever beam", "Continuous beam", "Fixed beam"],
      correctAnswer: 1,
      explanation: "A cantilever beam is fixed at one end and free at the other, allowing it to resist bending moments at the fixed end.",
    },
    {
      question: "What happens to a material in the elastic region of stress-strain curve?",
      options: [
        "Permanent deformation occurs",
        "Material breaks",
        "Material returns to original shape when load is removed",
        "Material becomes stronger",
      ],
      correctAnswer: 2,
      explanation: "In the elastic region, the material deforms under load but returns to its original shape when the load is removed, following Hooke's Law.",
    },
    {
      question: "What is the primary advantage of truss structures?",
      options: [
        "Easy to construct",
        "Lightweight and strong",
        "Requires less maintenance",
        "Always symmetrical",
      ],
      correctAnswer: 1,
      explanation: "Trusses are efficient because they use triangular units to distribute loads, creating lightweight structures that can span long distances while maintaining strength.",
    },
  ];

  const calculateDeflection = (load: number) => {
    return (load / 100) * 5; // Simplified deflection calculation
  };

  const getStressColor = (stressValue: number) => {
    if (stressValue < 40) return "bg-green-500";
    if (stressValue < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Building2 className="h-10 w-10 text-primary" />
            Structural Engineering
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding forces, materials, and design principles that keep structures standing
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Beam Bending */}
          <ConceptCard
            title="Beam Bending & Deflection"
            description="Beams bend when subjected to loads. The amount of deflection depends on the load magnitude, beam material, and support conditions."
            icon={<Activity className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Applied Load: {beamLoad[0]} kN
                </label>
                <Slider
                  value={beamLoad}
                  onValueChange={setBeamLoad}
                  max={100}
                  min={0}
                  step={5}
                  className="mb-4"
                />
              </div>

              {/* Beam Visualization */}
              <div className="relative h-40 bg-muted rounded-lg p-4 overflow-hidden">
                <div className="absolute bottom-8 left-4 right-4">
                  {/* Support points */}
                  <div className="absolute left-0 bottom-0 w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute right-0 bottom-0 w-3 h-3 bg-primary rounded-full" />
                  
                  {/* Beam */}
                  <svg width="100%" height="60" className="absolute bottom-0">
                    <path
                      d={`M 0 30 Q ${50} ${30 + calculateDeflection(beamLoad[0]) * 10}, 100% 30`}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Load arrow */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 transition-all duration-300"
                    style={{ bottom: `${calculateDeflection(beamLoad[0]) * 10 + 30}px` }}
                  >
                    <div className="text-center">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-accent mx-auto" />
                      <div className="text-xs font-bold text-accent mt-1">{beamLoad[0]} kN</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Deflection:</strong> {calculateDeflection(beamLoad[0]).toFixed(2)} cm
                </p>
                <p className="text-sm mt-2 text-muted-foreground">
                  As load increases, the beam deflects more. Real-world factors include material stiffness (E), moment of inertia (I), and span length (L).
                </p>
              </div>
            </div>
          </ConceptCard>

          {/* Stress-Strain */}
          <ConceptCard
            title="Stress-Strain Relationship"
            description="Materials deform under stress. The stress-strain curve shows how materials behave from elastic deformation to plastic deformation and eventual failure."
            icon={<Activity className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Applied Stress: {stress[0]} MPa
                </label>
                <Slider
                  value={stress}
                  onValueChange={setStress}
                  max={100}
                  min={0}
                  step={5}
                  className="mb-4"
                />
              </div>

              {/* Stress-Strain Curve */}
              <div className="relative h-64 bg-muted rounded-lg p-4">
                <svg width="100%" height="100%" className="absolute inset-0 p-8">
                  {/* Grid */}
                  <line x1="10%" y1="90%" x2="90%" y2="90%" stroke="hsl(var(--border))" strokeWidth="2" />
                  <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="hsl(var(--border))" strokeWidth="2" />
                  
                  {/* Curve */}
                  <path
                    d="M 10% 90% Q 30% 60%, 50% 40% T 85% 15%"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                  />
                  
                  {/* Current point */}
                  <circle
                    cx={`${10 + stress[0] * 0.75}%`}
                    cy={`${90 - stress[0] * 0.7}%`}
                    r="6"
                    fill="hsl(var(--accent))"
                    className="animate-pulse-slow"
                  />
                  
                  {/* Labels */}
                  <text x="50%" y="98%" textAnchor="middle" className="text-xs fill-foreground">
                    Strain (ε)
                  </text>
                  <text x="2%" y="50%" textAnchor="middle" className="text-xs fill-foreground" transform="rotate(-90 10 120)">
                    Stress (σ)
                  </text>
                </svg>
              </div>

              <div className={`p-4 rounded-lg ${getStressColor(stress[0])} bg-opacity-20`}>
                <p className="text-sm font-semibold">
                  {stress[0] < 40 && "Elastic Region - Material will return to original shape"}
                  {stress[0] >= 40 && stress[0] < 70 && "Plastic Region - Permanent deformation occurring"}
                  {stress[0] >= 70 && "Near Failure - Material approaching breaking point"}
                </p>
              </div>
            </div>
          </ConceptCard>

          {/* Truss Systems */}
          <ConceptCard
            title="Truss Systems"
            description="Trusses use triangular units to efficiently distribute loads. Members experience only axial forces (tension or compression), making them very efficient for spanning long distances."
            icon={<Network className="h-6 w-6" />}
          >
            <div className="space-y-6">
              {/* Truss Visualization */}
              <div className="relative h-48 bg-muted rounded-lg p-4">
                <svg width="100%" height="100%" className="absolute inset-0 p-4">
                  {/* Support points */}
                  <circle cx="10%" cy="80%" r="5" fill="hsl(var(--primary))" />
                  <circle cx="90%" cy="80%" r="5" fill="hsl(var(--primary))" />
                  
                  {/* Top chord */}
                  <line x1="10%" y1="80%" x2="50%" y2="30%" stroke="hsl(var(--primary))" strokeWidth="3" />
                  <line x1="50%" y1="30%" x2="90%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="3" />
                  
                  {/* Bottom chord */}
                  <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="3" />
                  
                  {/* Vertical & diagonal members */}
                  <line x1="30%" y1="80%" x2="30%" y2="55%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4" />
                  <line x1="50%" y1="80%" x2="50%" y2="30%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4" />
                  <line x1="70%" y1="80%" x2="70%" y2="55%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4" />
                  
                  <line x1="10%" y1="80%" x2="30%" y2="55%" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                  <line x1="30%" y1="55%" x2="50%" y2="30%" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                  <line x1="50%" y1="30%" x2="70%" y2="55%" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                  <line x1="70%" y1="55%" x2="90%" y2="80%" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                  
                  {/* Load arrows */}
                  <polygon points="30,40 35,50 25,50" fill="hsl(var(--destructive))" />
                  <polygon points="50,20 55,30 45,30" fill="hsl(var(--destructive))" />
                  <polygon points="70,40 75,50 65,50" fill="hsl(var(--destructive))" />
                  
                  {/* Joints */}
                  <circle cx="30%" cy="55%" r="4" fill="hsl(var(--foreground))" />
                  <circle cx="50%" cy="30%" r="4" fill="hsl(var(--foreground))" />
                  <circle cx="70%" cy="55%" r="4" fill="hsl(var(--foreground))" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-primary mb-1">Top Chord</p>
                  <p className="text-xs text-muted-foreground">Compression</p>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-accent mb-1">Bottom Chord</p>
                  <p className="text-xs text-muted-foreground">Tension</p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Trusses are found in bridges, roofs, and towers. The triangular configuration prevents deformation and efficiently transfers loads to supports.
                </p>
              </div>
            </div>
          </ConceptCard>

          {/* Load Types */}
          <ConceptCard
            title="Types of Loads"
            description="Structures experience various loads: dead loads (permanent), live loads (variable), wind loads, seismic loads, and more. Engineers must design for all possible load combinations."
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Dead Load</h4>
                  <p className="text-sm text-muted-foreground">
                    Permanent loads from structure weight, materials, and fixed equipment
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-1">Live Load</h4>
                  <p className="text-sm text-muted-foreground">
                    Variable loads from people, furniture, vehicles, and movable objects
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-1">Wind Load</h4>
                  <p className="text-sm text-muted-foreground">
                    Lateral forces from wind pressure on building surfaces
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-1">Seismic Load</h4>
                  <p className="text-sm text-muted-foreground">
                    Dynamic forces from ground motion during earthquakes
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Load Combination Example:</p>
                <code className="text-xs bg-background p-2 rounded block">
                  1.2(Dead Load) + 1.6(Live Load) + 0.5(Wind Load)
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  Building codes specify load factors to ensure safety under worst-case scenarios.
                </p>
              </div>
            </div>
          </ConceptCard>
        </div>

        {/* Quiz Section */}
        <div className="max-w-2xl mx-auto">
          <Quiz questions={quizQuestions} title="Structural Engineering Quiz" />
        </div>
      </div>
    </div>
  );
};

export default Structural;
