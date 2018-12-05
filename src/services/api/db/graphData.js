import { db } from '../firebase';

export const postLetterGraphDatasets = 
    (datasets, classID) =>
        db.ref(`graphs/letterGraph/${classID}`).set({
            datasets
        });

// export cosnt postUpdateLetterGraphDataset

export const singleGetLetterGraph = (classID) =>
    db.ref(`graphs/letterGraph/${classID}`).once('value');