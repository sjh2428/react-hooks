import React, { useState, useEffect } from 'react';

export const useNetwork = onChange => {
  const [ status, setStatus ] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    }
  }, []);
  return status;
};

// const App = () => {
//   const handleNetworkChange = (online) => {
//     console.log(online ? 'We just went online' : 'We are offline');
//   };
//   const online = useNetwork(handleNetworkChange);
//   return (
//     <div className="App">
//       <h1>{online ? 'Online' : 'Offline'}</h1>
//     </div>
//   );
// };