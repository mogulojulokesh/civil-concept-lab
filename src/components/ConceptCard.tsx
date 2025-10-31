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
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-card">
      <CardHeader>
        <div className="flex items-start gap-3">
          {icon && <div className="text-primary mt-1">{icon}</div>}
          <div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ConceptCard;
