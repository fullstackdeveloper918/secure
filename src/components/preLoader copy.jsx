import React from 'react';

const preLoader = () => {
  return (
    <div className="preloader-wrap" data-centerline="Loading">
      <div id="text-container">
        <div className="word">Brewing some cool things</div>
        <div className="word">Hang tight, magic is happening</div>
        <div className="word">Loading your adventure</div>
      </div>

      {/* <div className="loadbar"></div>
           <div className="percentage-wrapper"><div className="percentage" id="precent"></div></div>
           <div className="percentage-intro">Please wait, content is loading</div> */}
    </div>
  );
};

export default preLoader;
