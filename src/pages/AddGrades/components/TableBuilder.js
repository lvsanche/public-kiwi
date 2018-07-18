import React from 'react';
import CriteriaBody from './CriteriaTableBody';
import CountBody from './CountingTableBody';
import LetterBody from './LetterTableBody';

const TableBody = ({assessment, ...other}) => {
    if( assessment.gradingType === 'criteria'){
        return <CriteriaBody assessment={assessment} {...other} />
    }
    else if ( assessment.gradingType === 'counting' ){
        return <CountBody {...other} />
    }
    else if ( assessment.gradingType === 'letterCounting'){
        return <LetterBody {...other} />
    }
    else{
        return (<h1> ERROR HAS OCCURED WITH THE GRADING TYPE </h1>)
    }
}


export default TableBody;