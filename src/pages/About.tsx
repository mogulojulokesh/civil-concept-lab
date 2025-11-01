import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Civil Concepts Lab</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Civil Concepts Lab is an interactive educational platform designed to make civil engineering
                concepts accessible, engaging, and easy to understand for students, professionals, and enthusiasts.
              </p>
              <p>
                Our mission is to provide clear, visual explanations of fundamental principles across all major
                civil engineering disciplines: Structural, Geotechnical, Transportation, and Environmental Engineering.
              </p>
              <p>
                Through interactive demonstrations, hands-on simulations, and comprehensive quizzes, we aim to
                bridge the gap between theoretical knowledge and practical understanding.
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Makes Us Different</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interactive visualizations that bring concepts to life</li>
                <li>Self-paced learning with comprehensive quizzes</li>
                <li>Clear explanations written for all skill levels</li>
                <li>Comprehensive glossary of technical terms</li>
                <li>Mobile-friendly design for learning on the go</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Civil Concepts Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
