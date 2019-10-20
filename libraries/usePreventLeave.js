import React from "react";

export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ''; // 없으면 크롬 종료할 때 멈추지 않음
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);
  return { enablePrevent, disablePrevent };
};

// const App = () => {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>Unprotect</button>
//     </div>
//   );
// };