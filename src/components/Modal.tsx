"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type ModalProps = {
  children: React.ReactNode;
  onRequestClose: () => void;
};

const Modal = ({ children, onRequestClose }: ModalProps) => {
  // Prevent background scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onRequestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRequestClose]);

  // Handle background clicks
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if the click is directly on the backdrop (not inside modal)
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <div className="relative bg-white p-8 rounded-2xl shadow-lg w-full container overflow-scroll max-h-[80vh]">
        <button
          onClick={onRequestClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          aria-label="Close modal"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
