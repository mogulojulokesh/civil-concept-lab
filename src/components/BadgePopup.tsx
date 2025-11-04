import { useEffect, useState } from "react";
import { Award, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BadgePopupProps {
  show: boolean;
  onClose: () => void;
}

const BadgePopup = ({ show, onClose }: BadgePopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="max-w-md w-full mx-4 bg-gradient-card animate-scale-in">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-center text-2xl">Achievement Unlocked!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6 pb-8">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
              <Award className="w-20 h-20 text-primary animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-2">Explorer Badge</h3>
            <p className="text-muted-foreground">
              Congratulations! You've completed 5 concepts. Keep up the great work!
            </p>
          </div>
          <Button onClick={onClose} size="lg" className="w-full">
            Continue Learning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BadgePopup;
