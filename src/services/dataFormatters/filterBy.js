
import { convertObjToArray, flattenAssessmentsStructure } from './miscHelpers';

//will be expecting an assessment Object
<<<<<<< HEAD
export const filterAssessments = ( filters, assessObjArray, standards) => {
	var allAssessments = flattenAssessmentsStructure(assessObjArray);
	var allStandards = convertObjToArray(standards)
	return  filterAssessmentsBySubject(filters.subject, allStandards, filterBySearch(filters.searchText, filterAssessmentsByGradeType(filters.gradeType, allStandards, allAssessments) ) );
};

//used to filter assessments by grade type, requires standards array
export const filterAssessmentsByGradeType = (gradeType, standardsArray, assessObjArray) => {
	var toRet = [];
	if( gradeType === 'all'){
		return assessObjArray;
	}
	else{
		if( gradeType.includes('criteria') ){
			var newFilters = gradeType.split('-');
			
			const gradeIDs = filterIDsByGradeType('criteria', standardsArray);
			toRet = gradeIDs.reduce( (acc, gradeID) => {
				return acc.concat(filterByStandard(gradeID, assessObjArray))
			}, []);

=======
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

	
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
			if( newFilters[1] === 'categories'){
				toRet =  toRet.filter(listItem => listItem.maxGrade === '+');
			}
			else{
				toRet = toRet.filter(listItem => listItem.maxGrade !== '+');
			}
		}
		else {
<<<<<<< HEAD
			const gradeIDs = filterIDsByGradeType(gradeType, standardsArray);
			toRet = gradeIDs.reduce( (acc, gradeID) => {
				return acc.concat(filterByStandard(gradeID, assessObjArray))
			}, []);
=======
			const standardsToRet = filterByGradeType(gradeType, standardArray);
			standardsToRet.forEach( standard => {
				var temp = filterByStandard(standard.standardID, objArray);
				temp.forEach( assessment => toRet.push(assessment));
			});
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
		}
		return toRet;
	}
}

<<<<<<< HEAD
//used to filter standard obj array by grade type
=======
//used to filter standards
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
export const filterByGradeType = (gradeType, objArray) => {
	return objArray.filter( listItem => listItem.gradeType === gradeType)
}

<<<<<<< HEAD
//used to filter assessment obj array by search text in the standard name
export const filterBySearch = (searchText, assessObjArray) => {
	if (searchText === ''){
		return assessObjArray;
	}
	else {
		return assessObjArray
				.filter( listItem => 
					listItem.standardName.toLowerCase().includes(searchText.toLowerCase()))
	}
}

//used to filter standard obj array by subject type
=======


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
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
export const filterBySubject = (subject, objArray) => {
	if(subject === 'all'){
		return objArray;
	}
	else{
		return objArray.filter( listItem => listItem.subject === subject)
	}
};

<<<<<<< HEAD
//userd to filter assessment object array by subject, requires interaction with standards
export const filterAssessmentsBySubject = (subject, standardsArray, assessObjArray) => {
	if(subject === 'all'){
		return assessObjArray;
	}
	else{
		//first get the standardIDs by subject
		const subjectIDs = filterIDsBySubject( subject, standardsArray);
		return subjectIDs.reduce( (acc, subID) => {
			return acc.concat(filterByStandard(subID, assessObjArray) )
		}, [])
	}
};

//will be used to sort out standardIDs
export const filterIDsBySubject = ( subject, objArray) => {
	return filterBySubject(subject, objArray).map(listItem => listItem.standardID);
=======
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
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
}

export const filterIDsByGradeType = ( gradeType, objArray) => {
	return filterByGradeType(gradeType, objArray).map(listItem => listItem.standardID);
}

//used to filter an array of assessment objects by the standardID property
export const filterByStandard = ( standardID, assessObjArray ) => {
	return assessObjArray.filter(listItem => listItem.standardID === standardID)
}

<<<<<<< HEAD
export const filterForStandardIDs = (propName, propValue, objArray) => {
	const filteredArray = objArray.filter( arrayObj => arrayObj[propName] === propValue);
	return filteredArray.map(arrayItem => arrayItem.standardID );
=======
export const filterByStandard = ( standardID, objArray ) => {
	return objArray.filter(listItem => listItem.standardID === standardID)
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
}