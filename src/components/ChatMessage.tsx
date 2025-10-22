import { Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard",
      duration: 2000,
    });
  };

  const isUser = role === "user";

  return (
    <div
      className={`flex w-full animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative max-w-[80%] rounded-xl px-6 py-4 ${
          isUser
            ? "bg-card text-foreground border border-border/50"
            : "bg-card/50 text-foreground border border-primary/20 shadow-[0_0_15px_rgba(255,30,0,0.1)]"
        }`}
      >
        <div className="whitespace-pre-wrap text-sm leading-relaxed">
          {content}
        </div>
        
        {!isUser && isHovered && (
          <button
            onClick={handleCopy}
            className="absolute -right-2 -top-2 p-2 rounded-lg bg-card border border-primary/30 hover:border-primary/60 transition-colors"
            aria-label="Copy message"
          >
            <Copy className="h-3 w-3 text-primary" />
          </button>
        )}
      </div>
    </div>
  );
};
