import { useState, useEffect } from "react";

export const useProgress = () => {
  const [completedConcepts, setCompletedConcepts] = useState<string[]>([]);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("completed-concepts");
    if (saved) {
      setCompletedConcepts(JSON.parse(saved));
    }

    const badgeShown = localStorage.getItem("explorer-badge-shown");
    if (badgeShown === "true") {
      setShowBadge(false);
    }
  }, []);

  const markAsCompleted = (conceptId: string) => {
    const updated = [...completedConcepts];
    if (!updated.includes(conceptId)) {
      updated.push(conceptId);
      setCompletedConcepts(updated);
      localStorage.setItem("completed-concepts", JSON.stringify(updated));

      // Check for badge
      if (updated.length >= 5 && localStorage.getItem("explorer-badge-shown") !== "true") {
        setShowBadge(true);
      }
    }
  };

  const closeBadge = () => {
    setShowBadge(false);
    localStorage.setItem("explorer-badge-shown", "true");
  };

  const isCompleted = (conceptId: string) => completedConcepts.includes(conceptId);

  return {
    completedConcepts,
    markAsCompleted,
    isCompleted,
    showBadge,
    closeBadge,
    completedCount: completedConcepts.length,
  };
};
