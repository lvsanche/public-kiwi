import React from 'react';
import WholeClassLetterBarGraph from './graphs/WholeClassLetterBarGraph';
import WholeClassCriteriaGraph from './graphs/WholeClassCriteriaGraph';

export const Dashboard = ({ classID, ...other}) => {
    if(classID === null){
<<<<<<< HEAD
        return( <div className="card card-45">
=======
        return( <div className="card card-30">
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
                    <div className="card-title">
                        <h2>Next Step</h2>
                    </div>
                    <div className="card-content">
                        <h1> Get started with 'Add New Class' </h1>
                    </div>
                </div>)
    }
    else{
        return(<div className="dashboard-container flex-container-cols">
                    <div className="graph-container">
                        <WholeClassLetterBarGraph 
                            {...other}
                            />
                    </div>
                    <div className="graph-container">
                        <WholeClassCriteriaGraph 
                            {...other}
                            />
                    </div>
                   
                </div>)
    }
}
 