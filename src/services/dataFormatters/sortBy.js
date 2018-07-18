import 	{ compareDateAscendingAssessments, compareDateDescendingAssessments,
compareAlphaAscendingStandardNames,
compareAlphaDescendingStandardNames } from './miscHelpers';

export const sortAssessments = (sortBy, assessmentsArray) => {
	var sortedAssessments = assessmentsArray.slice();
	switch( sortBy ){
		case "dateDescending":
			sortedAssessments.sort(compareDateDescendingAssessments);
			break;
		case "dateAscending":
			sortedAssessments.sort(compareDateAscendingAssessments);
			break;
		case "alphaDescending":
			sortedAssessments.sort(compareAlphaDescendingStandardNames);
			break;
		case "alphaAscending":	
			sortedAssessments.sort(compareAlphaAscendingStandardNames);
			break;
		default:
			sortedAssessments.sort(compareDateAscendingAssessments);
	}

	return sortedAssessments;
}; 