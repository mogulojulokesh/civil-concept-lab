import Navbar from "@/components/Navbar";
import GlossarySidebar from "@/components/GlossarySidebar";
import { Mail, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlossarySidebar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Have questions or feedback? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>
                    Send us an email and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:info@civilconceptslab.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    info@civilconceptslab.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Feedback</CardTitle>
                  <CardDescription>
                    Share your thoughts on how we can improve the learning experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:feedback@civilconceptslab.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    feedback@civilconceptslab.com
                  </a>
                </CardContent>
              </Card>
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

export default Contact;
