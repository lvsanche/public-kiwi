
import { convertObjToArray, flattenAssessmentsStructure } from './miscHelpers';

//will be expecting an assessment Object
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

			if( newFilters[1] === 'categories'){
				toRet =  toRet.filter(listItem => listItem.maxGrade === '+');
			}
			else{
				toRet = toRet.filter(listItem => listItem.maxGrade !== '+');
			}
		}
		else {
			const gradeIDs = filterIDsByGradeType(gradeType, standardsArray);
			toRet = gradeIDs.reduce( (acc, gradeID) => {
				return acc.concat(filterByStandard(gradeID, assessObjArray))
			}, []);
		}
		return toRet;
	}
}

//used to filter standard obj array by grade type
export const filterByGradeType = (gradeType, objArray) => {
	return objArray.filter( listItem => listItem.gradeType === gradeType)
}

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
export const filterBySubject = (subject, objArray) => {
	if(subject === 'all'){
		return objArray;
	}
	else{
		return objArray.filter( listItem => listItem.subject === subject)
	}
};

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
}

export const filterIDsByGradeType = ( gradeType, objArray) => {
	return filterByGradeType(gradeType, objArray).map(listItem => listItem.standardID);
}

//used to filter an array of assessment objects by the standardID property
export const filterByStandard = ( standardID, assessObjArray ) => {
	return assessObjArray.filter(listItem => listItem.standardID === standardID)
}

export const filterForStandardIDs = (propName, propValue, objArray) => {
	const filteredArray = objArray.filter( arrayObj => arrayObj[propName] === propValue);
	return filteredArray.map(arrayItem => arrayItem.standardID );
}