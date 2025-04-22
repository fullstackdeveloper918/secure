import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const TEXTS = [
  'Brewing some cool things',
  'Hang tight, magic is happening',
  'Loading your adventure',
  'Loading ... ',
];

const PreLoader = () => {
  const [index, setIndex] = React.useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

  const [text] = useTypewriter({
    words: [TEXTS[index]],
    loop: false,
    delaySpeed: 1000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    const timeoutId = setTimeout(() => {
      setIsLoadingComplete(true);
    }, 8000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`pre-load-main ${isLoadingComplete ? 'slide-up' : ''}`}>
      <h1>{text}</h1>
    </div>
  );
};

export default PreLoader;
