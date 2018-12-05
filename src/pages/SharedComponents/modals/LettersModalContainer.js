import React, {Component } from 'react';
import LettersModal from './LettersModal';

const INITIAL_STATE = {
    letters: [ 
        false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false,
        false, false
    ],
    display: 'none',
    buttonColor: '#40798C'
  };

class LetterCounter extends Component {
    constructor(props){
        super(props);
        
        if ( typeof props.grades === 'undefined' ){
            this.state = { ...INITIAL_STATE }
        }
        else{
            var newState = { ...INITIAL_STATE, letters: props.grades} 
            this.state = { ...newState  }
        }

        this.handleModalChange = this.handleModalChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLetterToggle = this.handleLetterToggle.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    toggleModal(){
        var display = (this.state.display === 'none')
                        ? 'block'
                        : 'none';
        this.setState({display: display, buttonColor: '#ccc'});
        //Will add event listener for keyboard input
        if( display === 'block'){
            window.addEventListener('keydown', this.handleKeyPress);
        }
        else {
            window.removeEventListener('keydown', this.handleKeyPress);
        }
        
    }

    /**
     * Summary. Will take the keydown event and toggle the modal's 
     * letter
     * @param {event} event It is a keyboard event we are listening for
     */
    handleKeyPress(event){
        //means we toggle the letter and we get the index from key code
        //index must account for the ene index
        var letterIndex = event.keyCode;
        if( letterIndex <= 90 && letterIndex >= 65){
            if ( letterIndex > 78){
                //must increment amount for ene
                letterIndex+=1;
            }
            letterIndex-=65;
            this.handleModalChange(letterIndex);
        }
    }

    handleModalChange( letterIndex ) {
        const { letters } = this.state;
        var newLets = letters.slice();
        newLets[letterIndex] = !newLets[letterIndex];
        this.setState({
          letters: newLets
        });
    }

    handleLetterToggle() {
        const { letters } = this.state;
        var toggled = letters.map( letter => !letter)
        this.setState({
            letters: toggled
        });
    }

    handleSubmit(){
        const { onModalSubmit, studentID, grades} = this.props;
        const { letters } = this.state;
        if ( typeof grades === 'undefined' ){
            onModalSubmit(letters, studentID);
        }
        else{
            onModalSubmit(letters);
        }

        this.toggleModal();
    }

    render(){
        const { studentName } = this.props;
        const { letters, display, buttonColor} = this.state;
        return (
            <div>
                <LettersModal
                    display={display}
                    studentName={studentName}
                    letters={letters}
                    handleLetterToggle={this.handleLetterToggle}
                    handleChange={this.handleModalChange}
                    handleSubmit={this.handleSubmit}
                    toggleModal={this.toggleModal}
                    buttonColor={buttonColor}
                />
            </div>
            
        )
    }
}


export default LetterCounter;