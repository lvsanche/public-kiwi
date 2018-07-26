
export const addExistingStandard = ({standardID, classID, standardName, gradeType, subject, standardDetails}) => ({
    type: 'ADD_STANDARD',
    standardID,
    classID,
    standardName,
    gradeType,
    subject,
    standardDetails
  });

export const editStandard = (standardID, classID, standardName, gradeType, subject, standardDetails) => ({
    type:'EDIT_STANDARD',
    standardID,
    classID,
    standardName,
    gradeType,
    subject,
    standardDetails
  }
);