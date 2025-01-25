"use client"

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-#0a0a0a flex items-center justify-center z-40">
            <div 
                className="bg-#0a0a0a blueNeonBorder rounded-lg shadow-lg p-6 w-full max-w-[640px] relative"
                style={{
                    backgroundColor: "#0a0a0a"
                }}
            >
                <button 
                    className="absolute top-2 right-2 text-white hover:text-pink-300"
                    onClick={onClose}
                >
                        X
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;