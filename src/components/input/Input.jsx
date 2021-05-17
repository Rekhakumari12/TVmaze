import React from 'react';
import './input.css';
const Input=({getSearchInput,cat}) => {
  return (
    <div className="input-group">
      <input type="text" className="input_field custom_style"
        placeholder={`${cat === "people" ? "eg: Denial Redcliffe" : "eg: Friends"}...`} onKeyUp={getSearchInput} />
    </div>
  )
}
export default Input;