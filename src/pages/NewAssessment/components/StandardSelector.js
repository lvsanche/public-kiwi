import React from 'react';


const StandardSelector = ({handleChange, value, standards }) =>
    <div className="selectorInput">
        <label>Standard assessed</label>
        <select
            value={value}
            onChange={ handleChange }>
            <option value=''></option>
            {
                Object.keys(standards).map( ( id ) => StandardOption(id, standards[id].standardName) )
            }
        </select>
    </div>    

const StandardOption = (standardID, standardName) =>
    <option key={standardID} value={standardID}> {standardName} </option>

export default StandardSelector;