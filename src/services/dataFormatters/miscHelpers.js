
export const compareAlphaAscendingStandardNames = (a,b) => {
  const nameA = a.standardName;
  const nameB = b.standardName;
  if ( nameA < nameB){
    return -1
  }
  else if ( nameA > nameB){
    return 1;
  }
  else{
    return 0;
  }
};

export const compareAlphaDescendingStandardNames = (a,b) => {
  const nameA = a.standardName;
  const nameB = b.standardName;
  if ( nameA < nameB){
    return 1
  }
  else if ( nameA > nameB){
    return -1;
  }
  else{
    return 0;
  }
};

// compares them by date
// orders in ascending
export const compareDateAscendingAssessments = ( a, b ) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if ( dateA.getTime() < dateB.getTime() ){
    return -1;
  }
  else if ( dateA.getTime() > dateB.getTime() ){
    return 1;
  }
  else{
    return 0;
  }
};

//sorts assessments by date of decreasing time
export const compareDateDescendingAssessments = ( a, b ) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if ( dateA.getTime() < dateB.getTime() ){
    return 1;
  }
  else if ( dateA.getTime() > dateB.getTime() ){
    return -1;
  }
  else{
    return 0;
  }
};


export const getAssessmentArrayByStandard = (assessments, standardID) => {
  const assessmentsArray = Object.keys(assessments).map( asID => assessments[asID]);

  return assessmentsArray.filter(
    assessment => assessment.standardID === standardID)
    .sort(compareDateAscendingAssessments);
}


export const convertObjToArray = (obj) => {
  if(obj === null || obj === undefined){
    return []
  }
  
  return Object.keys(obj).map(key => obj[key]);
}
  

export const addStandardNameToAssessments = ( assessmentsArray, standards) => {
  var newAssessmentsWithStandard = assessmentsArray.slice();
  return newAssessmentsWithStandard.map( assessment => {
    assessment['standardName'] = standards[assessment.standardID].standardName;
    return assessment;
  })
}

export const convertCriteriaGradeToNumber = ( maxGrade, grade ) =>{
  if ( maxGrade === '+'){
      //graph 0, 1, 2 
      switch ( grade ){
          case '+':
              return 2;
          case '~':
              return 1;
          case '-':
              return 0;
          default:
              return 0;
      }
  }
  else {
      var percent = grade / maxGrade;
      if( percent > .8){
          return 2;
      }
      else if ( percent > .25 ){
          return 1;
      }
      else {
          return 0;
      }
  }
};


export const flattenAssessmentsStructure = ( assessments ) => {
  // console.log(objArray);
	var arrayOfStds = convertObjToArray(assessments);
	var filteredArray = arrayOfStds.filter( obj => Object.keys(obj).length > 0 );
	// console.log(filteredArray); //array of objects
  
  var allAssessments = [];
  
	filteredArray.forEach( obj => {
		const arr = convertObjToArray(obj);
		arr.forEach( assess => allAssessments.push(assess));
  });
  
	return allAssessments;
};