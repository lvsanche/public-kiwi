
import { convertObjToArray, flattenAssessmentsStructure } from './miscHelpers';

//will be expecting an assessment Object
export const filterAssessments = ( filters, objArray, standards) => {
	// var objArray = convertObjToArray(objArray);
	// var objArray = Object.keys(objArray).map( stdID => objArra
	var allAssessments = flattenAssessmentsStructure(objArray);

	//gradingType first
	// return filterBySearch(filters.searchText, filterBySubject(filters.subject,
	// 	filterByGradeType(filters.gradeType, allAssessments))) ;
	return  filterAssessmentsBySubject(filters.subject, standards, filterBySearch(filters.searchText, filterAssessmentsByGradeType(filters.gradeType, standards, allAssessments) ) );
};

///actual filters go here ////////////////////////////////

//used to filter assessments
export const filterAssessmentsByGradeType = (gradeType, standards, objArray) => {
	var toRet = [];
	if( gradeType === 'all'){
		return objArray;
	}
	else{
		const standardArray = convertObjToArray(standards);
		
		if( gradeType.includes('criteria') ){
			var newFilters = gradeType.split('-');
			
			const standardsToRet = filterByGradeType('criteria', standardArray);
			standardsToRet.forEach( standard => {
				var temp = filterByStandard(standard.standardID, objArray);
				temp.forEach( assessment => toRet.push(assessment));
			});

	
			if( newFilters[1] === 'categories'){
				toRet =  toRet.filter(listItem => listItem.maxGrade === '+');
			}
			else{
				toRet = toRet.filter(listItem => listItem.maxGrade !== '+');
			}
		}
		else {
			const standardsToRet = filterByGradeType(gradeType, standardArray);
			standardsToRet.forEach( standard => {
				var temp = filterByStandard(standard.standardID, objArray);
				temp.forEach( assessment => toRet.push(assessment));
			});
		}
		return toRet;
	}
}

//used to filter standards
export const filterByGradeType = (gradeType, objArray) => {
	return objArray.filter( listItem => listItem.gradeType === gradeType)
}



export const filterBySearch = (searchText, objArray) => {
	if (searchText === ''){
		return objArray;
	}
	else {
		return objArray
				.filter( listItem => 
					listItem.standardName.includes(searchText))
	}
}
export const filterBySubject = (subject, objArray) => {
	if(subject === 'all'){
		return objArray;
	}
	else{
		return objArray.filter( listItem => listItem.subject === subject)
	}
};

export const filterAssessmentsBySubject = (subject, standards, objArray) => {
	if(subject === 'all'){
		return objArray;
	}
	else{
		//first get the standardIDs by subject
		const stdArray = convertObjToArray(standards);
		const subjectIDs = filterIDsBySubject( subject, stdArray);
		var toRet = [];
		subjectIDs.forEach( stdID => {
			filterByStandard(stdID, objArray).forEach(assessment => toRet.push(assessment))
		});
		return toRet;
	}
};


//will be used to sort out standardIDs
export const filterIDsBySubject = ( subject, objArray) => {
	const filteredBySub = filterBySubject(subject, objArray);
	return filteredBySub.map(listItem => listItem.standardID);
}

export const filterIDsByGradeType = ( gradeType, objArray) => {
	const filteredByGrade = filterByGradeType(gradeType, objArray);
	return filteredByGrade.map(listItem => listItem.standardID);
}


export const filterByStandard = ( standardID, objArray ) => {
	return objArray.filter(listItem => listItem.standardID === standardID)
}