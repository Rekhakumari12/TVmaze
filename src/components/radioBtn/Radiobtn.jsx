import React from 'react';
import './radioBtn.css';
const Radiobtn = ({getCategory}) => {
  return (
    <div className="btn_wrapper">
      <div className="inner_wrapper">
        <div className="form-check form-check-inline custom_style">
          <input type="radio" name="radiobtn" className="form-check-input" value="people" onClick={getCategory}/>
          <label htmlFor="radiobtn" className="form-check-label h2">Actor</label>
        </div>
        <div className="form-check form-check-inline custom_style">
          <input type="radio" name="radiobtn" className="form-check-input" value="shows" onClick={getCategory}/>
          <label htmlFor="radiobtn" className="form-check-label h2">Shows</label>
        </div>
      </div>      
    </div>
  );
}
export default Radiobtn;