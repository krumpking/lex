"use client";

import { ChatSection as ChatSectionUI } from "@llamaindex/chat-ui";
import "@llamaindex/chat-ui/styles/markdown.css";
import "@llamaindex/chat-ui/styles/pdf.css";
import { useChat } from "ai/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import CustomChatInput from "./ui/chat/chat-input";
import CustomChatMessages from "./ui/chat/chat-messages";
import { useClientConfig } from "./ui/chat/hooks/use-config";

export default function ChatSection() {
  const { backend } = useClientConfig();
  const counter = useSelector(
    (state: RootState) => state.demoCounterSlice.value,
  );
  const user = useSelector((state: RootState) => state.userSlice.companyId);
  const handler = useChat({
    api: `${backend}/api/chat`,
    onError: (error: unknown) => {
      if (!(error instanceof Error)) throw error;
      let errorMessage: string;
      try {
        errorMessage = JSON.parse(error.message).detail;
      } catch (e) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    },
  });

  function getFreeMessages() {
    let freeMessages = 10;
    if (counter >= 0 && counter < 10) {
      freeMessages = 10 - counter;
    } else {
      freeMessages = 0;
    }
    return freeMessages / 2;
  }

  if (!user && getFreeMessages() === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-gray-100 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Demo Messages Exhausted
          </h2>
          <p className="text-gray-600 mb-6">
            You have used all available demo messages.
          </p>
          <a
            href="/signup"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Register for Full Access
          </a>
        </div>
      </div>
    );
  }

  return (
    <ChatSectionUI handler={handler} className="w-full h-full">
      <CustomChatMessages />
      <CustomChatInput />

      <a
        href="/prompt"
        className="text-[12px] underline decoration-2 hover:text-blue-600 transition-colors duration-200"
      >
        See Available Demo Cases and Prompt Guidance
      </a>
      {user == null ? (
        <p className="text-[12px] underline decoration-2 hover:text-blue-600 transition-colors duration-200">
          Available Free Messages {getFreeMessages()}
        </p>
      ) : (
        <p> </p>
      )}
    </ChatSectionUI>
  );
}
