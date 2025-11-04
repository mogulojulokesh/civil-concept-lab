import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Hammer, ArrowRight } from "lucide-react";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Initializing Civil Concept Core");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingText("Welcome, Engineer.");
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f172a] to-black flex items-center justify-center overflow-hidden relative">
        <Helmet>
          <title>Civil Concepts Lab - Initializing</title>
        </Helmet>
        
        {/* Animated stars */}
        <div className="stars absolute inset-0" />
        
        {/* Central loading animation */}
        <div className="text-center z-10">
          <div className="mb-8 inline-flex items-center justify-center">
            <Hammer className="w-24 h-24 text-primary loading-icon" />
          </div>
          <h2 className="text-2xl md:text-3xl font-['Orbitron'] text-primary animate-pulse">
            {loadingText}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Civil Concepts Lab - Where Engineering Meets Intelligence</title>
        <meta 
          name="description" 
          content="Enter the Civil Concepts Lab. An AI-powered platform for mastering civil engineering principles through interactive learning." 
        />
      </Helmet>

      {/* Deep Space Background */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[hsl(222_47%_8%)] via-[hsl(222_47%_11%)] to-black page-enter">
        
        {/* Animated Stars */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute w-[200%] h-[200%] top-0 left-0"
            style={{
              background: `
                radial-gradient(2px 2px at 20% 30%, white, transparent),
                radial-gradient(2px 2px at 60% 70%, white, transparent),
                radial-gradient(1px 1px at 50% 50%, white, transparent),
                radial-gradient(1px 1px at 80% 10%, white, transparent),
                radial-gradient(2px 2px at 90% 60%, white, transparent),
                radial-gradient(1px 1px at 33% 80%, white, transparent),
                radial-gradient(2px 2px at 15% 15%, white, transparent),
                radial-gradient(1px 1px at 70% 40%, white, transparent)
              `,
              backgroundSize: '200% 200%',
              animation: 'stars-drift 60s linear infinite'
            }}
          />
        </div>

        {/* Central Radial Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(189 94% 43% / 0.15) 0%, hsl(217 91% 45% / 0.1) 30%, transparent 70%)',
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          
          {/* Central HUD Animation */}
          <div className="relative w-80 h-80 mb-12">
            
            {/* Rotating Outer Ring */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              style={{
                animation: 'hud-rotate 20s linear infinite'
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_hsl(189_94%_43%)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_hsl(189_94%_43%)]" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_hsl(189_94%_43%)]" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_hsl(189_94%_43%)]" />
            </div>

            {/* Rotating Inner Ring */}
            <div 
              className="absolute inset-8 rounded-full border border-blue-400/40"
              style={{
                animation: 'hud-rotate 15s linear infinite reverse'
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_hsl(217_91%_45%)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_hsl(217_91%_45%)]" />
            </div>

            {/* Central Core with Pulsing Glow */}
            <div 
              className="absolute inset-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400/50"
              style={{
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-cyan-400/40 shadow-[0_0_30px_hsl(189_94%_43%)]" />
              </div>
            </div>

            {/* Data Lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12 max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ 
                fontFamily: 'Exo 2, sans-serif',
                textShadow: '0 0 30px hsl(189 94% 43% / 0.3)'
              }}
            >
              Civil Concept Lab
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100/80 font-light" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              Where Engineering Meets Intelligence
            </p>
          </div>

          {/* Glowing CTA Button */}
          <div className="relative group">
            {/* Ripple Effect on Hover */}
            <div 
              className="absolute inset-0 rounded-full bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ animation: 'ripple-expand 1.5s ease-out infinite' }}
            />
            
            <Button
              size="lg"
              asChild
              className="relative z-10 px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-2 border-cyan-400/50 shadow-[0_0_30px_hsl(189_94%_43%_/_0.4)] hover:shadow-[0_0_50px_hsl(189_94%_43%_/_0.6)] transition-all duration-300 hover:scale-110"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              <Link to="/what-is-a-concept">
                Enter the Lab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Subtle Status Text */}
          <p 
            className="mt-8 text-cyan-400/60 text-sm tracking-widest uppercase"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            System Ready • Neural Core Online
          </p>
        </div>

        {/* Corner Decorative Elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400/30" />
      </div>
    </>
  );
};

export default Index;
