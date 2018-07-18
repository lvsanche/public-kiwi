import React, {Component} from 'react';
import './Dropdown.css';


class DropDown extends Component {
    constructor (props) {
        super(props);
        this.state = { 'display': 'none' };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        (this.state.display === 'none') ?
            this.setState({display: 'block'})
            : this.setState({display: 'none'});
    }

    render() {
        const { buttonText, menuItems } = this.props;

        return(
            <div className="dropdown-container">
                <button 
                    className="dropdown-toggle"
                    onClick={this.toggleDropdown}>
                    {buttonText}
                </button>

                <ul className="dropdown-menu" style={{display: this.state.display}}>
                    {menuItems.map( item => <DropDownItem {...item} />)}
                </ul>
            </div>
        )
    }
}

const DropDownItem = ({itemText, value}) => 
    <li data-value={value} onClick={event => console.log(event.target.data)}>{itemText}</li>

export default DropDown;