import { db } from '../firebase';

export const doCreateStandard = (uid, standardID, standardName, standardDetails, assessmentType, subject ) =>
  db.ref(`standards/${standardID}`).set({
    standardID,
    standardName,
    standardDetails,
    assessmentType,
    subject,
    'availableTo': { [uid]: true }
  });

export const doEditStandard = ( standardID, standardName, standardDetails, assessmentType, subject ) =>
  db.ref(`standards/${standardID}`).set({
    standardName,
    standardDetails,
    assessmentType,
    subject,
  });

export const onceGetStandard = (standardID) =>
  db.ref(`standards/${standardID}`).once('value');
