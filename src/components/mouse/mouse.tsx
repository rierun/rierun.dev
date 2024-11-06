"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Mouse() {
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window === undefined) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (mouseRef.current) {
        gsap.to(mouseRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.75,
          ease: "power3.out",
        });
      }
    };

    const handleMouseEnter = () => {
      if (mouseRef.current) {
        gsap.to(mouseRef.current, {
          scale: 0.5,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (mouseRef.current) {
        gsap.to(mouseRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "80px",
        height: "80px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38" stroke="black" />
      </svg>
    </div>
  );
}
