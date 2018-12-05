import * as actions from './standards';

describe('standards actions', () => {
    it ('should create an action to add a standard', () => {
        const standardID = 'asdlfkasdfas';
        const classID = 'asdfasdfasdfasdf';
        const standardName = 'Random Standard 0.1';
        const gradeType = 'criteria';
        const subject = 'Math';
        const standardDetails = 'Some details about a random standard';

        const expectedAction = {
            type: 'ADD_STANDARD',
            standardID,
            classID,
            standardName,
            gradeType,
            subject,
            standardDetails
        };

        const stdObj = {
            standardID,
            classID,
            standardName,
            gradeType,
            subject, 
            standardDetails
        };

        expect(actions.addExistingStandard(stdObj)).toEqual(expectedAction);
    })

    it('should create an action to edit a standard', () => {
        const standardID = 'asdlfkasdfas';
        const classID = 'asdfasdfasdfasdf';
        const standardName = 'Random Standard 0.1';
        const gradeType = 'criteria';
        const subject = 'Math';
        const standardDetails = 'Some details about a random standard';

        const expectedAction = {
            type: 'EDIT_STANDARD',
            standardID,
            classID,
            standardName,
            gradeType,
            subject,
            standardDetails
        };

        expect(
            actions.editStandard(standardID, classID, standardName, gradeType, subject, standardDetails)
            ).toEqual(expectedAction);
    })
})