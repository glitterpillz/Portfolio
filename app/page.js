"use client"
import Image from "next/image";
// import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import Modal from '../components/Modal'
import Footer from "@/components/Footer";
import { damp } from "three/src/math/MathUtils";

export default function Home() {
  // const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false)

  return (
    <div className="mainContainer overflow-y-auto">
      <div className="flex flex-col justify-start items-center w-[800px] h-[720px] overflow-y-auto neonBorder rounded-md">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.jpg')",
            perspective: "1000px",
            borderRadius: "20px"
          }}
        >
          <h1
            className="absolute text-white text-[55px] font-bold"
            style={{
              top: "13%",
              left: "4%",
              transform: "rotateX(0deg) rotateY(83deg)",
              textShadow: "0 5px 10px rgba(0, 0, 0, 0.7)", 
            }}
          >
            K A R E N <span className="pl-[15px]">H I C K E Y</span>
          </h1>
          <div>
            <button 
              onClick={() => setShowModal(true)}
              className="glowing-btn rounded-md"
              style={{
                transform: "rotateX(-10deg) rotateY(-10deg)",
              }}
            >
              <p className="neonP">P</p>
              <p className="neonFaultyR">R</p>
              <p className="neonP">O</p>
              <p className="neonP">J</p>
              <p className="neonP">E</p>
              <p className="neonFaultyC">C</p>
              <p className="neonP">T</p>
              <p className="neonP">S</p>
            </button>
          </div>
          {showModal && (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <div 
                className="scrollModal pr-4 flex flex-col gap-8 items-center overflow-y-scroll"
                style={{
                  maxHeight: "600px",
                }}
              >
                <h2 className="neonText headerText mt-5">Projects</h2>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col center justify-around w-[250px] text-s">
                    <div>
                      <a 
                        href="https://waterbnb-p356.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="subHeader"
                      >
                        WaterBnB
                      </a>
                      <p>Dec 13, 2024</p>
                      <p>JavaScript Express • React Redux</p>
                    </div>
                    <div>
                      <a
                        href="https://lovely-paws-hotel-717z.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="subHeader"
                      >                       
                        Lovely Paws Pet Hotel
                      </a>
                      <p>Jan 3, 2025</p>
                      <p>Python Flask • Redux Toolkit</p>
                    </div>
                    <div>
                      <a
                        href="https://pokenote-flask-c61f.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="subHeader"
                      >
                        PokeNote
                      </a>
                      <p>Jan 24, 2025</p>
                      <p>Python Flask • Redux Toolkit</p>
                    </div>
                  </div>
                  <div className="neonBorder h-[400px] self-center"></div>
                  <div className="flex flex-col justify-center items-center w-[200px] gap-3">
                    <a
                      href="https://waterbnb-p356.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"                   
                    >
                      <img src="/waterbnb-bw.png" className="projectImg rounded-lg p-1"></img>
                    </a>
                    <a
                      href="https://lovely-paws-hotel-717z.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"                   
                    >
                      <img src="/lovelypaws-bw.png" className="projectImg rounded-lg p-1"></img>
                    </a>
                    <a
                      href="https://pokenote-flask-c61f.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"                   
                    >
                      <img src="/pokenote-bw.jpg" className="projectImg rounded-lg p-1"></img>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="footer">Portfolio Website</h3>
                  <p>I built this Portfolio using Next.js and Tailwind CSS</p>
                  <p>Last updated: Jan 26, 2025</p>
                </div>
              </div>
            </Modal>
          )}
          <div>
            <img
              src="/cat.gif"
              alt="Cat Gif"
              className="w-[45px] h-[45px] absolute"
              style={{
                top: "414px",
                left: "425px",
                opacity: "90%",
                filter: "blur(1px)"
              }}
            ></img>
          </div>
          <div 
            className="w-[185px] h-[110px] absolute"
            style={{
              top: "32%",
              left: "25%",
              transform: "rotateX(2deg) rotateY(82deg)",
              backgroundColor: '#5D0E9A',
              opacity: '.5'
            }}  
          >
          </div>
          <p 
            onClick={() => setShowAboutModal(true)}
            className="openSign text-white absolute"
            style={{
              top: "33.5%",
              left: "30.7%",
              transform: "rotateX(3deg) rotateY(78deg)",
            }}
          >
            Open
          </p>
          {showAboutModal && (
            <Modal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)}>
              <div className="aboutMeDiv flex flex-col justify-center items-center">
                <img src="/prof-pic1.png" className="w-[200px] mb-3"></img>
                <h2 className="neonText headerText">KAREN HICKEY</h2>
                <h3 className="titleText">Full Stack Software Engineer</h3>
                <div className="flex flex-col justify-center items-center mt-2.5">
                  <p>karenhickey1010@gmail.com</p>
                  <Footer />
                </div>
                <p className="text-justify mt-3">I am a results-driven professional who thrives in fast-paced environments, combining problem-solving skills with excellent communication to resolve conflicts with tact and diplomacy. As a creative thinker with a keen eye for design, I bring a unique perspective to web application styling, ensuring visually appealing and user-friendly interfaces. I value collaboration and consistently seek opportunities to learn, leveraging diverse ideas to drive innovation and deliver impactful results.</p>
              </div>
            </Modal>
          )}
          <p 
            onClick={() => setShowTechModal(true)}
            className= "techSign text-white absolute pl-2 pr-2"
            style={{
              top: "63%",
              left: "3%",
              transform: "rotateX(0deg) rotateY(77deg)",
            }}
          >
            TECH
          </p>
          {showTechModal && (
            <Modal isOpen={showTechModal} onClose={() => setShowTechModal(false)}>
              <div 
              className="scrollModal pr-4 flex flex-col gap-8 items-center overflow-y-scroll pb-5"
              style={{
                maxHeight: "600px",
              }}              
              >
                <h2 className="neonText headerText">TECHNICAL BULLETPOINTS</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Developed scalable APIs with Express.js and Flask, incorporating efficient RESTful routing and middleware handling. Optimized server-size performance with SQLAlchemy and Sequelize for secure database interactions and improved data retrieval speeds.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Implemented global state management with Redux Toolkit in React-based projects to streamline state updates, prevent unnecessary re-renders, and improve maintainability in complex applications.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Designed and built visually immersive user interfaces by integrating 3D animations and glowing effects with Tailwind CSS. Combined advanced CSS techniques with interactive modals to create dynamic and engaging user experiences on personal and client-facing platforms.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Configured AWS S3 buckets for secure image storage and retrieval in projects like PokéNote and Lovely Paws Pet Hotel, utilizing pre-signed URLs and controlled permissions to optimize asset management and ensure data security.</p>
                  </div>
                </div>
                <h2 className="neonText headerText mt-3">SKILLS</h2>
                <div className="flex flex-col w-11/12 gap-6">
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Languages</h3>
                    <p>JavaScript • Python • HTML • CSS</p>
                  </div> 
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Frameworks & Libraries</h3>
                    <p>React • Next.js • Flask • Tailwind CSS • Node.js • Express</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Databases & ORMs</h3>
                    <p>PostgreSQL • SQLite • SQLAlchemy • Sequelize</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">State Management & Cloud</h3>
                    <p>React Redux • Redux Toolkit • AWS S3</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Authentication & Security</h3>
                    <p>JWT • Auth.js • CORS</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Tools</h3>
                    <p>GitHub • VSCode • Postman • Insomnia</p>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}