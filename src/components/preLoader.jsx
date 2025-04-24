import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TEXTS = [
  'Brewing some cool things',
  'Hang tight, magic is happening',
  'Loading your adventure',
  'Loading ... ',
];

const PreLoader = () => {

  const handleType = (count) => {
    console.log('Typing word index:', count);
  };

  const handleDone = () => {
    console.log('Loop finished!');
  };

  return (
    <div className='pre-load-main'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <Typewriter
            words={TEXTS}
            loop={0}             // Infinite loop
            cursor
            // cursorStyle='_'  
            typeSpeed={70}
            deleteSpeed={10}
            delaySpeed={1000}
            onType={handleType}
            onLoopDone={handleDone}
          />
        </span>
      </h1>
    </div>
  );
};

export default PreLoader;
