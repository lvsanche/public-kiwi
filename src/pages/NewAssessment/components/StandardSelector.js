import React from 'react';
import { convertObjToArray, compareAlphaAscendingStandardNames } from '../../../services/dataFormatters/miscHelpers';
import { filterBySubject } from '../../../services/dataFormatters/filterBy';

const StandardSelector = ({handleChange, value, standards }) =>
    <div className="selectorInput">
        <label>Standard assessed</label>
        <select
            value={value}
            onChange={ handleChange }>
            <option value=''></option>
            {
                // convertObjToArray(standards).sort(compareAlphaAscendingStandardNames).map( standard => StandardOption(standard.standardID, standard.standardName) )
                <StandardGroup standards={standards} />
            }
        </select>
    </div>    

const StandardOption = (standardID, standardName) =>
    <option key={standardID} value={standardID}> {standardName} </option>

const StandardGroup = ({standards}) => {
    const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
    const standardsArray = convertObjToArray(standards);
    var standardsObjBySubject = {};

    subjects.forEach( subject => {
        standardsObjBySubject[subject] = filterBySubject(subject, standardsArray);
    });

    return subjects.map( subject => {
        return <optgroup key={subject} label={subject}>
            { standardsObjBySubject[subject].sort(compareAlphaAscendingStandardNames).map( standard => StandardOption(standard.standardID, standard.standardName) ) }
            </optgroup>
    });
};

export default StandardSelector;