import React, { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) { // 마우스가 위로 갈때만 발생
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

// const App = () => {
//   const begForLife = () => console.log('pls dont leave');
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// };