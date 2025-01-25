"use client"
import Image from "next/image";
import React, { useState } from "react";
import Modal from '../components/Modal'
import Footer from "@/components/Footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mid-h-screen">
      <div className="flex flex-col justify-start items-center w-[900px] h-[800px] neonBorder mt-40 rounded-md">
      
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.jpg')",
            perspective: "1000px"
          }}
        >
          <h1
            className="absolute text-white text-[55px] font-bold"
            style={{
              top: "13%",
              left: "7%",
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
              <h2 className="text-white">Hiiiii agaaainnnn</h2>
            </Modal>
          )}
          <div>
            <img
              src="/cat.gif"
              alt="Cat Gif"
              className="w-[45px] h-[45px] absolute"
              style={{
                top: "440px",
                left: "410px",
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
              top: "33%",
              left: "30%",
              transform: "rotateX(3deg) rotateY(78deg)",
            }}
          >
            Open
          </p>
          {showAboutModal && (
            <Modal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)}>
              <div className="aboutMeDiv flex flex-col justify-center items-center">
                <img src="/prof-pic1.png" className="w-[200px] mb-3"></img>
                <h2 className="neonText fnameText">KAREN HICKEY</h2>
                <h3 className="titleText">Full Stack Software Engineer</h3>
                <div>
                  <p>karenhickey1010@gmail.com</p>
                  <Footer />
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}