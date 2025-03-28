"use client";

import Hero from "@/components/Hero";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable text selection
    const handleSelectStart = (event) => event.preventDefault();
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return (
    <div className="bg-white w-screen h-screen overflow-hidden">
      <Hero />
    </div>
  );
}