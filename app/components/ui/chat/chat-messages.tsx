"use client";

import { changeDemoCounter } from "@/app/store/other/demoCounterSlice";
import { ChatMessage, ChatMessages, useChatUI } from "@llamaindex/chat-ui";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ChatMessageAvatar } from "./chat-avatar";
import { ChatMessageContent } from "./chat-message-content";
import { ChatStarter } from "./chat-starter";

export default function CustomChatMessages() {
  const { messages } = useChatUI();
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length > 0) {
      dispatch(changeDemoCounter({ amount: 1 }));
    }
  }, [messages.length, dispatch]);

  return (
    <ChatMessages className="shadow-xl rounded-xl">
      <ChatMessages.List>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            isLast={index === messages.length - 1}
          >
            <ChatMessageAvatar />
            <ChatMessageContent />
            <ChatMessage.Actions />
          </ChatMessage>
        ))}
        <ChatMessages.Loading />
      </ChatMessages.List>
      <ChatMessages.Actions />
      <ChatStarter />
      <ToastContainer />
    </ChatMessages>
  );
}
