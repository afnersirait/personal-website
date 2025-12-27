"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  highlightText?: string;
  highlightClassName?: string;
}

const TypingAnimation = ({
  text,
  className = "",
  speed = 100,
  delay = 0,
  highlightText = "",
  highlightClassName = "text-primary",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Initial delay before starting
    const delayTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [currentIndex, text, speed, delay]);

  // Split text to highlight specific part
  const renderText = () => {
    if (!highlightText || !displayedText.includes(highlightText)) {
      return displayedText;
    }

    const parts = displayedText.split(highlightText);
    return (
      <>
        {parts[0]}
        {parts.length > 1 && (
          <>
            <span className={highlightClassName}>{highlightText}</span>
            {parts[1]}
          </>
        )}
      </>
    );
  };

  return (
    <span className={className}>
      {renderText()}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

export default TypingAnimation;
