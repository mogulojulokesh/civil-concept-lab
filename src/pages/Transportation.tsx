import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import ConceptCard from "@/components/ConceptCard";
import Quiz from "@/components/Quiz";
import { Slider } from "@/components/ui/slider";
import { Car, Navigation, Timer } from "lucide-react";

const Transportation = () => {
  const [trafficVolume, setTrafficVolume] = useState([50]);
  const [signalTiming, setSignalTiming] = useState([30]);
  const [vehiclePosition, setVehiclePosition] = useState(0);

  // Animate traffic flow
  useEffect(() => {
    const interval = setInterval(() => {
      setVehiclePosition((prev) => (prev + trafficVolume[0] / 50) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [trafficVolume]);

  const quizQuestions = [
    {
      question: "What is Level of Service (LOS) in traffic engineering?",
      options: [
        "The number of lanes on a road",
        "A measure of traffic flow quality from A (best) to F (worst)",
        "The speed limit of a highway",
        "The type of pavement material",
      ],
      correctAnswer: 1,
      explanation: "LOS grades traffic conditions from A (free flow) to F (congested). It considers speed, travel time, freedom to maneuver, and comfort.",
    },
    {
      question: "What is the primary purpose of flexible pavement?",
      options: [
        "To be easily removed",
        "To distribute loads through multiple layers",
        "To bend without breaking",
        "To change color with temperature",
      ],
      correctAnswer: 1,
      explanation: "Flexible pavements (asphalt) distribute loads downward through layered structure, with each layer having specific strength and drainage properties.",
    },
    {
      question: "Why are traffic signals timed in coordinated systems?",
      options: [
        "To save electricity",
        "To create traffic jams",
        "To create 'green waves' for smooth traffic flow",
        "To confuse drivers",
      ],
      correctAnswer: 2,
      explanation: "Coordinated signals create progression bands (green waves) that allow vehicles to pass through multiple intersections without stopping, improving flow and reducing delays.",
    },
  ];

  const getTrafficLevel = (volume: number) => {
    if (volume < 30) return { level: "A - Free Flow", color: "text-green-600 dark:text-green-400" };
    if (volume < 50) return { level: "C - Stable", color: "text-yellow-600 dark:text-yellow-400" };
    if (volume < 70) return { level: "D - Approaching Unstable", color: "text-orange-600 dark:text-orange-400" };
    return { level: "F - Congested", color: "text-red-600 dark:text-red-400" };
  };

  const traffic = getTrafficLevel(trafficVolume[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Car className="h-10 w-10 text-green-600 dark:text-green-400" />
            Transportation Engineering
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designing efficient, safe, and sustainable transportation systems
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Traffic Flow */}
          <ConceptCard
            title="Traffic Flow Theory"
            description="Traffic flow is characterized by three variables: flow (vehicles/hour), density (vehicles/mile), and speed (mph). Understanding their relationship is crucial for capacity analysis."
            icon={<Car className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Traffic Volume: {trafficVolume[0]}% of Capacity
                </label>
                <Slider
                  value={trafficVolume}
                  onValueChange={setTrafficVolume}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>

              {/* Road Visualization */}
              <div className="relative h-32 bg-muted rounded-lg overflow-hidden border-2 border-border">
                {/* Road lanes */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-600 dark:from-gray-800 dark:to-gray-700">
                  {/* Lane markings */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-white/60" />
                  
                  {/* Vehicles */}
                  {Array.from({ length: Math.floor(trafficVolume[0] / 15) + 1 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-12 h-8 bg-primary rounded-sm transition-all duration-100"
                      style={{
                        left: `${((vehiclePosition + i * 25) % 100)}%`,
                        top: i % 2 === 0 ? "25%" : "60%",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Car className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-lg border-2 ${traffic.color.replace('text-', 'border-')}`}>
                <p className="text-lg font-bold mb-2">
                  <span className={traffic.color}>Level of Service: {traffic.level}</span>
                </p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Flow</p>
                    <p className="font-semibold">{Math.round(trafficVolume[0] * 20)} vph</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Speed</p>
                    <p className="font-semibold">{Math.round(65 - trafficVolume[0] * 0.4)} mph</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Density</p>
                    <p className="font-semibold">{Math.round(trafficVolume[0] * 0.8)} vpm</p>
                  </div>
                </div>
              </div>
            </div>
          </ConceptCard>

          {/* Traffic Signals */}
          <ConceptCard
            title="Signal Timing & Control"
            description="Traffic signals regulate intersection flow using cycle length, phase splits, and offsets. Proper timing minimizes delays and maximizes throughput."
            icon={<Timer className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Green Phase Duration: {signalTiming[0]} seconds
                </label>
                <Slider
                  value={signalTiming}
                  onValueChange={setSignalTiming}
                  max={60}
                  min={10}
                  step={5}
                />
              </div>

              {/* Signal Visualization */}
              <div className="relative h-48 bg-muted rounded-lg p-4">
                <div className="flex justify-center items-center h-full">
                  {/* Traffic Light */}
                  <div className="relative">
                    {/* Pole */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-32 w-2 h-20 bg-gray-700" />
                    
                    {/* Signal head */}
                    <div className="bg-gray-800 rounded-lg p-4 space-y-3 relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                          signalTiming[0] > 40
                            ? "bg-red-500 border-red-300 shadow-lg shadow-red-500/50"
                            : "bg-red-900/30 border-red-900"
                        }`}
                      />
                      <div
                        className={`w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                          signalTiming[0] > 20 && signalTiming[0] <= 40
                            ? "bg-yellow-500 border-yellow-300 shadow-lg shadow-yellow-500/50"
                            : "bg-yellow-900/30 border-yellow-900"
                        }`}
                      />
                      <div
                        className={`w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                          signalTiming[0] <= 20
                            ? "bg-green-500 border-green-300 shadow-lg shadow-green-500/50 animate-pulse-slow"
                            : "bg-green-900/30 border-green-900"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Cycle Length:</span>
                  <span className="text-sm font-bold">{signalTiming[0] + 30} seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Green Time:</span>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">
                    {signalTiming[0]}s ({Math.round((signalTiming[0] / (signalTiming[0] + 30)) * 100)}%)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Yellow + Red:</span>
                  <span className="text-sm font-bold">30s</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Longer green phases increase capacity but may cause delays on cross streets.
                </p>
              </div>
            </div>
          </ConceptCard>

          {/* Pavement Design */}
          <ConceptCard
            title="Pavement Design"
            description="Pavements are layered structures designed to distribute wheel loads to the subgrade. Two main types: flexible (asphalt) and rigid (concrete)."
            icon={<Navigation className="h-6 w-6" />}
          >
            <div className="space-y-6">
              {/* Pavement Layers */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm mb-3">Flexible Pavement Layers (Top to Bottom):</h4>
                
                <div className="relative">
                  {/* Surface Layer */}
                  <div className="bg-gray-800 p-3 rounded-t-lg border-2 border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm">Surface Course (Asphalt)</span>
                      <span className="text-xs text-muted-foreground">2-4 inches</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Waterproof, smooth, wear-resistant
                    </p>
                  </div>

                  {/* Base Layer */}
                  <div className="bg-gray-700 p-3 border-x-2 border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm">Base Course</span>
                      <span className="text-xs text-muted-foreground">6-12 inches</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      High-quality aggregates, load distribution
                    </p>
                  </div>

                  {/* Subbase Layer */}
                  <div className="bg-gray-600 p-3 border-x-2 border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm">Subbase Course</span>
                      <span className="text-xs text-muted-foreground">4-12 inches</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Additional support, drainage, frost protection
                    </p>
                  </div>

                  {/* Subgrade */}
                  <div className="bg-amber-900 p-3 rounded-b-lg border-2 border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm">Subgrade (Natural Soil)</span>
                      <span className="text-xs text-muted-foreground">Existing</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Foundation, must be compacted
                    </p>
                  </div>

                  {/* Load arrow */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="text-center">
                      <div className="text-xs font-bold mb-1">Vehicle Load</div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-red-500 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Flexible (Asphalt)</p>
                  <p className="text-xs text-muted-foreground">
                    Multiple layers, easy repair, lower initial cost
                  </p>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Rigid (Concrete)</p>
                  <p className="text-xs text-muted-foreground">
                    Single slab, high durability, longer life
                  </p>
                </div>
              </div>
            </div>
          </ConceptCard>

          {/* Geometric Design */}
          <ConceptCard
            title="Geometric Design"
            description="Road geometry affects safety, capacity, and comfort. Key elements include sight distance, horizontal curves, vertical curves, and superelevation."
          >
            <div className="space-y-6">
              {/* Curve Visualization */}
              <div className="relative h-48 bg-gradient-to-b from-green-200 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg overflow-hidden">
                <svg width="100%" height="100%">
                  {/* Horizontal curve */}
                  <path
                    d="M 10 80 Q 50 80, 60 50 T 90 30"
                    fill="none"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="12"
                    opacity="0.8"
                  />
                  <path
                    d="M 10 80 Q 50 80, 60 50 T 90 30"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="8,8"
                    opacity="0.6"
                  />
                  
                  {/* Vehicle */}
                  <g transform="translate(60, 45)">
                    <rect x="-6" y="-3" width="12" height="6" fill="hsl(var(--primary))" rx="1" />
                    <Car className="h-4 w-4" />
                  </g>
                  
                  {/* Sight distance line */}
                  <line
                    x1="60"
                    y1="50"
                    x2="85"
                    y2="35"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                  
                  {/* Labels */}
                  <text x="20" y="95" className="text-xs fill-foreground">Entry</text>
                  <text x="85" y="25" className="text-xs fill-foreground">Exit</text>
                </svg>
              </div>

              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Minimum Radius</h5>
                  <p className="text-xs text-muted-foreground">
                    R = V² / (15(e + f)) where V=speed, e=superelevation, f=friction
                  </p>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Sight Distance</h5>
                  <p className="text-xs text-muted-foreground">
                    Must allow safe stopping or passing. Calculated based on design speed and reaction time.
                  </p>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Superelevation</h5>
                  <p className="text-xs text-muted-foreground">
                    Banking curves inward helps vehicles navigate turns by counteracting centrifugal force.
                  </p>
                </div>
              </div>
            </div>
          </ConceptCard>
        </div>

        {/* Quiz Section */}
        <div className="max-w-2xl mx-auto">
          <Quiz questions={quizQuestions} title="Transportation Engineering Quiz" />
        </div>
      </div>
    </div>
  );
};

export default Transportation;
