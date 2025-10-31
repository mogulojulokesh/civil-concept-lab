import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Simple search logic - navigate to relevant section
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes("beam") || lowerQuery.includes("stress") || lowerQuery.includes("truss")) {
        navigate("/structural");
      } else if (lowerQuery.includes("soil") || lowerQuery.includes("foundation") || lowerQuery.includes("slope")) {
        navigate("/geotechnical");
      } else if (lowerQuery.includes("traffic") || lowerQuery.includes("pavement") || lowerQuery.includes("road")) {
        navigate("/transportation");
      } else if (lowerQuery.includes("water") || lowerQuery.includes("pollution") || lowerQuery.includes("waste")) {
        navigate("/environmental");
      }
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-9 w-40 sm:w-64"
      />
    </form>
  );
};

export default SearchBar;
