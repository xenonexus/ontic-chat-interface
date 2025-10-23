import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SearchFormProps {
  onSearch: (searchParams: {
    doi?: string;
    year?: string;
    title?: string;
  }) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [doi, setDoi] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ doi, year, title });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-8 bg-background/50 backdrop-blur-xl border-primary/20 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="doi" className="text-lg font-rajdhani text-foreground/90">
            Search by DOI
          </Label>
          <div className="relative">
            <Input
              id="doi"
              type="text"
              placeholder="Enter DOI (e.g., 10.1000/xyz123)"
              value={doi}
              onChange={(e) => setDoi(e.target.value)}
              className="h-12 bg-background/80 border-primary/30 focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="year" className="text-lg font-rajdhani text-foreground/90">
            Search by Year Published
          </Label>
          <div className="relative">
            <Input
              id="year"
              type="text"
              placeholder="Enter year (e.g., 2024)"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-12 bg-background/80 border-primary/30 focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title" className="text-lg font-rajdhani text-foreground/90">
            Search by Title
          </Label>
          <div className="relative">
            <Input
              id="title"
              type="text"
              placeholder="Enter paper title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 bg-background/80 border-primary/30 focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-lg font-rajdhani bg-gradient-to-r from-primary via-bio-glow-mid to-secondary hover:opacity-90 transition-opacity"
        >
          <Search className="mr-2" />
          Search Papers
        </Button>
      </form>
    </Card>
  );
};
