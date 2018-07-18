import React, {Component} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');
// const alphabetLabels = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//   'M', 'N', 'ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'
// ];
const INITIAL_STATE = {
  letters: {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    ñ: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  },
  modalIsOpen: false
};

class LetterCounter extends Component {
  constructor (props) {
    super(props);
    if ( typeof props.grades === 'undefined' ){
      this.state = { ...INITIAL_STATE }
    }
    else{
      this.state = { 'letters': props.grades }
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal(event){
    console.log(event.target);
    event.target.setAttribute('style', 'background-color: gray;');
    
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleModalChange( letter, value ) {
    const newUpdatedLetters = Object.assign({}, this.state.letters, {
      [letter]:JSON.parse(value)
    });

    this.setState({
      'letters': newUpdatedLetters
    });

  }

  handleSubmit (event){
    const { onModalSubmit, studentID, grades} = this.props;
    event.preventDefault();

    if ( typeof grades === 'undefined' ){
      onModalSubmit(this.state.letters, studentID);
    }
    else{
      onModalSubmit(this.state.letters);
    }

    this.setState({ modalIsOpen: false});
  }

  render(){
    const {studentName} = this.props;
    return(
      <div>
        <button className="gunmetalColor" onClick={this.openModal}>Enter Letters</button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="modal"
            contentLabel="Example Modal"
          >
          <h2 ref={subtitle => this.subtitle = subtitle}>Letters</h2>

          <h4>{studentName}</h4>
          <div>

            { Object.keys(this.state.letters).map( key => <SingleLetter key={key} letter={key} value={this.state.letters[key]} onChange={this.handleModalChange} />) }
            <button onClick={this.handleSubmit}>Save Grade</button>
            <button onClick={this.closeModal}>Close</button>
          {/* </form> */}
          </div>
        </Modal>
      </div>
    )
  }

}

const SingleLetter = ({letter, value, onChange}) => (
  <span className="letterValues">
    <label>{letter}</label>
    <div >
      <input type="radio" onChange={event => onChange(letter, event.target.value)} name={"letterRecognition"+letter} value={true} checked={value===true}/><label>Knows</label>
      <input type="radio" onChange={event => onChange(letter, event.target.value)} name={"letterRecognition"+letter} value={false} checked={value===false}/><label>Does NOT</label>
    </div>
    <br />
  </span>
)

export default LetterCounter;
