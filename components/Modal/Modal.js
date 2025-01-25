"use client"

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-#0a0a0a flex items-center justify-center z-50">
            <div 
                className="bg-#0a0a0a neonBorder rounded-lg shadow-lg p-6 w-full max-w-md relative"
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