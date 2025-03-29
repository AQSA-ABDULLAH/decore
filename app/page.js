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

    // Disable image dragging globally
    const handleDragStart = (event) => event.preventDefault();
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <div className="bg-white w-screen h-[80vh] sm:h-[100vh] overflow-hidden">
      <Hero />
    </div>
  );
}
