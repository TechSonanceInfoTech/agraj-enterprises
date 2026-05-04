"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG } from "@/config";

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="py-12 md:py-16"
      style={{ background: CONFIG.colors.primaryMid }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CONFIG.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center text-white ${
                isVisible ? "counter-animate" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center bg-white/15">
                <i className={`${stat.icon} text-xl`} aria-hidden="true"></i>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">
                {isVisible ? <AnimatedNumber value={stat.value} /> : "0"}
              </div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const numericPart = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d]/g, "");

  useEffect(() => {
    if (numericPart === 0) {
      const timer = setTimeout(() => {
        setDisplay("0");
      }, 0);
      return () => clearTimeout(timer);
    }

    let current = 0;
    const duration = 1500;
    const steps = 40;
    const increment = numericPart / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        current = numericPart;
        clearInterval(timer);
      }
      setDisplay(Math.round(current).toString());
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [numericPart]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
