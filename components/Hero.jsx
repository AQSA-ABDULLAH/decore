"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

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

  useEffect(() => {
    // Preload images
    const preloaded = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    setLoadedImages(preloaded);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-[80vh] sm:h-[100vh] w-[100vw] font-style select-none">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-[20px] brightness-100"></div>

      {/* Centered Logo */}
      <div className="absolute inset-0 top-0 flex items-center justify-center">
        <img
          src="/assets/Decoris P.svg"
          alt="logo"
          className="w-[200px] sm:w-[293.49px] h-[40px]"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full flex flex-col-reverse gap-[20px] sm:flex-row items-center sm:items-end text-base_color text-[5px] sm:text-[7px] 3xl:text-[10px] tracking-[1.5px]">
        {/* Centered text for large screens */}
        <div className="w-full text-center sm:w-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 p-[28px] 3xl:p-[48px]">
          <p>© COPYRIGHT 2025 DECORIS LIMITED. ALL RIGHTS RESERVED.</p>
        </div>

        {/* Image at the right corner */}
        <div className="sm:absolute sm:right-[30px] 3xl:right-[50px] p-[30px] 3xl:p-[50px]">
          <img
            src="/assets/Powered by Dominus P.svg"
            alt="logo"
            className="w-[90px] sm:w-[122.31px] h-[28px]"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}



