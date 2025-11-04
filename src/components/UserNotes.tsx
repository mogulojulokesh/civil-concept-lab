import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserNotesProps {
  conceptId: string;
}

const UserNotes = ({ conceptId }: UserNotesProps) => {
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes-${conceptId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [conceptId]);

  const handleSave = () => {
    localStorage.setItem(`notes-${conceptId}`, notes);
    toast({
      title: "Notes saved",
      description: "Your notes have been saved successfully.",
    });
  };

  return (
    <Card className="bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Your Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Write your notes here... (saved locally on your device)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[150px]"
        />
        <Button onClick={handleSave} className="w-full">
          <Save className="mr-2 h-4 w-4" />
          Save Notes
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserNotes;
