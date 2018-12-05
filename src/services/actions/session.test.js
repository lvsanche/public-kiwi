import * as actions from './session';

describe('session actions', () => {
    
    it('should create an action to set teachers name', () => {
        const firstName = "Something";
        const lastName = "Random";
        const teacherName = firstName + ' ' + lastName;
        const expectedAction = {
            type: 'SET_TEACHER_NAME',
            teacherName
        };

        expect(actions.setTeacherName(firstName, lastName)).toEqual(expectedAction);
    })

    it('should create an action to set authUser', () => {
        const authUser = {
            'key': 'asdf0asd-afsd',
            'username': 'Teacher1'
        };

        const expectedAction = {
            type: 'SET_AUTH_USER',
            authUser
        };

        expect(actions.setAuthUser(authUser)).toEqual(expectedAction);
    })

    it('should create an action to set class ID', () => {
        const classID = 'asdfjhlaksjdf-0asdfasdfasdf';
        const expectedAction = {
            type: 'SET_CLASS_ID',
            classID
        };

        expect(actions.setClassID(classID)).toEqual(expectedAction);
    })

    it('should create an action to clear standards', () => {
        const expectedAction = {
            type: 'CLEAR_STANDARDS'
        };
        expect(actions.clearStandards()).toEqual(expectedAction);
    })

    it('should create an action to clear students', () => {
        const expectedAction = {
            type: 'CLEAR_STUDENTS'
        };

        expect(actions.clearStudents()).toEqual(expectedAction);

    })

    it('should create an action to clear assessments', () => {
        const expectedAction = {
            type: 'CLEAR_ASSESSMENTS'
        };

        expect(actions.clearAssessments()).toEqual(expectedAction);
    })
})