import reducer from './students';

describe('students reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {}
        )
    })

    it('should handle invalid type', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                }
            }, {
                type: 'NONE_SENSE',
                date: '2018-10-19'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                }
            }
        )
    })

    it('should handle CLEAR_STUDENTS with exisiting students', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                }
            }, {
                type: 'CLEAR_STUDENTS'
            }
        )).toEqual(
            {}
        )
    })

    it('should handle ADD_GRADE_STUDENT with empty students with Type Error', () => {
        expect(() => {reducer(
            undefined,
            {
                type: 'ADD_GRADE_STUDENT',
                studentID: 'asdf',
                assessmentID: 'kjl',
                grade: [true, true]
            }
        )}).toThrowError(TypeError)
    })

    it('should handle ADD_GRADE_STUDENT with new grade added to exiting grades', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                },
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '5-12',
                        '9kre': '+'
                    }
                }
            },
            {
                type: 'ADD_GRADE_STUDENT',
                studentID: 'asdfajsdf8412394',
                assessmentID: 'kjl',
                grade: [true, true]
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~',
                        'kjl': [true, true]
                    }
                },
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '5-12',
                        '9kre': '+'
                    }
                }
            }
        )
    })


    it('should handle ADD_GRADE_STUDENT with replacing an exiting grades', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                },
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '5-12',
                        '9kre': '+'
                    }
                }
            },
            {
                type: 'ADD_GRADE_STUDENT',
                studentID: '412394',
                assessmentID: 'xkmkf',
                grade: '0-12'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                },
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '0-12',
                        '9kre': '+'
                    }
                }
            }
        )
    })
    
    it('should handle ADD_STUDENT with empty state', () => {
        expect(reducer( 
            undefined, 
            {
                type: 'ADD_STUDENT',
                studentID: 'asdfajsdf8412394',
                firstName: 'First',
                lastName: 'Last',
                classID: 'ajklsdf98724',
                grades: {
                    'asfd': [true, false],
                    'xkmkf': '0-20',
                    '9kre': '~'
                }
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                }
            }
        )
    })

    it('should handle ADD_STUDENT to add new student with existing students list', () => {
        expect(reducer( 
            {
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '0-12',
                        '9kre': '+'
                    }
                }
            }, 
            {
                type: 'ADD_STUDENT',
                studentID: 'asdfajsdf8412394',
                firstName: 'First',
                lastName: 'Last',
                classID: 'ajklsdf98724',
                grades: {
                    'asfd': [true, false],
                    'xkmkf': '0-20',
                    '9kre': '~'
                }
            }
        )).toEqual(
            {
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '0-12',
                        '9kre': '+'
                    }
                },
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                }
            }
        )
    })
    
    it('should handle ADD_STUDENT to replace a student with existing students list', () => {
        expect(reducer( 
            {
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '0-12',
                        '9kre': '+'
                    }
                },
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '0-12',
                        '9kre': '+'
                    }
                }
            }, 
            {
                type: 'ADD_STUDENT',
                studentID: 'asdfajsdf8412394',
                firstName: 'First',
                lastName: 'Last',
                classID: 'ajklsdf98724',
                grades: {
                    'asfd': [true, false],
                    'xkmkf': '0-20',
                    '9kre': '~'
                }
            }
        )).toEqual(
            {
                '412394': {
                    studentID: '412394',
                    firstName: 'Another',
                    lastName: 'Name',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [false, false],
                        'xkmkf': '0-12',
                        '9kre': '+'
                    }
                },   
                'asdfajsdf8412394': {
                    studentID: 'asdfajsdf8412394',
                    firstName: 'First',
                    lastName: 'Last',
                    classID: 'ajklsdf98724',
                    grades: {
                        'asfd': [true, false],
                        'xkmkf': '0-20',
                        '9kre': '~'
                    }
                }
            }
        )
    })

})