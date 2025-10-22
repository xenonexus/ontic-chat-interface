import { useState } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to Ontic. I'm here to help you explore extremophiles, proteins, metabolic pathways, and genetic structures for longevity research. What would you like to investigate?",
    },
  ]);

  // Check if conversation has started (more than just welcome message)
  const isConversationActive = messages.length > 1;

  const handleSend = (content: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);

    // TODO: Replace with actual AI integration
    // Placeholder response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `**Response to: "${content}"**\n\nThis is a placeholder response. Connect your AI model to get actual intelligent responses.\n\n**Next Steps:**\n- Integrate your LLM API\n- Add context about extremophiles\n- Configure response formatting`,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
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
        <ChatHeader isCompact={isConversationActive} />
        
        <ScrollArea className="flex-1 px-4">
          <div className="max-w-4xl mx-auto py-8 space-y-6">
            {messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))}
          </div>
        </ScrollArea>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default Index;
