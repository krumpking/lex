"use client";

import { useEffect, useState } from "react";
import WelcomeNav from "../components/welcomeNav";

const saCases = [
  {
    title:
      "JAMES R LINDSEY ,THE LINDSEY FAMILY TRUST, WILLIAM BUCK JOHNS,MARC VAN ANTRO ,WYMONT SERVICES LIMITED, All acting derivatively and on behalf of AFRICAN WIRELESS INCORPORATED and ALIEU BADARA MOHAMED CONTEH",
    prompts: [
      "Summarise the case of JAMES R LINDSEY ,THE LINDSEY FAMILY TRUST, WILLIAM BUCK JOHNS,MARC VAN ANTRO ,WYMONT SERVICES LIMITED, All acting derivatively and on behalf of AFRICAN WIRELESS INCORPORATED and ALIEU BADARA MOHAMED CONTEH",
      "What was the reasoning of the Court in the case of JAMES R LINDSEY ,THE LINDSEY FAMILY TRUST, WILLIAM BUCK JOHNS,MARC VAN ANTRO ,WYMONT SERVICES LIMITED, All acting derivatively and on behalf of AFRICAN WIRELESS INCORPORATED and ALIEU BADARA MOHAMED CONTEH",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of JAMES R LINDSEY ,THE LINDSEY FAMILY TRUST, WILLIAM BUCK JOHNS,MARC VAN ANTRO ,WYMONT SERVICES LIMITED, All acting derivatively and on behalf of AFRICAN WIRELESS INCORPORATED and ALIEU BADARA MOHAMED CONTEH",
    ],
  },
  {
    title: "VODACOM (PTY) LTD and KENNETH NKOSANA MAKATE , SHAMEEL JOOSUB NO",
    prompts: [
      "Summarise the case of VODACOM (PTY) LTD and KENNETH NKOSANA MAKATE , SHAMEEL JOOSUB NO",
      "What was the reasoning of the Court in the case of VODACOM (PTY) LTD and KENNETH NKOSANA MAKATE , SHAMEEL JOOSUB NO",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of VODACOM (PTY) LTD and KENNETH NKOSANA MAKATE , SHAMEEL JOOSUB NO",
    ],
  },
  {
    title: "SIYABONGA MTHANTI and THE STATE",
    prompts: [
      "Summarise the case of SIYABONGA MTHANTI and THE STATE",
      "What was the reasoning of the Court in the case of SIYABONGA MTHANTI and THE STATE",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of SIYABONGA MTHANTI and THE STATE",
    ],
  },
  {
    title: "CHAIM COHEN and ABSA BANK LIMITED",
    prompts: [
      "Summarise the case of CHAIM COHEN and ABSA BANK LIMITED",
      "What was the reasoning of the Court in the case of CHAIM COHEN and ABSA BANK LIMITED",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of CHAIM COHEN and ABSA BANK LIMITED",
    ],
  },
  {
    title:
      "MALALA GEOPHREY LEDWABA and MINISTER OF JUSTICE AND CONSTITUTIONAL DEVELOPMENT, NATIONAL DIRECTOR OF PUBLIC PROSECUTIONS, HEAD OF THE SPECIALISED CRIMES COURT UNIT, PRETORIA",
    prompts: [
      "Summarise the case of MALALA GEOPHREY LEDWABA and MINISTER OF JUSTICE AND CONSTITUTIONAL DEVELOPMENT, NATIONAL DIRECTOR OF PUBLIC PROSECUTIONS, HEAD OF THE SPECIALISED CRIMES COURT UNIT, PRETORIA",
      "What was the reasoning of the Court in the case of MALALA GEOPHREY LEDWABA and MINISTER OF JUSTICE AND CONSTITUTIONAL DEVELOPMENT, NATIONAL DIRECTOR OF PUBLIC PROSECUTIONS, HEAD OF THE SPECIALISED CRIMES COURT UNIT, PRETORIA",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of MALALA GEOPHREY LEDWABA and MINISTER OF JUSTICE AND CONSTITUTIONAL DEVELOPMENT, NATIONAL DIRECTOR OF PUBLIC PROSECUTIONS, HEAD OF THE SPECIALISED CRIMES COURT UNIT, PRETORIA",
    ],
  },
  {
    title: "ABEL SEKOALA and THE STATE ",
    prompts: [
      "Summarise the case of ABEL SEKOALA and THE STATE",
      "What was the reasoning of the Court in the case of ABEL SEKOALA and THE STATE",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of ABEL SEKOALA and THE STATE",
    ],
  },
  {
    title:
      "ALICE MARY PARRY and ROSALENE SYBIL DUNN-BLATCH, ITRISA NPC, TRADSA (PTY) LTD",
    prompts: [
      "Summarise the case of ALICE MARY PARRY and ROSALENE SYBIL DUNN-BLATCH, ITRISA NPC, TRADSA (PTY) LTD",
      "What was the reasoning of the Court in the case of ALICE MARY PARRY and ROSALENE SYBIL DUNN-BLATCH, ITRISA NPC, TRADSA (PTY) LTD",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of ALICE MARY PARRY and ROSALENE SYBIL DUNN-BLATCH, ITRISA NPC, TRADSA (PTY) LTD",
    ],
  },
  {
    title:
      "RUANDA SNYMAN and BRENDAN CHRISTIAAN DE KOOKER N O, ROBERT WESSEL ROBERTSE N O, LOUIS THEODORE ADENDORFF N O",
    prompts: [
      "Summarise the case of RUANDA SNYMAN and BRENDAN CHRISTIAAN DE KOOKER N O, ROBERT WESSEL ROBERTSE N O, LOUIS THEODORE ADENDORFF N O ",
      "What was the reasoning of the Court in the case of RUANDA SNYMAN and BRENDAN CHRISTIAAN DE KOOKER N O, ROBERT WESSEL ROBERTSE N O, LOUIS THEODORE ADENDORFF N O",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of RUANDA SNYMAN and BRENDAN CHRISTIAAN DE KOOKER N O, ROBERT WESSEL ROBERTSE N O, LOUIS THEODORE ADENDORFF N O",
    ],
  },
  {
    title:
      "THOLO ENERGY SERVICES CC  and COMMISSIONER FOR THE SOUTH AFRICAN REVENUE SERVICE",
    prompts: [
      "Summarise the case of THOLO ENERGY SERVICES CC  and COMMISSIONER FOR THE SOUTH AFRICAN REVENUE SERVICE",
      "What was the reasoning of the Court in the case of THOLO ENERGY SERVICES CC  and COMMISSIONER FOR THE SOUTH AFRICAN REVENUE SERVICE ",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of THOLO ENERGY SERVICES CC  and COMMISSIONER FOR THE SOUTH AFRICAN REVENUE SERVICE",
    ],
  },
  {
    title:
      "THE SOUTH AFRICAN HUMAN RIGHTS COMMISSION and AGRO DATA CC F G BOSHOFF and AFRIFORUM NPC , CENTRE FOR APPLIED LEGAL STUDIES, THE COMMISSION FOR GENDER EQUALITY ",
    prompts: [
      "Summarise the case of THE SOUTH AFRICAN HUMAN RIGHTS COMMISSION and AGRO DATA CC F G BOSHOFF and AFRIFORUM NPC , CENTRE FOR APPLIED LEGAL STUDIES, THE COMMISSION FOR GENDER EQUALITY",
      "What was the reasoning of the Court in the case of THE SOUTH AFRICAN HUMAN RIGHTS COMMISSION and AGRO DATA CC F G BOSHOFF and AFRIFORUM NPC , CENTRE FOR APPLIED LEGAL STUDIES, THE COMMISSION FOR GENDER EQUALITY",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of THE SOUTH AFRICAN HUMAN RIGHTS COMMISSION and AGRO DATA CC F G BOSHOFF and AFRIFORUM NPC , CENTRE FOR APPLIED LEGAL STUDIES, THE COMMISSION FOR GENDER EQUALITY",
    ],
  },
];

const zimbabweCases = [
  {
    title: "GERALD SIBANDA vs LAWRENCE MASANGA",
    prompts: [
      "Summarise the case of GERALD SIBANDA vs LAWRENCE MASANGA",
      "What was the reasoning of the Court in the case of GERALD SIBANDA vs LAWRENCE MASANGA",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of GERALD SIBANDA vs LAWRENCE MASANGA",
    ],
  },
  {
    title: "ROCK TELECOM LIMITED vs ZIMBABWE REVENUE AUTHORITY",
    prompts: [
      "Summarise the case of ROCK TELECOM LIMITED vs ZIMBABWE REVENUE AUTHORITY",
      "What was the reasoning of the Court in the case of ROCK TELECOM LIMITED vs ZIMBABWE REVENUE AUTHORITY",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of ROCK TELECOM LIMITED vs ZIMBABWE REVENUE AUTHORITY",
    ],
  },
  {
    title: "JAYESH SHAH vs PROFESSOR CHARLES NHERERA",
    prompts: [
      "Summarise the case of JAYESH SHAH vs PROFESSOR CHARLES NHERERA",
      "What was the reasoning of the Court in the case of JAYESH SHAH vs PROFESSOR CHARLES NHERERA",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of JAYESH SHAH vs PROFESSOR CHARLES NHERERA",
    ],
  },
  {
    title: "SHECKEM BARRISTER NGAZIMBI vs MUROWA DIAMONDS (PRIVATE) LIMITED",
    prompts: [
      "Summarise the case of SHECKEM BARRISTER NGAZIMBI vs MUROWA DIAMONDS (PRIVATE) LIMITED",
      "What was the reasoning of the Court in the case of SHECKEM BARRISTER NGAZIMBI vs MUROWA DIAMONDS (PRIVATE) LIMITED",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of SHECKEM BARRISTER NGAZIMBI vs MUROWA DIAMONDS (PRIVATE) LIMITED",
    ],
  },
  {
    title:
      "TENDAI BOTHWELL NDORO N.O. In his capacity as the executor testamentary of the estate of the late Grace Mandaza , CATHERINE CONSTANCE MANDAZA In her capacity as the curator bonis of the estate of the late Joel Mandaza vs DOROTHY MANDAZA, MASTER OF THE HIGH COURT,THE REGISTRAR OF DEEDS",
    prompts: [
      "Summarise the case of TENDAI BOTHWELL NDORO N.O. In his capacity as the executor testamentary of the estate of the late Grace Mandaza , CATHERINE CONSTANCE MANDAZA In her capacity as the curator bonis of the estate of the late Joel Mandaza vs DOROTHY MANDAZA, MASTER OF THE HIGH COURT,THE REGISTRAR OF DEEDS",
      "What was the reasoning of the Court in the case of TENDAI BOTHWELL NDORO N.O. In his capacity as the executor testamentary of the estate of the late Grace Mandaza , CATHERINE CONSTANCE MANDAZA In her capacity as the curator bonis of the estate of the late Joel Mandaza vs DOROTHY MANDAZA, MASTER OF THE HIGH COURT,THE REGISTRAR OF DEEDS",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of TENDAI BOTHWELL NDORO N.O. In his capacity as the executor testamentary of the estate of the late Grace Mandaza , CATHERINE CONSTANCE MANDAZA In her capacity as the curator bonis of the estate of the late Joel Mandaza vs DOROTHY MANDAZA, MASTER OF THE HIGH COURT,THE REGISTRAR OF DEEDS",
    ],
  },
  {
    title: "TICHAHLEYI MPOFU vs ZIMBABWE MANPOWER DEVELOPMENT FUND",
    prompts: [
      "Summarise the case of TICHAHLEYI MPOFU vs ZIMBABWE MANPOWER DEVELOPMENT FUND",
      "What was the reasoning of the Court in the case of TICHAHLEYI MPOFU vs ZIMBABWE MANPOWER DEVELOPMENT FUND",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of TICHAHLEYI MPOFU vs ZIMBABWE MANPOWER DEVELOPMENT FUND",
    ],
  },
  {
    title: "TERERAI LOUIS MUTASA vs ZESA ENTERPRISES  (PRIVATE) LIMITED",
    prompts: [
      "Summarise the case of TERERAI LOUIS MUTASA vs ZESA ENTERPRISES  (PRIVATE) LIMITED",
      "What was the reasoning of the Court in the case of TERERAI LOUIS MUTASA vs ZESA ENTERPRISES  (PRIVATE) LIMITED",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of TERERAI LOUIS MUTASA vs ZESA ENTERPRISES  (PRIVATE) LIMITED",
    ],
  },
  {
    title:
      "THE COMMANDER DEFENCE FORCES vs COLLEN CHIBA, CHARLES MHURI, BOTHWELL GOREKORE, HILLARY MUBARIKI, DEMOCRACY MURAMBADORO, GIBSON MADZINGA, MINISTER OF DEFENCE, SECURITY AND WAR VETERANS",
    prompts: [
      "Summarise the case of THE COMMANDER DEFENCE FORCES vs COLLEN CHIBA, CHARLES MHURI, BOTHWELL GOREKORE, HILLARY MUBARIKI, DEMOCRACY MURAMBADORO, GIBSON MADZINGA, MINISTER OF DEFENCE, SECURITY AND WAR VETERANS",
      "What was the reasoning of the Court in the case of THE COMMANDER DEFENCE FORCES vs COLLEN CHIBA, CHARLES MHURI, BOTHWELL GOREKORE, HILLARY MUBARIKI, DEMOCRACY MURAMBADORO, GIBSON MADZINGA, MINISTER OF DEFENCE, SECURITY AND WAR VETERANS",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of THE COMMANDER DEFENCE FORCES vs COLLEN CHIBA, CHARLES MHURI, BOTHWELL GOREKORE, HILLARY MUBARIKI, DEMOCRACY MURAMBADORO, GIBSON MADZINGA, MINISTER OF DEFENCE, SECURITY AND WAR VETERANS",
    ],
  },
  {
    title:
      "ZIMBABWE MANPOWER DEVELOPMENT FUND vs ZIMBABWE JIANGSU INTERNATIONAL COMPANY (PRIVATE) LIMITED, CLASSIQUE PROJECT MANAGEMENT (PRIVATE) LIMITED",
    prompts: [
      "Summarise the case of ZIMBABWE MANPOWER DEVELOPMENT FUND vs ZIMBABWE JIANGSU INTERNATIONAL COMPANY (PRIVATE) LIMITED, CLASSIQUE PROJECT MANAGEMENT (PRIVATE) LIMITED",
      "What was the reasoning of the Court in the case of ZIMBABWE MANPOWER DEVELOPMENT FUND vs ZIMBABWE JIANGSU INTERNATIONAL COMPANY (PRIVATE) LIMITED, CLASSIQUE PROJECT MANAGEMENT (PRIVATE) LIMITED",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of ZIMBABWE MANPOWER DEVELOPMENT FUND vs ZIMBABWE JIANGSU INTERNATIONAL COMPANY (PRIVATE) LIMITED, CLASSIQUE PROJECT MANAGEMENT (PRIVATE) LIMITED",
    ],
  },
  {
    title: "ELISHA TSINDIKIDZO vs CONNECT MICROFINANCE ZAMBIA LIMITED",
    prompts: [
      "Summarise the case of ELISHA TSINDIKIDZO vs CONNECT MICROFINANCE ZAMBIA LIMITED",
      "What was the reasoning of the Court in the case of ELISHA TSINDIKIDZO vs CONNECT MICROFINANCE ZAMBIA LIMITED",
      "What were the arguments of the Plaintiff?",
      "What were the arguments of the Defendants?",
      "Which laws did the Court rely on in the case of ELISHA TSINDIKIDZO vs CONNECT MICROFINANCE ZAMBIA LIMITED",
    ],
  },
];

export default function Chat() {
  useEffect(() => {
    const chatbotDiv = document.getElementById("chatbot");
    if (chatbotDiv) {
      chatbotDiv.classList.add("highlight");
      //  Remove the highlight after 3 seconds
    }
  }, []);

  return (
    <WelcomeNav>
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl mb-4">
          AI Revolutionizing Legal Practice in Africa
        </h1>
        <p className="text-lg">
          Simply interact with our AI chatbot to experience its capabilities
          firsthand. You can ask legal questions, request document analysis, or
          seek guidance on complex legal issues. Our AI is designed to
          understand legal terminology and provide accurate, informative
          responses.
        </p>
      </div>
      <div className="flex flex-col bg-white p-8 rounded-2xl shadow shadow-blue-700/50 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-start">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl">
              AI-Powered Legal Solutions for South Africa
            </h1>
            <p className="">
              Experience the future of legal practice in South Africa. See how
              our AI chatbot can streamline legal research using the cases below
              <b>click any cases to see recommend prompts</b>
            </p>
            {saCases.map((value, index) => (
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
      <div className="flex flex-col bg-white p-8 rounded-2xl shadow mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-start">
          <div className="flex flex-col">
            <h1 className="text-4xl">
              AI Transforming Zimbabwe&apos;`s Legal Landscape
            </h1>
            <p>
              Discover how AI is shaping the future of Zimbabwe&apos;`s legal
              industry. See real-world examples with the cases below,
              <b>click any cases to see recommend prompts</b>
            </p>
            {zimbabweCases.map((value, index) => (
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
                src="/gif/zimbabwe.gif"
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
        className="w-full text-left px-4 py-2 bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
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
