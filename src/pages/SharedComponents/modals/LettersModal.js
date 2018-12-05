import React from 'react';
import { letterIndexToChar } from '../../../services/dataFormatters/miscHelpers';

const LettersModal = ({ studentName, letters, display, handleLetterToggle, handleChange, handleSubmit, toggleModal, buttonColor}) => 
    <div>
        <div className="button-container"><button onClick={toggleModal} style={{'backgroundColor': buttonColor}} >Enter Grades</button></div>
        <div className='modal-container' style={{display: display}}>
            <div className="modal-content">
                <div className="card-title"><h2>{studentName}</h2></div>
                <div className="button-container">
                    <button className="small-button" onClick={handleLetterToggle}>Toggle Letters</button>
                </div>
                <div className="letter-input-container container">
                    { 
                        letters.map( 
                            (letter, index) => <SingleLetterBtn key={index} 
                                        student={studentName}
                                        letterIndex={index} 
                                        value={letter}
                                        handleChange={handleChange} />) 
                    }
                </div>
                <div>
                    <label>Letters known: {lettersKnown(letters)}/{letters.length}</label>
                </div>
                <div className="button-container">
                    <button onClick={handleSubmit}>Save Grade</button>
                    <button onClick={toggleModal}>Close</button>
                </div>
                
            </div>
        </div>
    </div>

const lettersKnown = (letters) => {
    return letters.filter( l => l).length;
}

const SingleLetterBtn = ({letterIndex, value, handleChange, student}) => 
    <div className="letterButtonContainer">
        <button
            type="button"
            onClick={event => handleChange(letterIndex)}
            id={student+"letterRecognition"+letterIndex}
            value={value}
            className={ (value === true)? 'letterButton pressed' : 'letterButton notPressed' }
        > {letterIndexToChar(letterIndex)}</button>
    </div>

export default LettersModal;