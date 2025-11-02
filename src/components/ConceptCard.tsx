import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ConceptCardProps {
  title: string;
  description: string;
  children: ReactNode;
  icon?: ReactNode;
}

const ConceptCard = ({ title, description, children, icon }: ConceptCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500 bg-gradient-card hover:-translate-y-1 animate-fade-in">
      <CardHeader className="space-y-3">
        <div className="flex items-start gap-3">
          {icon && <div className="text-primary mt-1 p-2 rounded-lg bg-primary/10">{icon}</div>}
          <div>
            <CardTitle className="text-xl mb-2 font-bold">{title}</CardTitle>
            <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

export default ConceptCard;
