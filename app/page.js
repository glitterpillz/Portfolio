"use client"
import React, { useState, useEffect } from "react";
import Modal from "@components/Modal";
import Footer from "@components/Footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false)
  const [showPdfModal, setShowPdfModal] = useState(false)

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
                  <p>Last updated: Feb 3, 2025</p>
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
              <div className="scrollModal pr-4 aboutMeDiv flex flex-col justify-around items-center h-[600px] overflow-y-auto">
                <img src="/prof-pic1.png" className="w-[200px] mb-3"></img>
                <h2 className="neonText headerText">KAREN HICKEY</h2>
                <h3 className="titleText">Full Stack Software Engineer</h3>
                <div className="flex flex-col justify-center items-center mt-2.5">
                  <p>karenhickey1010@gmail.com</p>
                  <Footer />
                  <button
                    className="rounded-md"
                    onClick={() => setShowPdfModal(true)}
                  >
                      <strong>Download Resume</strong>
                  </button>
                  {showPdfModal && (
                    <Modal isOpen={showPdfModal} onClose={() => setShowPdfModal(false)}>
                      <div className="p-3">
                        <h2 className="text-center subtitleText mb-4">Print or Download Resume</h2>
                        <div className="h-[400px] flex flex-column">
                          <div className="h-[350px] overflow-y-auto rounded-sm mt-3">
                            <img 
                              src="/resume-screenshot.png"
                              className="w-full rounded-sm"
                            >
                            </img>
                          </div>
                        </div>
                          <div className="flex justify-center gap-28 w-full">
                            <button 
                              className="resumeButton neonText text-xl"
                              onClick={() => {
                                const pdfUrl = '/Karen_Hickey_Resume.pdf';
                                window.open(pdfUrl, "_blank");
                              }} 
                            >
                              PRINT
                            </button>
                            <button 
                              className="resumeButton neonText text-xl"
                              onClick={() => {
                                const pdfUrl = '/Karen_Hickey_Resume.pdf';
                                const link = document.createElement("a");
                                link.href = pdfUrl;
                                link.download = 'Karen_Hickey_Resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              SA<span className="neonFaultyV">V</span>E
                            </button>
                          </div>
                      </div>
                    </Modal>
                  )}
                </div>
                <p className="text-justify mt-3">An inventive problem-solver at heart, I have always been driven by a passion for creativity and the art of design. Growing up immersed in video games, I was captivated not only by the stories, but by the artistry and mechanics that brought them to life - sparking my curiosity for programming. Through an intensive bootcamp, I uncovered a love for crafting intuitive and visually compelling web applications, blending technical precision with artistic vision. My ability to think creatively allows me to transform abstract ideas into seamless digital experiences that engage, inspire, and leave a lasting impact.</p>
                <p className="text-justify mt-3">Having grown up an Army brat, I learned adaptability and the benefit of connecting with others. Creativity has always been a big part of my life—whether through writing, music, art, or intricate crafts. I also understand the value of self-discipline and thrived in teamwork and performance as a former equestrian, gymnast, cheerleader, and musician.</p>
                <p className="text-justify mt-3">My professional career began with an Associate&apos;s Degree in Business Administration, leading to a role as a Financial Controller, but I was always searching for something that truly inspired me. In finally taking that intimidating leap of faith into Programming, I found a craft that blends logic, creativity, and problem-solving in a way that felt natural and fun! Outside of tech, I have a profound love for animals and take the greatest joy in bringing smiles to others, whether through my work or personal passions.</p>              
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
                <h2 className="neonText headerText">SKILLS</h2>
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
                    <p>PostgreSQL • SQLite3 • SQLAlchemy • Sequelize</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">State Management & Cloud</h3>
                    <p>React Redux • Redux Toolkit • AWS S3</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Authentication & Security</h3>
                    <p>JWT • BCrypt • Auth.js • CORS</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="subtitleText">Tools</h3>
                    <p>GitHub • VSCode • Postman • Insomnia</p>
                  </div>
                </div>
                <h2 className="neonText headerText mt-5">TECHNICAL BULLETS</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Developed scalable APIs with efficient RESTful routing in Express.js and Flask, utilizing middleware for authentication, validation, error handling, and logging to ensure robust and maintainable endpoints.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Managed complex application state using React Redux, implementing actions, reducers, and a centralized store to ensure predictable state updates and seamless component communication.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Created and managed relational databases with SQLite3, using Sequelize as an ORM to define models, handle migrations, and perform complex queries with ease and efficiency.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Utilized advanced CSS techniques, including flexbox, grid, and media queries to design and implement fully responsive and visually dynamic pages and modals across various devices.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Streamlined state management with Redux Toolkit, leveraging its simplified syntax for creating slices, reducers, and asynchronous logic, resulting in cleaner code and improved developer productivity.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Implemented custom secure authentication using BCrypt for password hashing and Auth.js for session management, ensuring robust protection against unauthorized access and data breaches.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Designed and built visually immersive user interfaces with Next.js, integrating 3D animations and glowing effects using Tailwind CSS to create dynamic and engaging user experiences.</p>
                  </div>
                  <div className="flex gap-3 text-justify">
                    <span className="text-xl neonText">•</span><p>Configured AWS S3 buckets to manage image file uploads, utilizing controlled permissions, access policies, versioning, and optimized storage settings for secure and scalable file handling.</p>
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