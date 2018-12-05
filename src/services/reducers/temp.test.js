import reducer from './temp';

describe ('temp reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {}
        )
    })

    it('should handle invalid type', ()=> {

    })

    it('should handle CLEAR_TEMP for empty state', ()=> {
        expect(reducer(
            undefined,
            {
                type: 'CLEAR_TEMP'
            }
        )).toEqual(
            {}
        )
    })
    it('should handle CLEAR_TEMP for existing state', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'CLEAR_TEMP'
            }
        )).toEqual(
            {}
        )
    })
    it('should handle ADD_TEMP_CLASS for empty state', ()=> {
        expect(reducer( 
            undefined,
            {
                type: 'ADD_TEMP_CLASS',
                classID: '9843hfls',
                year: '2018',
                grade: 'preK',
                schoolName: 'Random School',
                teacherID: '567893',
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                }
            }
        )
    })

    it('should handle ADD_TEMP_CLASS for exiting class', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'ADD_TEMP_CLASS',
                classID: '8934dslk',
                year: '2019',
                grade: '1st',
                schoolName: 'Random Bees School',
                teacherID: '5jkfadsk',
            }
        )).toEqual(
            {
                newClass: {
                    classID: '8934dslk',
                    year: '2019',
                    grade: '1st',
                    schoolName: 'Random Bees School',
                    teacherID: '5jkfadsk',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            }
        )
    })

    it('should handle ADD_TEMP_STANDARD for empty state', ()=> {
        expect(reducer( 
            undefined,
            {   
                type: 'ADD_TEMP_STANDARD',
                standardID: 'asdfajsdf8412394',
                classID: 'yuio7890',
                standardName: 'Some Random Name',
                gradeType: 'criteria',
                subject: 'math',
                standardDetails: 'These are some of the details'
            }
        )).toEqual(
            {
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
                }
            }
        )
    })
    it('should handle ADD_TEMP_STANDARD for new standard in existing standards', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'ADD_TEMP_STANDARD',
                standardID: '875322',
                classID: 'yuio7890',
                standardName: 'Some New Name',
                gradeType: 'numbers',
                subject: 'math',
                standardDetails: 'More More Details'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            }
        )
    })
    it('should handle ADD_TEMP_STANDARD for replacing standard in existing standards', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'ADD_TEMP_STANDARD',
                standardID: 'asdfajsdf8412394',
                classID: 'yuio7890',
                standardName: 'Fresh Random Name',
                gradeType: 'random',
                subject: 'reading',
                standardDetails: 'EEH Random Details'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Fresh Random Name',
                        gradeType: 'random',
                        subject: 'reading',
                        standardDetails: 'EEH Random Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            }
        )
    })
    it('should handle UPDATE_CLASS_STANDARDS for empty class', ()=> {
        expect(() => {reducer(
            undefined,
            {
                type: 'UPDATE_CLASS_STANDARDS',
                standardID: 'dafskjlas'
            }
        )}).toThrow(TypeError)
    })

    it('should handle UPDATE_CLASS_STANDARDS for new standard in non existent classes standards', ()=> {
        expect( reducer(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Fresh Random Name',
                        gradeType: 'random',
                        subject: 'reading',
                        standardDetails: 'EEH Random Details'
                    }
                },
            },
            {
                type: 'UPDATE_CLASS_STANDARDS',
                standardID: 'asdfajsdf8412394'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList: {
                        'asdfajsdf8412394': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Fresh Random Name',
                        gradeType: 'random',
                        subject: 'reading',
                        standardDetails: 'EEH Random Details'
                    }
                },
            }
        )
    })
    it('should handle UPDATE_CLASS_STANDARD for new standard in existing classes standards', ()=> {
        expect( reducer(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList: {
                        'asdfajsdf8412394': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Fresh Random Name',
                        gradeType: 'random',
                        subject: 'reading',
                        standardDetails: 'EEH Random Details'
                    }
                },
            },
            {
                type: 'UPDATE_CLASS_STANDARDS',
                standardID: 'asdfasdf'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList: {
                        'asdfajsdf8412394': true,
                        'asdfasdf': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Fresh Random Name',
                        gradeType: 'random',
                        subject: 'reading',
                        standardDetails: 'EEH Random Details'
                    }
                },
            }
        )
    })
    it('should handle ADD_TEMP_STUDENT for empty state', ()=> {
        expect(reducer( 
            undefined,
            {
                type: 'ADD_TEMP_STUDENT',
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
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
            }
        )
        
    })

    it('should handle ADD_TEMP_STUDENT for new student in existing students', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'ADD_TEMP_STUDENT',
                studentID: '89sjfd=asdfa',
                firstName: 'New',
                lastName: 'Student',
                grades: {
                    'asfd': [true, true],
                    'xkmkf': '0-5',
                    '9kre': '~'
                }
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    },
                    '89sjfd=asdfa': {
                        studentID: '89sjfd=asdfa',
                        firstName: 'New',
                        lastName: 'Student',
                        grades: {
                            'asfd': [true, true],
                            'xkmkf': '0-5',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            }
        )
    })

    it('should handle ADD_TEMP_STUDENT for replacing student in existing students', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'ADD_TEMP_STUDENT',
                studentID: 'asdfajsdf8412394',
                firstName: 'Second',
                lastName: 'Name',
                grades: {
                    'asfd': [false, false],
                    'xkmkf': '0-12',
                    '9kre': '+'
                }
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'Second',
                        lastName: 'Name',
                        grades: {
                            'asfd': [false, false],
                            'xkmkf': '0-12',
                            '9kre': '+'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            }
        )
    })

    it('should handle UPDATE_CLASS_STUDENTS for empty class', ()=> {
        expect(()=>{ reducer(
            undefined,
            {
                type: 'UPDATE_CLASS_STUDENTS',
                studentID: 'fadsfa'
            }
        )}).toThrow(TypeError)
    })

    it('should handle UPDATE_CLASS_STUDENTS for new student in non-existing classes students', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList : {
                        'asdfa': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'UPDATE_CLASS_STUDENTS',
                studentID: '89sjfd=asdfa'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList : {
                        'asdfa': true
                    },
                    studentList: {
                        '89sjfd=asdfa': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
        )
    })
    it('should handle UPDATE_CLASS_STUDENTSD for adding student in existing classes students', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList : {
                        'asdfa': true
                    },
                    studentList: {
                        'afsdafsf': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
            {
                type: 'UPDATE_CLASS_STUDENTS',
                studentID: '89sjfd=asdfa'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList : {
                        'asdfa': true
                    },
                    studentList: {
                        'afsdafsf': true,
                        '89sjfd=asdfa': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            },
        )
    })

    it('should handle ADD_TEMP_ASSESSMENT for empty state', ()=> {
        expect(reducer( 
            undefined,
            {
                type: 'ADD_TEMP_ASSESSMENT',
                assessmentID: '4567asdfjkasf',
                standardID: 'asdfajsdf8412394',
                date: '2018-10-13',
                maxGrade: '+',
                standardName: 'Some Random Name'
            }
        )).toEqual(
            {
                newAssessment: 
                {
                    assessmentID: '4567asdfjkasf',
                    standardID: 'asdfajsdf8412394',
                    date: '2018-10-13',
                    maxGrade: '+',
                    standardName: 'Some Random Name'
                }
            }
        )
    })
    
    it('should handle ADD_TEMP_ASSESSMENT for replacing assessment in existing assessments', ()=> {
        expect(reducer( 
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList : {
                        'asdfa': true
                    },
                    studentList: {
                        'afsdafsf': true,
                        '89sjfd=asdfa': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    assessmentID: '4567asdfjkasf',
                    standardID: 'asdfajsdf8412394',
                    date: '2018-10-13',
                    maxGrade: '+',
                    standardName: 'Some Random Name'
                }
            },
            {
                type: 'ADD_TEMP_ASSESSMENT',
                assessmentID: '489jkfasd',
                standardID: 'asdfajsdf8412394',
                date: '2019-01-19',
                maxGrade: '20',
                standardName: 'Make Random'
            }
        )).toEqual(
            {
                newClass: {
                    classID: '9843hfls',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School',
                    teacherID: '567893',
                    standardList : {
                        'asdfa': true
                    },
                    studentList: {
                        'afsdafsf': true,
                        '89sjfd=asdfa': true
                    }
                },
                newStandards: {
                    'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    },
                    '875322': {
                        standardID: '875322',
                        classID: 'yuio7890',
                        standardName: 'Some New Name',
                        gradeType: 'numbers',
                        subject: 'math',
                        standardDetails: 'More More Details'
                    }
                },
                newStudents: {
                    'asdfajsdf8412394': {
                        studentID: 'asdfajsdf8412394',
                        firstName: 'First',
                        lastName: 'Last',
                        grades: {
                            'asfd': [true, false],
                            'xkmkf': '0-20',
                            '9kre': '~'
                        }
                    }
                },
                newAssessment: {
                    assessmentID: '489jkfasd',
                    standardID: 'asdfajsdf8412394',
                    date: '2019-01-19',
                    maxGrade: '20',
                    standardName: 'Make Random'
                }
            }
        )
    })
})