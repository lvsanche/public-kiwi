import * as actions from './temp';
import { bindActionCreators } from 'redux';

describe('temp actions', () => {
    it('should create an action to add temporary class', () => {
        const year = '2018';
        const grade = 'kinder';
        const schoolName = 'Random Elementary';
        const teacherID = '84fdlkfa-34839';

        var expectedAction = {
            type: 'ADD_TEMP_CLASS',
            classID: '',
            year,
            grade,
            schoolName,
            teacherID
        };

        const actualAction = actions.addTempClass(year, grade, schoolName, teacherID);
        expectedAction['classID'] = actualAction['classID'];

        expect(actualAction).toEqual(expectedAction);
    })

    it('should create an action to add a temporary assessment', () => {
        const date = '2018-10-02';
        const standardID = 'fa94324-fdasa-03232';
        const maxGrade = '+';
        const standardName = 'Some Random Standard Name';

        var expectedAction = {
            type: 'ADD_TEMP_ASSESSMENT',
            assessmentID: '',
            date,
            standardID,
            maxGrade,
            standardName
        };

        const actualAction = actions.addTempAssessment(date, standardID, maxGrade, standardName);
        expectedAction['assessmentID'] = actualAction['assessmentID'];
        expect(actualAction).toEqual(expectedAction);

    })

    it('should create an action to add a temporary standard', () => {
        const classID = 'asdfasdfasdfasdf';
        const standardName = 'Random Standard 0.1';
        const gradeType = 'criteria';
        const subject = 'Math';
        const standardDetails = 'Some details about a random standard';

        var expectedAction = {
            type: 'ADD_TEMP_STANDARD',
            standardID: '',
            classID,
            standardName, 
            gradeType, 
            subject,
            standardDetails
        };

        const actualAction = actions.addTempStandard(standardName, classID, gradeType, subject, standardDetails);
        expectedAction['standardID'] = actualAction['standardID'];

        expect(actualAction).toEqual(expectedAction);

    })

    it('should create an action to update the temporary class standards', () => {
        const id = 'asdfasdf489258534-dfsa2324';
        const expectedAction = {
            type: 'UPDATE_CLASS_STANDARDS',
            id
        };

        expect(actions.updateTempClassStandards(id)).toEqual(expectedAction);
    })

    it('should create an action to add a temporary student', () => {
        const firstName = 'Something';
        const lastName = 'Random-faskjdfjas';

        var expectedAction = {
            type: 'ADD_TEMP_STUDENT',
            studentID: '',
            grades: {},
            firstName,
            lastName
        };

        const actualAction = actions.addTempStudent(firstName, lastName);
        expectedAction['studentID'] = actualAction['studentID'];

        expect(actualAction).toEqual(expectedAction);
    })

    it('should create an action to update the temporary class students', () =>{
        const id = 'asdfasdf489258534-dfsa2324';
        const expectedAction = {
            type: 'UPDATE_CLASS_STUDENTS',
            id
        };

        expect(actions.updateTempClassStudents(id)).toEqual(expectedAction);
    })

    it('should create an action to clear all temporary values', () => {
        const expectedAction = {
            type: 'CLEAR_TEMP'
        };

        expect(actions.clearTempAll()).toEqual(expectedAction);
    })

})