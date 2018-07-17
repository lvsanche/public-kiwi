
import { convertObjToArray } from './miscHelpers';


export const filterAssessments = ( filters, assessments) => {
	var assessmentsArray = convertObjToArray(assessments);
	//gradingType first
	return filterBySearch(filters.searchText, filterBySubject(filters.subject,
		filterByGradingType(filters.gradingType, assessmentsArray))) ;
};

///actual filters go here ////////////////////////////////

//used to filter assessments
export const filterByGradingType = (gradingType, assessmentsArray) => {
	var toRet;
	if( gradingType === 'all'){
		return assessmentsArray;
	}
	else{
		if( gradingType.includes('-') ){
			var newFilters = gradingType.split('-');
			toRet = assessmentsArray.filter(assessment => assessment.gradingType === 'criteria');
	
			if( newFilters[1] === 'categories'){
				toRet =  toRet.filter(assessment => assessment.maxGrade === '+');
			}
			else{
				toRet = toRet.filter(assessment => assessment.maxGrade !== '+');
			}
		}
		else {
			toRet =  assessmentsArray.filter(assessment => assessment.gradingType === gradingType);
		}
		return toRet;
	}
}

//used to filter standards
export const filterByAssessmentType = (assessmentType, standardArray) => {
	return standardArray.filter( std => std.assessmentType === assessmentType)
}



export const filterBySearch = (searchText, assessmentsArray) => {
	if (searchText === ''){
		return assessmentsArray;
	}
	else {
		return assessmentsArray
				.filter( assessment => 
					assessment.standardName.includes(searchText))
	}
}
export const filterBySubject = (subject, assessmentsArray) => {
	if(subject === 'all'){
		return assessmentsArray;
	}
	else{
		return assessmentsArray.filter( assessment => assessment.subject === subject)
	}
};

export const filterIDsBySubject = ( subject, assessmentsArray) => {
	const filteredBySub = filterBySubject(subject, assessmentsArray);
	return filteredBySub.map(assessment => assessment.id);
}


export const filterByStandard = ( standardID, assessmentsArray ) => {
	return assessmentsArray.filter(assess => assess.standardID === standardID)
}