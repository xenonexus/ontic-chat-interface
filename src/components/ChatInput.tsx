import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto px-4 pb-6">
      <div className="relative">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Ontic about proteins, pathways, or genetic resilience…"
          className="min-h-[60px] pr-14 bg-input border-primary/20 focus:border-primary/50 animate-pulse-border resize-none text-sm"
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="absolute right-3 bottom-3 p-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          aria-label="Transmit"
        >
          <Send className="h-4 w-4 text-background" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Ontic is an adaptive conversational intelligence for scientific exploration. Text-only.
      </p>
    </form>
  );
};
