import React, { useEffect, useRef, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  scrambleSpeed?: number;
  characterSet?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  scrambleSpeed = 20,
  characterSet = 'abcdefgh',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number>();
  const frameRef = useRef(0);
  const originalText = useRef(text);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    originalText.current = text;
  }, [text]);

  const scramble = () => {
    const original = originalText.current;
    const scrambled = original
      .split('')
      .map((char, index) =>
        frameRef.current > index * 3
          ? char
          : characterSet[Math.floor(Math.random() * characterSet.length)]
      )
      .join('');

    setDisplayText(scrambled);

    if (frameRef.current < original.length * 3) {
      frameRef.current++;
      intervalRef.current = window.setTimeout(scramble, scrambleSpeed);
    }
  };

  useEffect(() => {
    const startScramble = () => {
      frameRef.current = 0;
      scramble();
    };

    const element = spanRef.current;
    if (element) {
      element.addEventListener('mouseenter', startScramble);
      return () => {
        element.removeEventListener('mouseenter', startScramble);
        if (intervalRef.current) {
          clearTimeout(intervalRef.current);
        }
      };
    }
  }, [text, scrambleSpeed]);

  return (
    <span ref={spanRef} className="inline-block whitespace-nowrap">
      {displayText}
    </span>
  );
};

export default ScrambleText;
