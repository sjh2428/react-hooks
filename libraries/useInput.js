import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { target: { value } } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// const App = () => {
//   const maxLen = (value) => value.length <= 10;
//   const notInclude = v => !v.includes('@');
//   const name = useInput('Mr.', notInclude);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder='Name' {...name} />
//     </div>
//   );
// };