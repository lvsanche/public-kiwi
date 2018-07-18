import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebase } from '../../../services/api';
import * as routes from '../../../constants/routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    authUser: state.sessionState.authUser,
    testAUTH: ownProps,
    testState: state,
  });

  return compose(
    withRouter,
    connect(mapStateToProps),
  )(WithAuthorization);
  // return connect (mapStateToProps)(WithAuthorization);
}

export default withAuthorization;
