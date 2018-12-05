import React from 'react'
import * as routes from '../../../constants/routes';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';
import withRouter from '../../../../node_modules/react-router-dom/withRouter';

class LandingPage extends React.Component {
    componentWillMount() {
        const { authUser, history}  = this.props;

        if ( authUser ){
            history.push('/dashboard');
        }
    }

    render() {
        return (
            <div className="fullWidth">
                <div className="hero-img">
                    <div className="hero-text">
                        Teach with love<br />
                        Managing students progress, simplified. 
                    </div>
                    <div className="landingPage-links flex-container">
                            <NavLink className="btn-like white-btn" to={routes.SIGN_IN}>Sign In</NavLink>
                            <NavLink className="btn-like white-btn" to={routes.SIGN_UP}>Sign Up</NavLink>
                        </div>
                </div>
                <section className="home-features">
                    <h2>Ease of use</h2>
                    <h3>First Goal</h3>
                    <div className="cols-two">
                        <p>The first thing that was considered was inputting grades, it had to be intuitive and quick</p>
                        <div className="captioned-image">
                            <img src="/images/letter_input.png" alt="Grade input for letter grades"/>
                            <p>Here, the teacher is entering which letters their students recognize. The keyboard speeds up the process.</p>
                        </div>
                    </div>
                </section>
                <section className="home-features">
                    <h2>Tracking Grades</h2>
                    <p>Learning letters is important, and knowing which letters are giving students trouble is invaluable</p>
                    <div className="captioned-image">
                        <img src="/images/letter_graph.png" alt="Whole classes' letter test scores graphed"/>
                        <p>High level view of how many students know each letter for 3 different grading standards</p>
                    </div>
                    
                    <p>Literacy is not the only metric worth tracking, developing and monitoring social and fine motor skills is also crucial.</p>
                    <div className="captioned-image">
                        <img src="/images/category_graph.png" alt="Whole classes' social and motor skills are graphed"/>
                        <p>Several standards fall under the 'Applying, Sometimes & Not yet' grading scale. Here those numbers are made easy to digest.</p>
                    </div>
                </section>
                <section className="home-features">
                    <h2>Individual Progress</h2>
                    <div className="cols-two">
                        <p>The goal is to help teachers help students. A teacher can see trends of a student's assessments over time.</p>
                        <div className="captioned-image">
                            <img src="/images/counting_overtime.png" alt="Individual students counting knowledge graphed over time"/>
                            <p>Counting is another important standard, we see how their number recognition has improved over time</p>
                        </div>
                    </div>
                    <div className="cols-two">
                        <div className="captioned-image">
                            <img src="/images/counting_grade_selected.png" alt="Individual students counting knowledge on a specific assessment date"/>
                            <p>Teacher can take a closer look at the student's grade, by selecting the date of assessment for the standard.</p>
                        </div>
                        <p>Teacher must be able to quickly extract information on the latests assessments or past ones, whether it is counting or other skill</p>
                    </div>
                    
                </section>
                <div className="home-footer">
                    <div className="home-feature flex-container-cols">
                        <a href="https://luissanchez.us">Personal Website</a>
                        <a href="https://github.com/lvsanche"><i className="fab fa-github-square"></i> github.com/lvsanche/public-kiwi</a>
                        <a href="https://linkedin.com/in/lvsanche"><i className="fab fa-linkedin-in"></i> linkedin.com/in/lvsanche</a>
                        <a href="mailto:luissanchez.1293@gmail.com"><i class="fas fa-envelope"></i> Email</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.session.authUser
    }
}

export default withRouter( connect(mapStateToProps)(LandingPage) );