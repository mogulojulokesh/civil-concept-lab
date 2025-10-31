import { useState } from "react";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import ConceptCard from "@/components/ConceptCard";
import Quiz from "@/components/Quiz";
import { Slider } from "@/components/ui/slider";
import { Leaf, Droplets, Wind, Recycle } from "lucide-react";

const Environmental = () => {
  const [treatmentLevel, setTreatmentLevel] = useState([50]);
  const [pollutionLevel, setPollutionLevel] = useState([40]);

  const quizQuestions = [
    {
      question: "What is the primary purpose of water treatment?",
      options: [
        "To change water color",
        "To remove contaminants and make water safe for use",
        "To add flavor to water",
        "To increase water temperature",
      ],
      correctAnswer: 1,
      explanation: "Water treatment removes physical, chemical, and biological contaminants to produce safe drinking water or effluent that meets environmental standards.",
    },
    {
      question: "What does BOD stand for in water quality?",
      options: [
        "Biological Oxygen Demand",
        "Basic Organic Density",
        "Bacterial Output Detector",
        "Bottom Of Drain",
      ],
      correctAnswer: 0,
      explanation: "BOD measures the amount of dissolved oxygen needed by microorganisms to break down organic material. Higher BOD indicates more pollution.",
    },
    {
      question: "Which waste management method is most sustainable?",
      options: [
        "Landfilling everything",
        "Burning all waste",
        "Reduce, Reuse, Recycle hierarchy",
        "Dumping in ocean",
      ],
      correctAnswer: 2,
      explanation: "The 3Rs hierarchy prioritizes waste prevention (reduce), then reuse, then recycling, with disposal as last resort - minimizing environmental impact.",
    },
  ];

  const getWaterQuality = (level: number) => {
    if (level < 30) return { quality: "Poor - Unsafe", color: "text-red-600 dark:text-red-400" };
    if (level < 60) return { quality: "Fair - Needs Improvement", color: "text-yellow-600 dark:text-yellow-400" };
    return { quality: "Excellent - Safe", color: "text-green-600 dark:text-green-400" };
  };

  const quality = getWaterQuality(treatmentLevel[0]);

  const getAirQuality = (level: number) => {
    if (level < 30) return { aqi: "Good", color: "bg-green-500" };
    if (level < 60) return { aqi: "Moderate", color: "bg-yellow-500" };
    return { aqi: "Unhealthy", color: "bg-red-500" };
  };

  const air = getAirQuality(pollutionLevel[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Leaf className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            Environmental Engineering
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protecting public health and the environment through sustainable engineering solutions
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Water Treatment */}
          <ConceptCard
            title="Water Treatment Process"
            description="Water treatment transforms raw water into safe drinking water through physical, chemical, and biological processes. Multiple stages ensure removal of contaminants."
            icon={<Droplets className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Treatment Effectiveness: {treatmentLevel[0]}%
                </label>
                <Slider
                  value={treatmentLevel}
                  onValueChange={setTreatmentLevel}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>

              {/* Treatment Process Flow */}
              <div className="relative space-y-2">
                {/* Coagulation */}
                <div
                  className={`p-3 rounded-lg border-2 transition-all ${
                    treatmentLevel[0] > 20 ? "bg-primary/20 border-primary" : "bg-muted border-border opacity-50"
                  }`}
                >
                  <h5 className="font-semibold text-sm">1. Coagulation & Flocculation</h5>
                  <p className="text-xs text-muted-foreground">
                    Chemicals cause particles to clump together
                  </p>
                </div>

                {/* Sedimentation */}
                <div
                  className={`p-3 rounded-lg border-2 transition-all ${
                    treatmentLevel[0] > 40 ? "bg-accent/20 border-accent" : "bg-muted border-border opacity-50"
                  }`}
                >
                  <h5 className="font-semibold text-sm">2. Sedimentation</h5>
                  <p className="text-xs text-muted-foreground">
                    Heavy particles settle to bottom
                  </p>
                </div>

                {/* Filtration */}
                <div
                  className={`p-3 rounded-lg border-2 transition-all ${
                    treatmentLevel[0] > 60 ? "bg-green-500/20 border-green-500" : "bg-muted border-border opacity-50"
                  }`}
                >
                  <h5 className="font-semibold text-sm">3. Filtration</h5>
                  <p className="text-xs text-muted-foreground">
                    Water passes through sand/carbon filters
                  </p>
                </div>

                {/* Disinfection */}
                <div
                  className={`p-3 rounded-lg border-2 transition-all ${
                    treatmentLevel[0] > 80 ? "bg-blue-500/20 border-blue-500" : "bg-muted border-border opacity-50"
                  }`}
                >
                  <h5 className="font-semibold text-sm">4. Disinfection</h5>
                  <p className="text-xs text-muted-foreground">
                    Chlorine or UV kills remaining pathogens
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-lg border-2 ${quality.color.replace('text-', 'border-')}`}>
                <p className="text-lg font-bold mb-2">
                  <span className={quality.color}>Water Quality: {quality.quality}</span>
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Turbidity</p>
                    <p className="font-semibold">{Math.max(10 - treatmentLevel[0] / 10, 0.5).toFixed(1)} NTU</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Bacteria</p>
                    <p className="font-semibold">{Math.max(100 - treatmentLevel[0], 0)} CFU/ml</p>
                  </div>
                </div>
              </div>
            </div>
          </ConceptCard>

          {/* Air Pollution */}
          <ConceptCard
            title="Air Pollution Control"
            description="Air pollution affects human health and the environment. Engineers design systems to capture, treat, or prevent emissions from industrial and mobile sources."
            icon={<Wind className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Pollution Level: {pollutionLevel[0]} AQI
                </label>
                <Slider
                  value={pollutionLevel}
                  onValueChange={setPollutionLevel}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>

              {/* Air Quality Visualization */}
              <div className="relative h-48 bg-gradient-to-b from-blue-100 to-gray-100 dark:from-blue-950 dark:to-gray-900 rounded-lg overflow-hidden">
                <svg width="100%" height="100%">
                  {/* Factory */}
                  <rect x="10" y="60" width="30" height="40" fill="hsl(var(--muted-foreground))" />
                  <rect x="15" y="65" width="8" height="12" fill="hsl(var(--accent))" />
                  <rect x="27" y="65" width="8" height="12" fill="hsl(var(--accent))" />
                  
                  {/* Smokestacks */}
                  <rect x="15" y="40" width="8" height="20" fill="hsl(var(--muted-foreground))" />
                  <rect x="27" y="35" width="8" height="25" fill="hsl(var(--muted-foreground))" />
                  
                  {/* Pollution clouds */}
                  {Array.from({ length: Math.floor(pollutionLevel[0] / 15) + 1 }).map((_, i) => (
                    <ellipse
                      key={i}
                      cx={20 + i * 15}
                      cy={25 - i * 5}
                      rx="8"
                      ry="5"
                      fill="hsl(var(--muted-foreground))"
                      opacity={pollutionLevel[0] / 100}
                      className="animate-pulse-slow"
                    />
                  ))}
                  
                  {/* Trees (cleaner air) */}
                  {pollutionLevel[0] < 50 && (
                    <>
                      <circle cx="70" cy="75" r="8" fill="hsl(142 76% 36%)" />
                      <rect x="68" y="75" width="4" height="15" fill="hsl(var(--muted-foreground))" />
                      <circle cx="85" cy="70" r="10" fill="hsl(142 76% 36%)" />
                      <rect x="83" y="70" width="4" height="20" fill="hsl(var(--muted-foreground))" />
                    </>
                  )}
                </svg>
              </div>

              <div className={`p-4 rounded-lg ${air.color} bg-opacity-20`}>
                <p className="text-lg font-bold mb-2">Air Quality: {air.aqi}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>PM2.5:</span>
                    <span className="font-semibold">{pollutionLevel[0]} μg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health Impact:</span>
                    <span className="font-semibold">
                      {pollutionLevel[0] < 30 && "Minimal"}
                      {pollutionLevel[0] >= 30 && pollutionLevel[0] < 60 && "Moderate"}
                      {pollutionLevel[0] >= 60 && "Significant"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <h5 className="font-semibold text-sm">Common Pollutants:</h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Particulate Matter (PM2.5, PM10)</li>
                  <li>• Nitrogen Oxides (NOx)</li>
                  <li>• Sulfur Dioxide (SO₂)</li>
                  <li>• Carbon Monoxide (CO)</li>
                  <li>• Volatile Organic Compounds (VOCs)</li>
                </ul>
              </div>
            </div>
          </ConceptCard>

          {/* Waste Management */}
          <ConceptCard
            title="Waste Management Hierarchy"
            description="Sustainable waste management follows the 3Rs principle: Reduce, Reuse, Recycle. The hierarchy prioritizes prevention over disposal."
            icon={<Recycle className="h-6 w-6" />}
          >
            <div className="space-y-6">
              {/* Waste Hierarchy Pyramid */}
              <div className="relative h-64 flex items-end justify-center">
                <svg width="100%" height="100%" viewBox="0 0 200 200">
                  {/* Most Preferred - Reduce */}
                  <polygon
                    points="100,20 140,60 60,60"
                    fill="hsl(142 76% 36%)"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                  />
                  <text x="100" y="48" textAnchor="middle" className="text-xs fill-white font-bold">
                    REDUCE
                  </text>

                  {/* Reuse */}
                  <polygon
                    points="60,60 140,60 155,95 45,95"
                    fill="hsl(142 71% 45%)"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                  />
                  <text x="100" y="82" textAnchor="middle" className="text-xs fill-white font-bold">
                    REUSE
                  </text>

                  {/* Recycle */}
                  <polygon
                    points="45,95 155,95 170,130 30,130"
                    fill="hsl(142 69% 58%)"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                  />
                  <text x="100" y="117" textAnchor="middle" className="text-xs fill-foreground font-bold">
                    RECYCLE
                  </text>

                  {/* Recovery */}
                  <polygon
                    points="30,130 170,130 185,165 15,165"
                    fill="hsl(45 93% 47%)"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                  />
                  <text x="100" y="152" textAnchor="middle" className="text-xs fill-foreground font-bold">
                    RECOVERY
                  </text>

                  {/* Least Preferred - Disposal */}
                  <polygon
                    points="15,165 185,165 195,190 5,190"
                    fill="hsl(0 84% 60%)"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                  />
                  <text x="100" y="182" textAnchor="middle" className="text-xs fill-white font-bold">
                    DISPOSAL
                  </text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-500/20 p-3 rounded-lg border-2 border-green-500">
                  <h5 className="font-semibold text-sm mb-1">Reduce</h5>
                  <p className="text-xs text-muted-foreground">
                    Most effective - prevent waste generation
                  </p>
                </div>
                <div className="bg-blue-500/20 p-3 rounded-lg border-2 border-blue-500">
                  <h5 className="font-semibold text-sm mb-1">Reuse</h5>
                  <p className="text-xs text-muted-foreground">
                    Extend product life, reduce new production
                  </p>
                </div>
                <div className="bg-yellow-500/20 p-3 rounded-lg border-2 border-yellow-500">
                  <h5 className="font-semibold text-sm mb-1">Recycle</h5>
                  <p className="text-xs text-muted-foreground">
                    Convert waste to new materials
                  </p>
                </div>
                <div className="bg-red-500/20 p-3 rounded-lg border-2 border-red-500">
                  <h5 className="font-semibold text-sm mb-1">Disposal</h5>
                  <p className="text-xs text-muted-foreground">
                    Last resort - landfills or incineration
                  </p>
                </div>
              </div>
            </div>
          </ConceptCard>

          {/* Sustainability */}
          <ConceptCard
            title="Sustainable Engineering"
            description="Sustainability integrates environmental protection, economic viability, and social equity. Engineers must design systems that meet present needs without compromising future generations."
            icon={<Leaf className="h-6 w-6" />}
          >
            <div className="space-y-6">
              {/* Sustainability Venn Diagram */}
              <div className="relative h-56 flex items-center justify-center bg-muted rounded-lg">
                <svg width="100%" height="100%" viewBox="0 0 200 180">
                  {/* Three circles */}
                  <circle cx="70" cy="70" r="45" fill="hsl(var(--primary))" opacity="0.5" />
                  <circle cx="130" cy="70" r="45" fill="hsl(var(--accent))" opacity="0.5" />
                  <circle cx="100" cy="120" r="45" fill="hsl(142 76% 36%)" opacity="0.5" />
                  
                  {/* Center - Sustainability */}
                  <circle cx="100" cy="85" r="20" fill="hsl(var(--foreground))" opacity="0.7" />
                  <text x="100" y="90" textAnchor="middle" className="text-xs fill-background font-bold">
                    Sustainable
                  </text>
                  
                  {/* Labels */}
                  <text x="55" y="55" textAnchor="middle" className="text-xs fill-foreground font-semibold">
                    Economic
                  </text>
                  <text x="145" y="55" textAnchor="middle" className="text-xs fill-foreground font-semibold">
                    Environmental
                  </text>
                  <text x="100" y="145" textAnchor="middle" className="text-xs fill-foreground font-semibold">
                    Social
                  </text>
                </svg>
              </div>

              <div className="space-y-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Economic Pillar</h5>
                  <p className="text-xs text-muted-foreground">
                    Cost-effective solutions, long-term viability, resource efficiency
                  </p>
                </div>

                <div className="bg-accent/10 p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Environmental Pillar</h5>
                  <p className="text-xs text-muted-foreground">
                    Minimize pollution, conserve resources, protect ecosystems
                  </p>
                </div>

                <div className="bg-green-500/10 p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Social Pillar</h5>
                  <p className="text-xs text-muted-foreground">
                    Public health, equity, community well-being, safety
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  True sustainability requires balance across all three pillars. Engineers must consider lifecycle impacts, renewable resources, and circular economy principles.
                </p>
              </div>
            </div>
          </ConceptCard>
        </div>

        {/* Quiz Section */}
        <div className="max-w-2xl mx-auto">
          <Quiz questions={quizQuestions} title="Environmental Engineering Quiz" />
        </div>
      </div>
    </div>
  );
};

export default Environmental;
