import React from 'react';
import StandardItem from '../SharedComponents/listItems/StandardItem';
import { connect } from 'react-redux';
import { editStandard } from '../../services/actions/standards';
import { compose } from 'recompose';
import withAuthorization from '../SharedComponents/auth/withAuthorization';

const StandardList = ({standards, onStandardClick}) => (
  <div className="table-container card">
    <div className="card-title">
      <h2>Standards</h2>
    </div>
    <div className="card-content container">
      <table className="default-table">
        <thead>
          <tr>
            <th>Standard</th>
            <th>Standard Type</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(standards).map( key => ( <StandardItem key={key} onStandardClick={onStandardClick} {...standards[key]} />))
          }
        </tbody>
      </table>
    </div>
    
  </div>
);

const mapStateToProps = (state) => ({
  standards: state.standards,
  authUser: state.session.authUser
});

const mapDispatchToProps = (dispatch) => ({
  onStandardClick() {dispatch(editStandard)}
})

const authCondition = (authUser) => !!authUser;

// const AssignmentListContainer = connect(mapStateToProps, mapDispatchToProps)(AssignmentList);

const StandardListContainer = compose (withAuthorization(authCondition),connect(mapStateToProps, mapDispatchToProps))(StandardList);


export default StandardListContainer;
