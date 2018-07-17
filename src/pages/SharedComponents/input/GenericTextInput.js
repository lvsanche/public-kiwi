import React from 'react';

const GenericTextInput = ({value, handleChange, labelText }) => 
    <div className="textInput">
        <label>{labelText}</label>
        <input
          value={value}
          onChange={event => handleChange(event.target.value) }
          type="text"
        />
    </div>


export default GenericTextInput;