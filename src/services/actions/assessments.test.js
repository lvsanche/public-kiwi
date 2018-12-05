import * as actions from './assessments';

describe('assessments actions', () => {
    it('should create an action to add a new assessment', () => {
        const date = '2018-10-02';
        const maxGrade = '+';
        const standardID = '10ba038e-48da-487b-96e8-8d3b99b6d18a';
        const standardName = 'Random Test'
        var expectedAction = {
            type: 'ADD_ASSESSMENT',
            assessmentID: '',
            date,
            maxGrade,
            standardID,
            standardName
        };
        const returnedAction = actions.addNewAssessment(date, standardID, maxGrade, standardName );
        //random assessmentID must be copied over
        expectedAction['assessmentID'] = returnedAction['assessmentID'];
        
        expect(returnedAction).toEqual(expectedAction);
    })

    it('should create an action to update an existing assessment', () => {
        const date = '2018-10-02';
        const maxGrade = '+';
        const assessmentID = '43ba123e-32da-687b-56e8-8d3c23b6g18a'
        const standardID =   '10ba038e-48da-587b-96e8-8d3b99b6d18a';
        const standardName = 'Random Test';
        const expectedAction = {
            type: 'ADD_ASSESSMENT',
            assessmentID,
            date,
            maxGrade,
            standardID,
            standardName
        };

        const existingAssessment = {
            assessmentID,
            date,
            maxGrade,
            standardID,
            standardName
        }

        expect(actions.addExistingAssessment(existingAssessment)).toEqual(expectedAction);
    })

    it('should create an action to set up assessments store', () => {
        const standardID =   '10ba038e-48da-587b-96e8-8d3b99b6d18a';
        const standardName = 'Random Test';
        const standardsObject = {
            '10ba038e-48da-587b-96e8-8d3b99b6d18a':{
                standardID,
                standardName
            }
        };
        
        const expectedAction = {
            type: 'SET_UP_ASSESSMENTS',
            standardsObject
        }

        expect(actions.setUpAssessments(standardsObject)).toEqual(expectedAction);
    })
})