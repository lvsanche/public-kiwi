import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudentPopUp.css';
import * as routes from '../../../../constants/routes';

class StudentTile extends React.Component {
    constructor(props){
        super(props);
        this.state = { display: 'none'};

        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHoverLeave = this.handleMouseHoverLeave.bind(this);
        this.handleClosingPopUp = this.handleClosingPopUp.bind(this);
    }

    handleMouseHover() {
        this.setState({display: 'flex'});
    }
    handleMouseHoverLeave(){
        this.setState({display: 'none'});
    }

    handleClosingPopUp () {
        this.setState({display: 'none'});
        console.log("CLICKED");
        this.props.closePopUp;
    }

    render() {
        const { firstName, lastName, id, closePopUp, rand} = this.props;
        const { display } = this.state;
        return (
            <div className="studentTile"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHoverLeave}>
                    <p>{firstName + ' ' + lastName}</p>
                    <div className="tileButtonContainer" 
                        style={{display: display}}
                        >
                        {/* have also tried calling this.handleClosingPopUp */}
                        <p onClick={closePopUp}>CLOSE</p>
                        {/* this works, something gets printed in console */}
                        <p onClick={rand}>RAND</p>
                    </div> 
            </div>
        )
    }
}


export default StudentTile;