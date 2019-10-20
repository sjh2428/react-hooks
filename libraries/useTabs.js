import React, { useState } from 'react';

// const content = [
//   {
//     tab: 'section 1',
//     content: 'I am the content of the Section 1'
//   }, {
//     tab: 'section 2',
//     content: 'I am the content of the Section 2'
//   }
// ];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [ currentIndex, setCurrentIndex ] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

// const App = () => {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div className="App">
//       {content.map((section, idx) => (
//         <button onClick={() => changeItem(idx)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// };