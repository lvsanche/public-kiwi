import React from 'react';

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
                        Object.keys(letters).map( 
                            letter => <SingleLetter key={letter} 
                                        student={studentName}
                                        letter={letter} 
                                        value={letters[letter]}
                                        handleChange={handleChange} />) 
                    }
                </div>
                <div className="button-container">
                    <button onClick={handleSubmit}>Save Grade</button>
                    <button onClick={toggleModal}>Close</button>
                </div>
                
            </div>
        </div>
    </div>
    
   

const SingleLetter = ({letter, value, handleChange, student}) => 
    <div className='letter-items'>
        <label htmlFor={student+"letterRecognition"+letter}>{letter}</label>
        <input type="radio"
            onClick={event => handleChange(letter, event.target.value)}
            name={student+"letterRecognition"+letter}
            id={student+"letterRecognition"+letter}
            value={value} checked={value===true}/>
    </div>

export default LettersModal;