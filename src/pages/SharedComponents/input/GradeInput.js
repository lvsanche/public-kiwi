import React from 'react';
//onChange must only take an event as input, will be bound to container to update state

export const CriteriaCategoryInput = ( { onChange, buttonName, value }) => 
    <div className="multi-button">
        <button 
            type="button"
            name={buttonName}
            value="+"
            onClick= {onChange}
            style={(value === '+' ) ? {'backgroundColor':'green' } : {'backgroundColor': 'gray'} }
            >
        Applying</button>
        <button 
            type="button"
            name={buttonName}
            value="~"
            onClick= {onChange}
            style={(value === '~' ) ? {'backgroundColor':'yellow', 'color': 'black' } : {'backgroundColor': 'gray'} }
            >
        Sometimes</button>
        <button 
            type="button"
            name={buttonName}
            value="-"
            onClick= {onChange}
            style={(value === '-' ) ? {'backgroundColor':'red' } : {'backgroundColor': 'gray'} }
            >
        Never</button>
    </div>


// export const CriteriaCategoryInput = ( { onChange, radioName, value} ) => 
//     <div className="radio-inputs categoryTable">
//         <div className="radio-button-container">
//             <input type="radio"
//             onChange={onChange}
//             id={radioName+'+'}
//             name={radioName+'CAT'}
//             value={'+'}
//             checked={value==='+'}/>
//             <label htmlFor={radioName+'+'}>Applying</label>
//         </div>
//         <div className="radio-button-container">
//             <input 
//                 type="radio"
//                 onChange={onChange}
//                 id={radioName+'~'}
//                 name={radioName+'CAT'}
//                 value={'~'}
//                 checked={value==='~'}/>
//             <label htmlFor={radioName+'~'}>Sometimes</label>
//         </div>
//         <div className="radio-button-container">
//             <input type="radio" 
//                 onChange={onChange}
//                 id={radioName+"-"}
//                 name={radioName+'CAT'}
//                 value={'-'}
//                 checked={value==='-'}/>
//             <label htmlFor={radioName+'-'}>Never</label>
//         </div>
//     </div>

export const CriteriaNumberInput = ({onChange, maxGrade, value}) =>
    <div>
        <input value={value} type="text" onChange={onChange}/> /{maxGrade}
    </div>