import React, { useState, useEffect } from 'react';

export const useTitle = (initialTitle) => {
  const [ title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); // title이 바뀔 때만 updateTitle이 발동
  // 처음에만 실행되고 그 이후로 실행되게 하고 싶지 않으면 빈 배열을 넣으면 됨
  // 값이 바뀔때마다 실행되게 하고 싶으면 2번째 인자에 아무것도 안넣어주면 됨
  return setTitle;
};

// const App = () => {
//   const titleUpdater = useTitle('Loading...');
//   setTimeout(() => titleUpdater('Home'), 5000);
//   return (
//     <div className="App">
//       <div>Hi</div>
//     </div>
//   );
// };