"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "@/hooks/use-chat";
import { MessageBubble } from "@/components/chat/message-bubble";
import { Loader2 } from "lucide-react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="container py-8 max-w-4xl">
      <Card className="h-[600px] flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold">Tu Sesión Terapéutica</h1>
          <p className="text-muted-foreground">Habla con tu terapeuta AI en un espacio seguro y confidencial</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message.content}
              isUser={message.role === "user"}
            />
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Pensando...</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              Enviar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}