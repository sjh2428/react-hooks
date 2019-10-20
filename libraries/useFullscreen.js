import React, { useState, useEffect, useRef } from 'react';

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }
      // ...
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    // if (document.exitFullscreen) document.exitFullscreen();
    // else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    // ...
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

// const App = () => {
//   const onFullS = (isFull) => {
//     console.log(isFull ? 'We are full' : 'We are small');
//   };
//   const { element, triggerFull, exitFull } = useFullscreen(onFullS);
//   return (
//     <div className="App" style={{height: '1000vh'}}>
//       <div ref={element}>
//         <img src="http://akns-images.eonline.com/eol_images" alt=""/>
//         <button onClick={exitFull}>Exit fullscreen</button>
//         <button onClick={triggerFull}>Make fullscreen</button>
//       </div>
//     </div>
//   );
// };