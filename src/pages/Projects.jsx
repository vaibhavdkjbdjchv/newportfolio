import React, { useState } from "react";
import images from "../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProjectsCards from "../../components/ProjectsCard";
import Navbar from "../../components/Navbar";

function Projects() {
  const [active, setActive] = useState(false);
  const [beyoudactive, setBeyoudactive] = useState(false);
  const [geminiactive, setgeminiactive] = useState(false);
  const [chessactive, setChessactive] = useState(false);
  const [shopperactive, setShopperActive] = useState(false);
  const [swtactive, setSwtactive] = useState(false);

  function activebutton() {
    setActive(!active);
  }
  function beyoundactive() {
    setBeyoudactive(!beyoudactive);
  }
  function geminiactivedev() {
    setgeminiactive(!geminiactive);
  }
  function chessactivediv() {
    setChessactive(!chessactive);
  }
  function shopeerdive() {
    setShopperActive(!shopperactive);
  }
  function swtactivediv() {
    setSwtactive(!swtactive);
  }

  return (
    <div>
      <Navbar />
      <div className="w-[100vw] flex justify-center items-center">
        <div className="w-[100%] py-10 flex flex-col items-center justify-center gap-5">
          <div className="w-[90%]">
            <h1 className="text-left text-3xl fontUse font-bold pb-10 ">
              Projects →
            </h1>
          </div>
          <ProjectsCards
            image={images.flaashnet}
            title="Flasshnet"
            description="🚀 Developed a dynamic front-end website for FlaashNet Internet
            Pvt. Ltd. using HTML, CSS, and JavaScript, resulting in an X%
            increase in online engagement and customer inquirie Integrated
            smooth animations and transitions to improve user engagement and
            provide an interactive browsing experience"
            livelink="https://flaashnetwfi.netlify.app/"
            live="live"
            detailsLink=<div className="py-1 mt-20 flex flex-col px-2  justify-between items-start text-white">
              <h1 className="text-lg font-bold">
                🚀 FlaashNet Internet Pvt. Ltd.
              </h1>
              <p>
                <span className="font-semibold">Website Project Type:</span>{" "}
                Front-end
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <span className="font-semibold">Project Type:</span> Front-end
                  website for an internet provider
                </li>
                <li>
                  <span className="font-semibold">Technology Used:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold">Key Features:</span> Responsive
                design, animations for a better user experience, clean and
                modern UI, showcasing services and plans for the internet
                provider.
              </p>
            </div>
          />

          <ProjectsCards
            image={images.estroverse}
            title="EstroVerse"
            description={`Built a full-stack Doctor Appointment System where patients and doctors connect like never before.

  🔧 Tech Stack Magic: React.js ⚛️ | Node.js 🚀 | Express.js 🌐 | MongoDB 🍃 | JWT 🔐

  🌟 Highlights:
  • 📅 Smooth appointment booking — no more endless waiting lines
  • 🩺 Clean doctor profiles with expertise details
  • 🔐 Role-based login — patient ya doctor, sabko apna space
  • 🛡️ JWT-auth security — privacy locked, safe and sound
  • 📊 Admin dashboard — full control, zero stress
  • 📱 Fully responsive — mobile ho ya desktop, always crisp`}
            livelink="https://doctrot-appoiment-web-du5j.vercel.app/"
            live="Live"
            detailsLink={
              <div className="py-1 gap-2 mt-10 flex flex-col px-2 justify-between items-start text-white">
                <h1 className="text-lg font-bold">
                  🩺 Doctor Appointment System
                </h1>
                <p>
                  <span className="font-semibold">Website Project Type:</span>{" "}
                  Full-stack Web Application
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <span className="font-semibold">Project Type:</span> Online
                    booking and doctor management platform
                  </li>
                  <li>
                    <span className="font-semibold">Technology Used:</span>
                    <ul className="list-disc list-inside ml-4">
                      <li>React.js</li>
                      <li>Node.js + Express.js</li>
                      <li>MongoDB</li>
                      <li>JWT Authentication</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-2">
                  <span className="font-semibold">Key Features:</span>{" "}
                  Appointment booking, doctor listings, JWT-based login,
                  mobile-friendly responsive design, and admin analytics
                  dashboard to view appointment stats.
                </p>
              </div>
            }
          />
          <ProjectsCards
            image={images.swt}
            title="SWT (Shop With Trust)"
            description="  🛒 Developed an e-commerce website for my 3rd-year project using
              HTML, CSS, and JavaScript for the frontend Built backend
              functionality using PHP and MySQL, including user authentication,
              product management, and order processing. Designed a responsive
              interface to ensure compatibility across devices, improving user
              engagement and accessibility. Integrated shopping cart, payment
              gateway, and order tracking systems, ensuring smooth transaction
              flow and customer satisfaction."
            livelink="https://github.com/vaibhavpan12/SWT-ShopWithTrust-.git"
            live="GitHub Live"
            detailsLink=<div className="py-1 flex flex-col px-2  justify-between items-start text-white">
              <h1 className="text-lg font-bold">
                🛍️ SWT (Shop With Trust) E-commerce Website
              </h1>
              <p>
                <span className="font-semibold">Website Project Type:</span>{" "}
                Full-Stack E-commerce Website
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <span className="font-semibold">Project Type:</span> Online
                  shopping platform
                </li>
                <li>
                  <span className="font-semibold">Technology Used:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>HTML, CSS, JavaScript (Frontend)</li>
                    <li>PHP (Backend)</li>
                    <li>MySQL (Database)</li>
                    <li>Bootstrap (UI Styling)</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold">Key Features:</span> Secure user
                authentication, product catalog, shopping cart, order
                management, admin panel for product management, and a responsive
                design for all devices.
              </p>
            </div>
          />
          <ProjectsCards
            image={images.chess}
            title="Chess Game"
            description="♟️ A real-time multiplayer chess game using Node.js, Express.js,
              EJS, and Socket.io, with the Chess.js CDN for enhanced game logic.
              This project focuses on: ♟️ Real-time gameplay and seamless
              multiplayer interaction ♟️ Robust game logic powered by Chess.js
              ♟️ Dynamic front-end with EJS templates This has been an
              incredible opportunity to strengthen my skills in WebSocket
              programming and full-stack development while tackling the
              challenges of creating an engaging user experience."
            livelink="https://github.com/vaibhavpan12/Chess-Game-.git"
            live="GitHub Link"
            detailsLink=<div className="py-1 mt-20 flex flex-col px-2  justify-between items-start text-white">
              <h1 className="text-2xl fontUse font-bold">♟️ Chess Game</h1>
              <p>
                <span className="font-semibold text-lg px-2">
                  Website Project Type:
                </span>{" "}
                Maltiplayer Chess Game
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <span className="font-semibold text-lg">Project Type:</span>{" "}
                  Multiplayer Chess Game
                </li>
                <li>
                  <span className="font-bold text-lg">Technology Used:</span>
                  <ul className="list-disc font-semibold list-inside ml-4">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>Socket.io</li>
                    <li>Chess.cdn</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <span className="text-lg font-semibold fontUse">
                  Key Features:
                </span>{" "}
                Real-time gameplay and seamless multiplayer interaction ♟️
                Robust game logic powered by Chess.js.
              </p>
            </div>
          />
          <ProjectsCards
            image={images.shopper}
            title="Shopper"
            description=" 🛒 A Full-Stack E-commerce Website built using React.js for the
              frontend and Node.js + MongoDB for the backend. The website
              provides a smooth shopping experience with advanced features like
              a shopping cart, payment gateway, and admin panel."
            livelink="https://github.com/vaibhavpan12/SHOPPER.git"
            live="GitHub Link"
            detailsLink=<div className="py-2 flex flex-col px-2 justify-between items-start text-white">
              <h1 className="text-lg font-bold">
                🛒 Shopper E-commerce Website
              </h1>
              <p>
                <span className="font-semibold">Website Project Type:</span>{" "}
                Full-Stack E-commerce Website
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <span className="font-semibold">Project Type:</span> Online
                  shopping platform
                </li>
                <li>
                  <span className="font-semibold">Technology Used:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>React.js (Front-end)</li>
                    <li>Tailwind CSS (Styling)</li>
                    <li>Node.js & Express.js (Back-end)</li>
                    <li>MongoDB (Database)</li>
                    <li>Stripe (Payment Integration)</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold">Key Features:</span> User
                authentication, product listings, cart management, secure
                payment gateway, order tracking, and a responsive UI with smooth
                animations.
              </p>
            </div>
          />

          <ProjectsCards
            image={images.beyoundchat}
            title="BesyoundChat"
            description="This project is a web-based AI chatbot integration and testing
              platform Demo Website that enables clients to seamlessly integrate a chatbot
              into their website. It provides a user-friendly interface for
              managing chatbot interactions, testing functionality, and
              troubleshooting issues. The platform includes features such as
              automated website scraping, chatbot training, integration
              instructions, and a success/failure feedback."
            livelink="https://chatbeyound.vercel.app/"
            live="live"
            detailsLink=<div className="py-1 gap-2  flex flex-col px-2  justify-between items-start text-white">
              <h1 className="text-2xl fontUse font-bold">
                💬 BeyondChat Project
              </h1>
              <p>
                <span className="font-semibold text-lg px-2">
                  Website Project Type:
                </span>{" "}
                Front-end
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <span className="font-semibold text-lg">Project Type:</span>{" "}
                  Front-end chat application
                </li>
                <li>
                  <span className="font-bold text-lg">Technology Used:</span>
                  <ul className="list-disc font-semibold list-inside ml-4">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase (for authentication & database)</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <span className="text-lg font-semibold fontUse">
                  Key Features:
                </span>{" "}
                Real-time messaging, user authentication, responsive UI, modern
                chat interface with animations, and efficient state management.
              </p>
            </div>
          />
          <ProjectsCards
            image={images.gemini}
            title="Gemini Clone"
            description="🚀 Gemini Clone is an AI-powered chat assistant UI built with
              React.js and Tailwind CSS. It features a modern, responsive
              design, smooth animations, dark mode support, and API integration
              for real-time AI responses. The project replicates the Gemini
              chatbot interface, offering an interactive and user-friendly
              experience."
            livelink="https://gemini-clone-lj1j.vercel.app/"
            live="Live"
            detailsLink=<div className="py-1 gap-2  mt-10 flex flex-col px-2 justify-between items-start text-white">
              <h1 className="text-lg font-bold">🤖 Gemini Clone Project</h1>
              <p>
                <span className="font-semibold">Website Project Type:</span>{" "}
                Front-end
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <span className="font-semibold">Project Type:</span>{" "}
                  AI-powered chat assistant UI clone
                </li>
                <li>
                  <span className="font-semibold">Technology Used:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>API Integration (for AI responses)</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold">Key Features:</span> AI-based
                chat UI, modern responsive design, smooth animations, dark mode
                support, and interactive user experience.
              </p>
            </div>
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
