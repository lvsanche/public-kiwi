import React from 'react';
import {withRouter} from 'react-router-dom';
import * as routes from '../../../constants/routes';

const CancelButton = ({history, handleCancel}) => {
    const cncl = (event) => {
        event.preventDefault();
        handleCancel();
        history.push(routes.DASHBOARD);
    };
    return <button onClick={event => cncl(event)}>Cancel</button>
}

export default withRouter(CancelButton);