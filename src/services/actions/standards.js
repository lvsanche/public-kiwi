
export const addStandard = (id, standardName, assessmentType, subject, standardDetails) => ({
    type: 'ADD_STANDARD',
    id,
    standardName,
    assessmentType,
    subject,
    standardDetails
  });

export const editStandard = (id, standardName, assessmentType, subject, standardDetails) => ({
    type:'EDIT_STANDARD',
    id,
    standardName,
    assessmentType,
    subject,
    standardDetails
  }
);