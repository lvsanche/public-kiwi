import * as actions from './students';

describe('students actions', () => {
    it('should create an action to add grades to students', () => {
        const studentID = 'rqiuewryi324';
        const assessmentID = 'asdfasdfasdflasd';
        const gradeText = '0-20';

        var expectedAction = {
            type: 'ADD_GRADE_STUDENT',
            studentID, 
            assessmentID,
            grade: gradeText
        };

        expect(actions.addGradesStudent(studentID, assessmentID, gradeText)).toEqual(expectedAction);
        
        const gradeArr = [true, true, false, false, true, false];
        expectedAction['grade'] =  gradeArr

        expect(actions.addGradesStudent(studentID, assessmentID, gradeArr)).toEqual(expectedAction);


    })

    it('should create an action to edit replace students` grades', () => {
        const studentID = 'rqiuewryi324';
        const grades = {
            'asdfasd': '+',
            'gggfdf': '0-20',
            'aserrer': [true, false, false, true]
        };

        const expectedAction = {
            type: 'EDIT_STUDENT',
            studentID,
            grades
        }

        expect(actions.editStudent(studentID, grades)).toEqual(expectedAction);
    })

    it('should create an action to add a new student', () => {
        const studentID = 'rqiuewryi324';
        const firstName = 'Something';
        const lastName = 'Random-faskjdfjas';
        const classID = '74812734kjlsdfasdf';

        const expectedAction = {
            type: 'ADD_STUDENT',
            studentID,
            grades: {},
            firstName,
            lastName,
            classID
        };

        expect(actions.addNewStudent(studentID, firstName, lastName, classID)).toEqual(expectedAction);
    })

    it('should create an action to add an existing student', () => {
        const studentID = 'rqiuewryi324';
        const firstName = 'Something';
        const lastName = 'Random-faskjdfjas';
        const classID = '74812734kjlsdfasdf';
        const grades = {
            'asdfasd': '+',
            'gggfdf': '0-20',
            'aserrer': [true, false, false, true]
        };

        const expectedAction = {
            type: 'ADD_STUDENT',
            studentID,
            firstName,
            lastName,
            classID,
            grades
        };

        const studObj = {
            studentID,
            firstName,
            lastName,
            classID,
            grades
        };

        expect(actions.addExistingStudent(studObj)).toEqual(expectedAction);
    })
})