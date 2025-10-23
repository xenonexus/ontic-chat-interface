import { ChatHeader } from "@/components/ChatHeader";
import { SearchForm } from "@/components/SearchForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const handleSearch = (searchParams: {
    doi?: string;
    year?: string;
    title?: string;
  }) => {
    console.log("Search parameters:", searchParams);
    // TODO: Implement actual search functionality
  };

  return (
    <div className="flex flex-col h-screen bg-background relative overflow-hidden">
      {/* Breathing glow background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full breathe-glow opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary to-accent rounded-full breathe-glow opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <ChatHeader isCompact={false} />
        
        <ScrollArea className="flex-1 px-4">
          <div className="max-w-5xl mx-auto py-12">
            <SearchForm onSearch={handleSearch} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Index;
