import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const doi = searchParams.get("doi");
  const year = searchParams.get("year");
  const title = searchParams.get("title");

  // Mock results - replace with actual API call
  const mockResults = [
    {
      id: 1,
      title: "Neural Networks and Deep Learning Applications",
      authors: ["John Doe", "Jane Smith"],
      year: 2024,
      doi: "10.1000/xyz123",
      abstract: "This paper explores the latest advances in neural network architectures...",
      citations: 45,
    },
    {
      id: 2,
      title: "Machine Learning in Healthcare",
      authors: ["Alice Johnson", "Bob Williams"],
      year: 2023,
      doi: "10.1000/abc456",
      abstract: "An investigation into how machine learning can improve patient outcomes...",
      citations: 32,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full breathe-glow opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary to-accent rounded-full breathe-glow opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="border-b border-primary/20 bg-background/50 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Search
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-orbitron font-bold text-foreground">Search Results</h1>
              <div className="flex gap-2 mt-1 flex-wrap">
                {doi && <Badge variant="secondary">DOI: {doi}</Badge>}
                {year && <Badge variant="secondary">Year: {year}</Badge>}
                {title && <Badge variant="secondary">Title: {title}</Badge>}
              </div>
            </div>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Found {mockResults.length} papers matching your search criteria
              </p>
            </div>

            <div className="space-y-4">
              {mockResults.map((paper) => (
                <Card key={paper.id} className="bg-background/50 backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-rajdhani mb-2">
                          {paper.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {paper.authors.join(", ")} • {paper.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {paper.citations} citations
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {paper.abstract}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground font-mono">
                        DOI: {paper.doi}
                      </span>
                      <Button variant="outline" size="sm">
                        View Full Paper
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SearchResults;
