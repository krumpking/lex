"use client";

import { useState } from "react";
import WelcomeNav from "../components/welcomeNav";

const aiUseCases = [
  {
    title: "Rapid Legal Research",
    prompts: [
      "How can I search for relevant case law?",
      "Find statutes related to my legal query",
      "What are the key regulations for this area of law?",
      "Description: Quickly identify relevant case law, statutes, and regulations by inputting keywords or specific legal queries.",
    ],
  },
  {
    title: "Document Review and Analysis",
    prompts: [
      "Analyze this contract for potential issues",
      "Review this pleading document",
      "Identify risks in this legal document",
      "Description: Analyze legal documents, such as contracts and pleadings, to identify potential issues, inconsistencies, and risks.",
    ],
  },
  {
    title: "Contract Drafting and Review",
    prompts: [
      "Provide a template for an employment contract",
      "Suggest clauses for this agreement",
      "Review this contract for compliance",
      "Description: Assist in drafting legal contracts by providing templates, suggesting clauses, and flagging potential risks.",
    ],
  },
  {
    title: "Legal Document Summarization",
    prompts: [
      "Summarize this court opinion",
      "Extract key points from this legislation",
      "Provide an overview of this legal document",
      "Description: Summarize complex legal documents, such as court opinions and legislation, to quickly grasp key points and arguments.",
    ],
  },
  {
    title: "Predictive Legal Analytics",
    prompts: [
      "What is the likely outcome of this case?",
      "Analyze historical data for similar cases",
      "Predict potential regulatory changes",
      "Description: Analyze historical data to predict future legal outcomes, such as case outcomes or regulatory changes.",
    ],
  },
  {
    title: "AI-Powered Legal Writing",
    prompts: [
      "Help draft a legal brief",
      "Improve the clarity of this legal memo",
      "Ensure consistency in legal language",
      "Description: Assist in drafting legal briefs, memos, and other legal documents by suggesting language, improving clarity, and ensuring consistency.",
    ],
  },
  {
    title: "Regulatory Compliance Monitoring",
    prompts: [
      "Check for recent regulatory changes",
      "Identify compliance risks",
      "Monitor regulatory updates",
      "Description: Monitor regulatory changes and alert users to potential compliance risks.",
    ],
  },
  {
    title: "E-Discovery and Document Production",
    prompts: [
      "Help identify relevant documents",
      "Review privilege log",
      "Prepare document production",
      "Description: Assist in the e-discovery process by identifying relevant documents, reviewing privilege logs, and preparing document productions.",
    ],
  },
  {
    title: "Due Diligence and Risk Assessment",
    prompts: [
      "Conduct due diligence investigation",
      "Identify potential legal risks",
      "Assess compliance status",
      "Description: Conduct thorough due diligence investigations and identify potential legal risks.",
    ],
  },
  {
    title: "Client Communication and Engagement",
    prompts: [
      "Draft client update email",
      "Create automated reminder",
      "Answer common legal FAQs",
      "Description: Automate routine client communications, such as sending reminders, providing updates, and answering FAQs.",
    ],
  },
];

const aiFeatures = [
  {
    title: "Law Summarization and Analysis",
    description:
      "Stay ahead of the curve with our AI-powered law summarization and analysis tool. Effortlessly digest complex legal statutes, regulations, and codes. Our AI meticulously extracts key points, identifies potential loopholes, and highlights relevant sections.This streamlined approach saves valuable time and ensures a comprehensive understanding of the legal landscape.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Precedent Case Analysis at Your Fingertips",
    description:
      "Our legal AI revolutionizes case analysis by swiftly summarizing complex legal documents and extracting key insights. By processing vast amounts of case law and legal precedents, our AI pinpoints relevant information, identifies patterns, and predicts potential outcomes. This empowers legal professionals to make informed decisions, build stronger arguments, and optimize their case strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Case-Specific Intelligence",
    description:
      "Gain a deeper understanding of your case-specific agreements with our AI Legal Advisor. Upload your contracts, and our AI will analyze the document, identify key clauses, and pinpoint relevant laws and precedents to help you assess potential risks and opportunities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
  },
  {
    title: "Case Understanding and Analysis ",
    description:
      "Perfect your legal documents with our advanced proofreading capabilities. Our AI meticulously scans your writing for errors in grammar, punctuation, and syntax, ensuring clarity and precision. Beyond surface-level corrections, our AI identifies potential ambiguities and suggests improvements in legal style and argumentation. This empowers you to deliver polished, persuasive legal documents that leave a lasting impression.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
];

export default function Usecases() {
  return (
    <WelcomeNav>
      <div className="flex flex-col items-center justify-center mb-16">
        <h1 className="text-4xl">Revolutionize Legal Practice with AI</h1>
        <p className="">
          Experience the future of legal practice with our AI-powered legal
          assistant. Our cutting-edge technology leverages the power of RAG
          (Retrieval Augmented Generation) to provide accurate and efficient
          legal research, document analysis, and drafting. Streamline your
          workflow, enhance decision-making, and stay ahead of the curve.
        </p>
      </div>
      <div className="flex flex-col bg-white p-8 rounded-2xl shadow shadow-blue-700/50 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-start">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl">With Lexania you can enjoy</h1>

            {aiUseCases.map((value, index) => (
              <ExpandablePanel
                key={index}
                title={value.title}
                content={value.prompts}
              />
            ))}
          </div>
          <div className="flex justify-center items-center bg-gray-50 h-full">
            <div className="shadow">
              <img
                src="/gif/salaw.gif"
                alt="Demo GIF"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </WelcomeNav>
  );
}

const ExpandablePanel = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <button
        className="w-full text-left px-4 py-2 bg-gray-50 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {isOpen && (
          <div className="px-4 py-2 border">
            {content.map((value: any, index: number) => (
              <p key={index} className="border-b p-4">
                {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
