"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let textIndex = 0;
    let morphProgress = 0;
    let isHolding = true;
    let holdTimer = 0;
    let animationId: number;
    let lastTime = performance.now();
    // Track which element is currently "active" (visible)
    let activeIsFirst = true;

    // Initialize text
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[0];
      text2Ref.current.textContent = texts[1 % texts.length];
      text1Ref.current.style.opacity = "100%";
      text1Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "0%";
      text2Ref.current.style.filter = "blur(8px)";
    }

    const setMorph = (progress: number) => {
      if (text1Ref.current && text2Ref.current) {
        // Smooth easing function
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        // Calculate blur and opacity
        const outBlur = Math.min(eased * 12, 12);
        const outOpacity = Math.max(1 - eased * 1.5, 0);
        const inBlur = Math.max(12 - eased * 12, 0);
        const inOpacity = Math.min(eased * 1.5, 1);

        if (activeIsFirst) {
          // text1 is going out, text2 is coming in
          text1Ref.current.style.filter = `blur(${outBlur}px)`;
          text1Ref.current.style.opacity = `${outOpacity * 100}%`;
          text2Ref.current.style.filter = `blur(${inBlur}px)`;
          text2Ref.current.style.opacity = `${inOpacity * 100}%`;
        } else {
          // text2 is going out, text1 is coming in
          text2Ref.current.style.filter = `blur(${outBlur}px)`;
          text2Ref.current.style.opacity = `${outOpacity * 100}%`;
          text1Ref.current.style.filter = `blur(${inBlur}px)`;
          text1Ref.current.style.opacity = `${inOpacity * 100}%`;
        }
      }
    };

    function animate(currentTime: number) {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isHolding) {
        holdTimer += dt;
        if (holdTimer >= cooldownTime) {
          isHolding = false;
          holdTimer = 0;
          morphProgress = 0;

          // Prepare the next text on the hidden element
          textIndex = (textIndex + 1) % texts.length;
          const nextTextIndex = (textIndex + 1) % texts.length;

          if (text1Ref.current && text2Ref.current) {
            if (activeIsFirst) {
              // text1 is visible, prepare text2 with next word
              text2Ref.current.textContent = texts[textIndex];
            } else {
              // text2 is visible, prepare text1 with next word
              text1Ref.current.textContent = texts[textIndex];
            }
          }
        }
      } else {
        morphProgress += dt / morphTime;

        if (morphProgress >= 1) {
          morphProgress = 0;
          isHolding = true;

          // Swap which element is active
          activeIsFirst = !activeIsFirst;

          // Finalize the transition
          if (text1Ref.current && text2Ref.current) {
            if (activeIsFirst) {
              text1Ref.current.style.opacity = "100%";
              text1Ref.current.style.filter = "";
              text2Ref.current.style.opacity = "0%";
              text2Ref.current.style.filter = "blur(8px)";
            } else {
              text2Ref.current.style.opacity = "100%";
              text2Ref.current.style.filter = "";
              text1Ref.current.style.opacity = "0%";
              text1Ref.current.style.filter = "blur(8px)";
            }
          }
        } else {
          setMorph(morphProgress);
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
