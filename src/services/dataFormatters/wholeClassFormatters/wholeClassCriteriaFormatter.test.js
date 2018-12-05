import {wholeClassCriteriaTableFormatter, wholeClassCriteriaCounter} from './wholeClassCriteriaFormatter';


describe('New counter function formatter', () => {
    it('counts everything', () => {
        const assessments = {
            'aaa': {
                '1': {
                    'assessmentID':'1',
                    'date': "2018-08-08",
                    'maxGrade': "+",
                    'standardID': 'aaa',
                    'standardName': 'SOME'
                },
            },
            'bbb': {
                '2': {
                    'assessmentID':'2',
                    'date': "2018-08-09",
                    'maxGrade': "+",
                    'standardID': 'bbb',
                    'standardName': 'Another'
                },
                '3': {
                    'assessmentID':'3',
                    'date': "2018-08-10",
                    'maxGrade': "+",
                    'standardID': 'bbb',
                    'standardName': 'Another'
                }
            }
        };

        const standards = {
            'aaa': {
                'standardName': 'First',
                'standardID': 'aaa',
                "gradeType":"criteria"
            },
            'bbb':{
                'standardName': 'Second',
                'standardID': 'bbb',
                "gradeType":"criteria",
            }
        }
        
        const studentList = {
            "A" : {
            "classID" : "Class",
            "firstName" : "Micheal",
            "lastName" : "Jordan",
            "grades": {
                '1': '-',
                '2': '~',
                '3': '+'
            },
            "studentID" : "A"
          },
          "B" : {
            "classID" : "Class",
            "firstName" : "Tester",
            "lastName" : "Boy",
            "grades": {
                '1': '+',
                '2': '~',
                '3': '+'
            },
            "studentID" : "B"
          },
          "C" : {
            "classID" : "Class",
            "firstName" : "Tester",
            "lastName" : "Boy33",
            "grades": {
                '1': '-',
                '2': '~',
                '3': '+'
            },
            "studentID" : "C"
          },

        };

        const expResult = {
            'bbb': {
                '3':[ 0, 0 ,3]
            },
            'aaa':{
                '1': [2,0, 1]
            }
        };

        expect(wholeClassCriteriaCounter(studentList, standards, assessments)).toEqual(expResult);
    })
});


describe('New Class Table formatter', () => {
    it('converts students to correct obj', () => {
        const assessments = {
            'aaa': {
                '1': {
                    'assessmentID':'1',
                    'date': "2018-08-08",
                    'maxGrade': "+",
                    'standardID': 'aaa',
                    'standardName': 'First'
                },
            },
            'bbb': {
                '2': {
                    'assessmentID':'2',
                    'date': "2018-08-09",
                    'maxGrade': "+",
                    'standardID': 'bbb',
                    'standardName': 'Second'
                },
                '3': {
                    'assessmentID':'3',
                    'date': "2018-08-10",
                    'maxGrade': "+",
                    'standardID': 'bbb',
                    'standardName': 'Second'
                }
            }
        };

        const standards = {
            'aaa': {
                'standardName': 'First',
                'standardID': 'aaa',
                "gradeType":"criteria"
            },
            'bbb':{
                'standardName': 'Second',
                'standardID': 'bbb',
                "gradeType":"criteria",
            }
        }
        
        const studentList = {
            "023d9f1a-c810-400c-831d-811f63a09472" : {
            "classID" : "7f39990f-c51b-464c-896e-4e11ad759878",
            "firstName" : "Micheal",
            "lastName" : "Jordan",
            "grades": {
                '1': '-',
                '2': '~',
                '3': '+'
            },
            "studentID" : "023d9f1a-c810-400c-831d-811f63a09472"
          }};

        const expResult = [
            {
                'standardName': 'First',
                'date': "2018-08-08",
                'passPercent': 0,
                'failPercent': 1
            },
            {
                'standardName': 'Second',
                'date': "2018-08-10",
                'passPercent': 1,
                'failPercent': 0
            },
        ];

        expect(wholeClassCriteriaTableFormatter(studentList, standards, assessments)).toEqual(expResult);
        

    });
});