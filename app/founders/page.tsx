"use client";

import WelcomeNav from "../components/welcomeNav";

export default function About() {
  return (
    <WelcomeNav>
      <div>
        <h1 className="text-center text-4xl mb-8">Meet the team</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-5 items-center p-6 border rounded-lg shadow shadow-blue-700/50">
            <img
              src="/images/clive.jpeg"
              alt="Card 1"
              className="w-84 h-84 rounded-[25px] object-cover mb-4 shadow shadow-blue-700/50"
            />
            <h3 className="text-xl font-semibold mb-2">Clive Tanaka Mukubvu</h3>
            <p className="text-gray-600 text-center">
              Clive Tanaka Mukubvu is a seasoned legal professional with nearly
              a decade of experience in the legal industry. Based in the
              Republic of Zambia, he currently serves as an Advocate of the High
              Court for Zambia. Clive holds a Bachelor&apos;`s degree in Law and
              Media and Writing, as well as an LLB Degree from the prestigious
              University of Cape Town.
            </p>
            <p className="text-gray-600 text-center">
              Clive&apos;`s passion for merging technology with the legal
              profession began early in his academic journey. During his first
              year at the University of Cape Town, he discovered the power of
              technology when he integrated digital mind maps into his
              note-taking process, moving away from traditional linear methods.
              This approach not only revolutionized his studies but also sparked
              a lifelong interest in leveraging tech solutions to tackle
              inefficiencies in the legal sector.
            </p>
            <p className="text-gray-600 text-center">
              Clive firmly believes that artificial intelligence and technology
              have the transformative potential to redefine the practice of law.
              In a field known for its high stress and outdated processes, his
              vision is to empower legal professionals with AI tools that boost
              productivity, enhance efficiency, and reduce the mental burden of
              the profession. With this mission in mind, Clive is at the
              forefront of building innovative solutions to create a smarter and
              more effective legal practice
            </p>
          </div>

          <div className="flex flex-col space-y-5 items-center p-6 border rounded-lg shadow shadow-blue-700/50">
            <img
              src="/images/kuzi.jpg"
              alt="Card 2"
              className="w-84 h-84 rounded-[25px] object-cover mb-4 shadow shadow-blue-700/50"
            />
            <h3 className="text-xl font-semibold mb-2">Kuzivakwashe Kurehwa</h3>
            <p className="text-gray-600 text-center">
              Kuzivakwashe Kurehwa is an actuarial professional with a Bachelor
              of Commerce Honours degree in Actuarial Science from the
              University of Cape Town. With three years of experience in the
              actuarial consulting space, Kuzivakwashe has developed a strong
              foundation in identifying financial risks and performing complex
              financial and risk modelling exercises for small, medium and large
              corporations. He is passionate about coming up with innovative
              solutions to mitigate and transform risk into opportunities for
              businesses.
            </p>
            <p className="text-gray-600 text-center">
              From an early age, Kuzivakwashe discovered a love for numbers and
              their ability to tell stories and solve problems. This passion
              grew into a fascination with managing risks in business and
              finding ways to turn potential challenges into profitable
              ventures. His work is driven by a belief that risks can unlock
              immense value when understood and approached strategically.
            </p>
            <p className="text-gray-600 text-center">
              Kuzivakwashe’s enthusiasm for technology and its potential to
              improve efficiency further fuels his approach to problem-solving.
              He believes in leveraging tech-driven solutions to streamline
              workflows, optimise decision-making, and unlock the untapped
              potential of African economies. With a commitment to impacting
              lives and fostering economic growth, Kuzivakwashe is dedicated to
              transforming challenges into opportunities, contributing to a
              brighter and more prosperous future for the continent.
            </p>
          </div>

          <div className="flex flex-col space-y-5 items-center p-6 border rounded-lg shadow shadow-blue-700/50">
            <img
              src="/images/anele.jpeg"
              alt="Card 3"
              className="w-84 h-84 rounded-[25px] object-cover mb-4 shadow shadow-blue-700/50"
            />
            <h3 className="text-xl font-semibold mb-2">Anele Siwawa</h3>
            <p className="text-gray-600 text-center">
              Anele Siwawa is a seasoned software engineer with over 8 years of
              experience, renowned for his technical expertise and innovative
              approach to problem-solving. He possesses a deep understanding of
              systems architecture, design, and data structures, enabling him to
              seamlessly integrate front-end and back-end components. His
              proficiency in a wide range of programming languages and
              frameworks, including Node.js, Java, Python, React, Flutter, and
              more, allows him to build robust and scalable applications.
            </p>
            <p className="text-gray-600 text-center">
              Anele is also well-versed in AI and machine learning technologies,
              leveraging tools like OpenAI, Azure AI, Llama, and Gemini to
              develop intelligent applications. His expertise in natural
              language processing, with experience in frameworks such as
              Dialogflow, Natural, NLP.js, and Compromise, enables him to create
              human-like interactions with machines.
            </p>
            <p className="text-gray-600 text-center">
              His passion for technology and his commitment to Africa&apos;`s
              development have led him to create innovative solutions like
              Asambe, an Uber-like platform. His technical prowess and
              entrepreneurial spirit have earned him recognition in the
              industry, including a prestigious hackathon by victory back in
              2017.
            </p>
          </div>
        </div>
      </div>
    </WelcomeNav>
  );
}
