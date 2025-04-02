"use client";

import Link from "next/link";
import { useState } from "react";
import WelcomeNav from "./components/welcomeNav";

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
        strokeWidth="1.5"
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
        strokeWidth="1.5"
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
        strokeWidth="1.5"
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
      "Gain a deeper understanding of your case-specific agreements with our AI Legal Advisor. Upload your contracts, and our AI will analyze the document, identify key clauses, and pinpoint relevant laws and precedents to help you assess potential risks and opportunities.",
    icon: (
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
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <WelcomeNav>
      <div className="relative">
        <video
          src="/videos/home.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover shadow shadow-blue-700/50"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-xl md:text-6xl font-bold mb-1 md:mb-4">
              Every case, document, and decision matters.
            </h1>
            <p className="text-sm md:text-2xl mb-1 md:mb-8">
              You need intelligent tools to deliver with precision and speed.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold"
            >
              Try our demo
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-8">
        Welcome to Lexania, an AI-powered legal platform that automates case and
        law analysis, enhances legal writing, and streamlines legal workflows.
      </h1>
      <div className="flex flex-col bg-white p-8 rounded-2xl shadow shadow-blue-700/50 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-start">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl">Revolutionize Legal Practice with AI</h1>
            <p className="">
              Experience the future of legal practice with our AI-powered legal
              assistant. Our cutting-edge technology leverages the power of RAG
              (Retrieval Augmented Generation) to provide accurate and efficient
              legal research, document analysis, and drafting. Streamline your
              workflow, enhance decision-making, and stay ahead of the curve.
            </p>
            {aiFeatures.map((value, index) => (
              <ExpandablePanel
                key={index}
                title={value.title}
                content={value.description}
                icon={value.icon}
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

      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
				<div className='flex justify-center'>
					<img
						src='/images/africa.jpg'
						alt='Legal Technology'
						className='rounded-lg shadow-2xl shadow-blue-700/50 object-cover h-full w-full'
					/>
				</div>
				<div className='flex flex-col justify-center p-6'>
					<h2 className='text-3xl font-bold mb-4'>
						Transform Your Legal Practice
					</h2>
					<p className='text-gray-600 text-lg'>
						AI is revolutionizing the legal profession across Africa, empowering
						lawyers to work more efficiently and effectively. Our AI-powered
						legal assistant is designed to streamline various aspects of legal
						practice, from research to document drafting.
					</p>
					<p className='text-gray-600 text-lg'>
						AI is revolutionizing the legal profession across Africa, empowering
						lawyers to work more efficiently and effectively. Our AI-powered
						legal assistant is designed to streamline various aspects of legal
						practice, from research to document drafting.
					</p>
					<p className='text-gray-600 text-lg'>
						By leveraging advanced natural language processing and machine
						learning algorithms, our AI can rapidly analyze vast legal databases
						to identify relevant laws, regulations, and case precedents. This
						significantly reduces the time spent on research, allowing lawyers
						to focus on strategic thinking and client consultation.
						Additionally, our AI can assist in drafting legal documents, such as
						contracts, briefs, and pleadings, by providing accurate language and
						formatting suggestions. This ensures consistent quality and reduces
						the risk of errors.
					</p>
					<p>
						Moreover, our AI tool can enhance proofreading and editing
						capabilities, identifying potential errors and inconsistencies in
						legal documents. It can also generate persuasive legal arguments and
						assist in crafting compelling presentations for court hearings or
						client meetings. As AI technology continues to advance, we envision
						a future where legal professionals across Africa can benefit from
						even more sophisticated AI tools. This will not only improve the
						efficiency and accuracy of legal work but also democratize access to
						justice by making legal services more affordable and accessible to
						individuals and businesses of all sizes.
					</p>
				</div>
			</div> */}
      <div
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: "url('path_to_your_background_image.jpg')" }}
      >
        <div className="text-center">
          <h2 className="text-4xl mb-8 text-black">Who is this for?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow shadow-blue-700/50">
              <div className="mb-4">
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
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Law Firms</h3>
              <ul className="text-gray-800 text-left list-disc pl-4 space-y-2">
                <li>
                  <span className="font-semibold">Increased Efficiency:</span>{" "}
                  Automate routine tasks, such as legal research and document
                  review, freeing up lawyers&apos; time for higher-value work.
                </li>
                <li>
                  <span className="font-semibold">Enhanced Accuracy: </span>
                  Reduce errors and inconsistencies in legal documents, ensuring
                  compliance and minimizing risks.
                </li>
                <li>
                  <span className="font-semibold">
                    Improved Client Service:
                  </span>{" "}
                  Provide faster turnaround times, more accurate advice, and
                  personalized client experiences.
                </li>
                <li>
                  <span className="font-semibold">Competitive Advantage:</span>{" "}
                  Stay ahead of the curve by adopting cutting-edge technology
                  and offering innovative legal services.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow shadow-blue-700/50">
              <div className="mb-4">
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
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Corporate legal departments</h3>
              <ul className="text-gray-800 text-left list-disc pl-4 space-y-2">
                <li>
                  <span className="font-semibold">Enhanced Efficiency:</span>{" "}
                  Automate routine tasks like contract review, due diligence,
                  and legal research.
                </li>
                <li>
                  <span className="font-semibold">
                    Improved Decision-Making:
                  </span>{" "}
                  Leverage AI-powered insights to make informed business
                  decisions.
                </li>
                <li>
                  <span className="font-semibold">Reduced Risk:</span> Identify
                  and mitigate legal risks proactively.
                </li>
                <li>
                  <span className="font-semibold">Enhanced Compliance:</span>{" "}
                  Ensure adherence to complex regulations and standards.
                </li>
                <li>
                  <span className="font-semibold">Cost Reduction:</span>{" "}
                  Streamline legal operations and reduce legal expenses.
                </li>
                <li>
                  <span className="font-semibold">
                    Improved Client Service:
                  </span>{" "}
                  Provide timely and accurate legal advice.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow shadow-blue-700/50">
              <div className="mb-4">
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
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Courts and Tribunals</h3>
              <ul className="text-gray-800 text-left list-disc pl-4 space-y-2">
                <li>
                  <span className="font-semibold">
                    Enhanced Decision-Making:
                  </span>{" "}
                  Access to a comprehensive database of legal information and
                  real-time updates.
                </li>
                <li>
                  <span className="font-semibold">Improved Efficiency:</span>{" "}
                  Streamlined case management and reduced administrative
                  burdens.
                </li>
                <li>
                  <span className="font-semibold">Increased Transparency:</span>{" "}
                  Automated document generation and standardized case
                  processing.
                </li>
                <li>
                  <span className="font-semibold">Enhanced Public Trust:</span>{" "}
                  Improved access to justice and timely resolution of disputes.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow shadow-blue-700/50">
              <div className="mb-4">
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Government Departments</h3>
              <ul className="text-gray-800 text-left list-disc pl-4 space-y-2">
                <li>
                  <span className="font-semibold">
                    Enhanced Policy Development:
                  </span>{" "}
                  AI can analyze vast datasets to identify trends, predict
                  future outcomes, and inform evidence-based policymaking.
                </li>
                <li>
                  <span className="font-semibold">
                    Improved Regulatory Compliance:
                  </span>{" "}
                  AI can automate compliance checks, identify potential risks,
                  and reduce the burden on government agencies.
                </li>
                <li>
                  <span className="font-semibold">
                    Streamlined Legal Processes:
                  </span>{" "}
                  AI can optimize legal processes, such as contract review and
                  dispute resolution, leading to increased efficiency and
                  reduced costs.
                </li>
                <li>
                  <span className="font-semibold">
                    Enhanced Public Service Delivery:
                  </span>{" "}
                  AI can improve the delivery of public services, such as legal
                  aid and dispute resolution, by automating routine tasks and
                  providing personalized assistance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WelcomeNav>
  );
}

const ExpandablePanel = ({ title, content, icon }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <button
        className="w-full text-left px-4 py-2 bg-gray-50 flex justify-between items-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {icon}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        {isOpen && (
          <div className="px-4 py-2 border">
            <p className="p-4">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};
