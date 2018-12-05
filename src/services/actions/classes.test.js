import * as actions from './classes';

describe('classes actions', () => {
    it('should create an action to add a new class', () => {
        const year = '2018';
        const grade = 'preK';
        const schoolName = 'Random Elementary';
        var expectedAction = {
            type: 'ADD_CLASS',
            classID: '',
            year,
            grade,
            schoolName
        };

        const actualAction = actions.addNewClass(year, grade, schoolName);
        expectedAction['classID'] = actualAction['classID']; //since it is random

        expect(actualAction).toEqual(expectedAction);
    })
})