import React, { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  if (typeof onClick !== 'function') return;
  const element = useRef();
  useEffect(() => {
    if (element.current) { // componentDidMount, componentDidUpdate
      element.current.addEventListener('click', onClick);
    }
    return () => { // componentWillUnmount
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    }
  }, []);
  return element;
};

// const App = () => {
//   const sayHello = () => console.log('say hello');
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };