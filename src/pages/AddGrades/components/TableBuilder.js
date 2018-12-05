import React from 'react';
import CriteriaBody from './CriteriaTableBody';
import CountBody from './CountingTableBody';
import LetterBody from './LetterTableBody';

const TableBody = ({standard, ...other}) => {
    if( standard.gradeType === 'criteria'){
        return <CriteriaBody {...other} />
    }
    else if ( standard.gradeType === 'counting' ){
        return <CountBody {...other} />
    }
    else if ( standard.gradeType === 'letterCounting'){
        return <LetterBody {...other} />
    }
    else{
        return (<h1> ERROR HAS OCCURED WITH THE GRADING TYPE </h1>)
    }
}


export default TableBody;