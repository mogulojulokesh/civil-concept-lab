import { useState } from "react";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import ConceptCard from "@/components/ConceptCard";
import Quiz from "@/components/Quiz";
import { Slider } from "@/components/ui/slider";
import { Mountain, Layers, Footprints } from "lucide-react";

const Geotechnical = () => {
  const [soilDensity, setSoilDensity] = useState([60]);
  const [slopeAngle, setSlopeAngle] = useState([30]);

  const quizQuestions = [
    {
      question: "What is the primary purpose of soil compaction?",
      options: [
        "To change soil color",
        "To increase soil density and strength",
        "To reduce soil cost",
        "To improve soil taste",
      ],
      correctAnswer: 1,
      explanation: "Soil compaction increases density by removing air voids, which improves load-bearing capacity and reduces settlement.",
    },
    {
      question: "What type of foundation is best for soft soils?",
      options: ["Shallow spread footing", "Deep pile foundation", "Strip footing", "Pad foundation"],
      correctAnswer: 1,
      explanation: "Deep pile foundations transfer loads through weak soil layers to stronger soil or bedrock below, making them ideal for soft soils.",
    },
    {
      question: "What is the angle of repose?",
      options: [
        "The angle at which soil becomes liquid",
        "The steepest angle at which loose material remains stable",
        "The angle of a retaining wall",
        "The angle of bedrock",
      ],
      correctAnswer: 1,
      explanation: "The angle of repose is the maximum slope angle at which loose granular material remains stable without sliding.",
    },
  ];

  const getSlopeStability = (angle: number) => {
    if (angle < 30) return { status: "Stable", color: "text-green-600 dark:text-green-400" };
    if (angle < 45) return { status: "Marginally Stable", color: "text-yellow-600 dark:text-yellow-400" };
    return { status: "Unstable", color: "text-red-600 dark:text-red-400" };
  };

  const stability = getSlopeStability(slopeAngle[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Mountain className="h-10 w-10 text-amber-600 dark:text-amber-400" />
            Geotechnical Engineering
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding soil behavior, foundation design, and ground stability
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Soil Compaction */}
          <ConceptCard
            title="Soil Compaction"
            description="Compaction increases soil density by reducing air voids, improving its strength and reducing future settlement. Critical for foundations and road construction."
            icon={<Layers className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Compaction Effort: {soilDensity[0]}%
                </label>
                <Slider
                  value={soilDensity}
                  onValueChange={setSoilDensity}
                  max={100}
                  min={30}
                  step={5}
                />
              </div>

              {/* Soil Layers Visualization */}
              <div className="relative h-56 bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex flex-col">
                  {[...Array(10)].map((_, i) => {
                    const opacity = (soilDensity[0] / 100) * 0.8 + 0.2;
                    const height = 100 / 10;
                    return (
                      <div
                        key={i}
                        className="border-b border-border/50 transition-all duration-300"
                        style={{
                          height: `${height * (1 - (soilDensity[0] / 100) * 0.3)}%`,
                          backgroundColor: `hsla(30, 50%, ${30 + i * 3}%, ${opacity})`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Compaction roller */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-pulse-slow">
                  <div className="w-16 h-8 bg-primary rounded-lg shadow-lg" />
                  <div className="text-center text-xs font-bold mt-1">Roller</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{soilDensity[0]}%</p>
                  <p className="text-xs text-muted-foreground">Density</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-2xl font-bold text-accent">{(100 - soilDensity[0]) / 2}%</p>
                  <p className="text-xs text-muted-foreground">Air Voids</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {Math.round(soilDensity[0] * 2.5)}
                  </p>
                  <p className="text-xs text-muted-foreground">kPa</p>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Higher compaction = greater density = stronger soil. Optimal moisture content is crucial for effective compaction.
                </p>
              </div>
            </div>
          </ConceptCard>

          {/* Slope Stability */}
          <ConceptCard
            title="Slope Stability"
            description="Slopes can fail when gravitational forces exceed soil shear strength. Stability depends on slope angle, soil properties, water content, and vegetation."
            icon={<Mountain className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Slope Angle: {slopeAngle[0]}°
                </label>
                <Slider
                  value={slopeAngle}
                  onValueChange={setSlopeAngle}
                  max={60}
                  min={15}
                  step={5}
                />
              </div>

              {/* Slope Visualization */}
              <div className="relative h-64 bg-gradient-to-b from-blue-200 to-amber-100 dark:from-blue-900 dark:to-amber-900 rounded-lg overflow-hidden">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <defs>
                    <pattern id="soil" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.3" />
                    </pattern>
                  </defs>
                  
                  {/* Ground line */}
                  <line x1="0" y1="75%" x2="100%" y2="75%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
                  
                  {/* Slope */}
                  <polygon
                    points={`0,100% 0,75% ${50 - slopeAngle[0] * 0.5},${75 - slopeAngle[0] * 0.8} 100%,${75 - slopeAngle[0] * 0.8} 100%,100%`}
                    fill="url(#soil)"
                    className="text-amber-800 dark:text-amber-600"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                  />
                  
                  {/* Potential failure surface */}
                  {slopeAngle[0] > 35 && (
                    <path
                      d={`M ${50 - slopeAngle[0] * 0.5} ${75 - slopeAngle[0] * 0.8} Q ${30} ${85}, ${10} ${95}`}
                      fill="none"
                      stroke="red"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      className="animate-pulse-slow"
                    />
                  )}
                  
                  {/* Force arrows */}
                  <line
                    x1={`${50 - slopeAngle[0] * 0.3}%`}
                    y1={`${75 - slopeAngle[0] * 0.5}%`}
                    x2={`${50 - slopeAngle[0] * 0.3}%`}
                    y2={`${85 - slopeAngle[0] * 0.5}%`}
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                    markerEnd="url(#arrowred)"
                  />
                  
                  <defs>
                    <marker id="arrowred" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                      <polygon points="0,0 10,5 0,10" fill="hsl(var(--destructive))" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className={`p-4 rounded-lg border-2 ${stability.color.replace('text-', 'border-')}`}>
                <p className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className={stability.color}>Status: {stability.status}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {slopeAngle[0] < 30 && "Slope is stable. Gravitational forces are safely within soil shear strength limits."}
                  {slopeAngle[0] >= 30 && slopeAngle[0] < 45 && "Slope stability is marginal. Consider drainage improvements or slope reinforcement."}
                  {slopeAngle[0] >= 45 && "High risk of slope failure. Retaining structures or regrading recommended."}
                </p>
              </div>
            </div>
          </ConceptCard>

          {/* Foundation Types */}
          <ConceptCard
            title="Foundation Systems"
            description="Foundations transfer structural loads to the ground. The choice depends on soil conditions, load magnitude, and building requirements."
            icon={<Footprints className="h-6 w-6" />}
          >
            <div className="space-y-6">
              {/* Foundation Comparison */}
              <div className="grid grid-cols-2 gap-4">
                {/* Shallow Foundation */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Shallow Foundation</h4>
                  <div className="relative h-40 bg-gradient-to-b from-blue-100 to-amber-100 dark:from-blue-950 dark:to-amber-950 rounded-lg overflow-hidden border-2">
                    <svg width="100%" height="100%">
                      {/* Ground surface */}
                      <line x1="0" y1="30%" x2="100%" y2="30%" stroke="hsl(var(--border))" strokeWidth="2" />
                      
                      {/* Building */}
                      <rect x="35%" y="10%" width="30%" height="20%" fill="hsl(var(--primary))" />
                      
                      {/* Footing */}
                      <rect x="25%" y="30%" width="50%" height="15%" fill="hsl(var(--accent))" />
                      
                      {/* Soil layers */}
                      <rect x="0" y="45%" width="100%" height="20%" fill="hsla(30, 50%, 50%, 0.3)" />
                      <rect x="0" y="65%" width="100%" height="35%" fill="hsla(30, 50%, 40%, 0.4)" />
                      
                      {/* Load arrows */}
                      <line x1="50%" y1="30%" x2="50%" y2="50%" stroke="red" strokeWidth="2" markerEnd="url(#arrow)" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used when strong soil is near surface. Cost-effective for light to medium loads.
                  </p>
                </div>

                {/* Deep Foundation */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Deep Foundation (Piles)</h4>
                  <div className="relative h-40 bg-gradient-to-b from-blue-100 to-amber-100 dark:from-blue-950 dark:to-amber-950 rounded-lg overflow-hidden border-2">
                    <svg width="100%" height="100%">
                      {/* Ground surface */}
                      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="hsl(var(--border))" strokeWidth="2" />
                      
                      {/* Building */}
                      <rect x="35%" y="5%" width="30%" height="15%" fill="hsl(var(--primary))" />
                      
                      {/* Pile cap */}
                      <rect x="30%" y="20%" width="40%" height="8%" fill="hsl(var(--accent))" />
                      
                      {/* Piles */}
                      <rect x="38%" y="28%" width="8%" height="50%" fill="hsl(var(--primary))" />
                      <rect x="54%" y="28%" width="8%" height="50%" fill="hsl(var(--primary))" />
                      
                      {/* Weak soil */}
                      <rect x="0" y="28%" width="100%" height="30%" fill="hsla(30, 30%, 60%, 0.3)" />
                      
                      {/* Strong soil/bedrock */}
                      <rect x="0" y="58%" width="100%" height="42%" fill="hsla(30, 50%, 30%, 0.5)" />
                      
                      {/* Load arrows */}
                      <line x1="50%" y1="20%" x2="50%" y2="75%" stroke="red" strokeWidth="2" markerEnd="url(#arrow)" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Required when surface soil is weak. Transfers loads to deeper, stronger layers.
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Selection Criteria:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Soil bearing capacity</li>
                  <li>• Building load magnitude</li>
                  <li>• Groundwater level</li>
                  <li>• Settlement tolerance</li>
                  <li>• Construction cost</li>
                </ul>
              </div>
            </div>
          </ConceptCard>

          {/* Retaining Walls */}
          <ConceptCard
            title="Retaining Walls"
            description="Retaining walls hold back soil or rock from structures or roads. They must resist lateral earth pressure and prevent sliding or overturning."
          >
            <div className="space-y-6">
              {/* Retaining Wall Visualization */}
              <div className="relative h-56 bg-gradient-to-b from-blue-200 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-lg overflow-hidden">
                <svg width="100%" height="100%">
                  {/* Retained soil */}
                  <polygon
                    points="45,20 45,100 100,100 100,50"
                    fill="hsla(30, 50%, 50%, 0.6)"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                  />
                  
                  {/* Retaining wall */}
                  <polygon
                    points="45,40 40,40 35,100 50,100"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                  />
                  
                  {/* Base/footing */}
                  <rect x="25" y="100" width="40" height="8" fill="hsl(var(--accent))" />
                  
                  {/* Earth pressure arrows */}
                  {[60, 75, 90].map((y, i) => (
                    <g key={i}>
                      <line
                        x1="60"
                        y1={y}
                        x2="47"
                        y2={y}
                        stroke="hsl(var(--destructive))"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                      />
                    </g>
                  ))}
                  
                  {/* Foundation support */}
                  <line x1="0" y1="108" x2="100" y2="108" stroke="hsl(var(--border))" strokeWidth="3" />
                  
                  {/* Drainage weepholes */}
                  <circle cx="42" cy="70" r="2" fill="blue" />
                  <circle cx="42" cy="85" r="2" fill="blue" />
                  
                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                      <polygon points="0,0 10,5 0,10" fill="hsl(var(--destructive))" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Gravity Wall</p>
                  <p className="text-xs text-muted-foreground">Uses weight</p>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Cantilever</p>
                  <p className="text-xs text-muted-foreground">Most common</p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Sheet Pile</p>
                  <p className="text-xs text-muted-foreground">For water</p>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Critical factors: wall weight, soil pressure, drainage (weep holes), and foundation stability.
                </p>
              </div>
            </div>
          </ConceptCard>
        </div>

        {/* Quiz Section */}
        <div className="max-w-2xl mx-auto">
          <Quiz questions={quizQuestions} title="Geotechnical Engineering Quiz" />
        </div>
      </div>
    </div>
  );
};

export default Geotechnical;
