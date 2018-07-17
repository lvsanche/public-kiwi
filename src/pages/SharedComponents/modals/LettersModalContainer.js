import React, {Component } from 'react';
import LettersModal from './LettersModal';

const INITIAL_STATE = {
    letters: {
      a: false, b: false, c: false,d: false,e: false,
      f: false,g: false,h: false,i: false,j: false,
      k: false,l: false,m: false,n: false,ñ: false,
      o: false,p: false,q: false,r: false,s: false,
      t: false,u: false,v: false,w: false,x: false,
      y: false,z: false,
    },
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
    }

    toggleModal(){
        var display = (this.state.display === 'none')
                        ? 'block'
                        : 'none';
        this.setState({display: display, buttonColor: '#ccc'});
    }

    handleModalChange( letter, value) {
        const { letters } = this.state;
        this.setState({
          'letters': {...letters, [letter]: !JSON.parse(value)}
        });
    }
    handleLetterToggle() {
        const { letters } = this.state;
        var toggled = {};
        Object.keys(letters).forEach( letter => toggled[letter] = !letters[letter])
        this.setState({letters: toggled});
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