"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Background images
  const images = [
    "/assets/Images/1.jpg",
    "/assets/Images/2.jpg",
    "/assets/Images/3.jpg",
    "/assets/Images/4.jpg",
    "/assets/Images/5.jpg",
    "/assets/Images/6.jpg",
    "/assets/Images/7.jpg",
    "/assets/Images/8.png",
  ];

  // ✅ Preload images when the component mounts
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedCount((prev) => prev + 1);
      img.onerror = () => console.error(`Failed to load: ${src}`);
    });
  }, []);

  // ✅ Start background image slideshow
  useEffect(() => {
    let interval;
    const duration = 5000; // 5 seconds per image
    const step = (100 / duration) * 100;

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0; // Reset progress
        }
        return prev + step;
      });

      interval = setTimeout(updateProgress, 100);
    };

    interval = setTimeout(updateProgress, 100);

    return () => clearTimeout(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative h-[100vh] w-[100vw] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-[20px] brightness-100"></div>

      {/* Centered Logo */}
      <div className="absolute inset-0 top-0 flex items-center justify-center">
        <img
          src="/assets/Decoris P.svg"
          alt="logo"
          className="w-[293.49px]  h-[40px]"
        />
      </div>

      <div className="absolute bottom-0 right-0 p-[30px] 3xl:p-[50px]">
        <img
          src="/assets/Powered by Dominus P.svg"
          alt="logo"
          className="w-[122.31px] h-[30px]"
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center text-black py-[30px] 3xl:py-[50px] text-[8px] 3xl:text-[11px] tracking-[3px]">
        © COPYRIGHT 2025 DECORIS LIMITED. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
}
