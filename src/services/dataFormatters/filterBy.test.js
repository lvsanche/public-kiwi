import * as filters from './filterBy';

describe('filterAssessmentsByGradeType', () => {

    it('returns proper assessment array from gradeType: criteria', () => {
        const gradeType = 'criteria-categories';
        var standardsArray = [
            {
                gradeType: 'criteria',
                maxGrade: '+',
                standardID: 'a'
            },
            {
                gradeType: 'criteria',
                maxGrade: 10,
                standardID: 'b'
            },
            {
                gradeType: 'language',
                maxGrade: 26,
                standardID: 'c'
            },
            {
                gradeType: 'crandom',
                maxGrade: 26,
                standardID: 'd'
            },
            {
                gradeType: 'afsdasd',
                maxGrade: 26,
                standardID: 'e'
            },
            {
                gradeType: 'criteria',
                maxGrade: '+',
                standardID: 'f'
            }
        ];
        var assessments= [
            {
                assessmentID: 'A',
                date: "2018-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample',
                grade: '+'
            },
            {
                date: "2019-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample2',
                assessmentID: 'B',
                grade: '+'
            },
            {
                date: "2018-09-08",
                maxGrade: "+",
                standardID: 'f',
                standardName: 'Sample3',
                assessmentID: 'C',
                grade: '-'
            },
            {
                date: "2018-08-10",
                maxGrade: "+",
                standardID: 'b',
                standardName: 'Sample',
                assessmentID: 'D',
                grade: '-'
            },
            {
                date: "2018-08-20",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Sample3',
                assessmentID: 'E',
                grade: 13
            },
            {
                date: "2018-10-10",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Samplef',
                assessmentID: 'F',
                grade: 8
            }
        ];
        expect(filters.filterAssessmentsByGradeType(gradeType, standardsArray, assessments)).toEqual([
            {
                assessmentID: 'A',
                date: "2018-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample',
                grade: '+'
            },
            {
                date: "2019-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample2',
                assessmentID: 'B',
                grade: '+'
            },
            {
                date: "2018-08-10",
                maxGrade: "+",
                standardID: 'b',
                standardName: 'Sample',
                assessmentID: 'D',
                grade: '-'
            },
            {
                date: "2018-09-08",
                maxGrade: "+",
                standardID: 'f',
                standardName: 'Sample3',
                assessmentID: 'C',
                grade: '-'
            }
        ])
    })

    it('returns proper assessment array from gradeType: all', () => {
        const gradeType = 'all';
        var standardsArray = [
            {
                gradeType: 'criteria',
                maxGrade: '+',
                standardID: 'a'
            },
            {
                gradeType: 'criteria',
                maxGrade: 10,
                standardID: 'b'
            },
            {
                gradeType: 'language',
                maxGrade: 26,
                standardID: 'c'
            },
            {
                gradeType: 'crandom',
                maxGrade: 26,
                standardID: 'd'
            },
            {
                gradeType: 'afsdasd',
                maxGrade: 26,
                standardID: 'e'
            },
            {
                gradeType: 'criteria',
                maxGrade: '+',
                standardID: 'f'
            }
        ];
        var assessments= [
            {
                assessmentID: 'A',
                date: "2018-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample',
                grade: '+'
            },
            {
                date: "2019-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample2',
                assessmentID: 'B',
                grade: '+'
            },
            {
                date: "2018-09-08",
                maxGrade: "+",
                standardID: 'f',
                standardName: 'Sample3',
                assessmentID: 'C',
                grade: '-'
            },
            {
                date: "2018-08-10",
                maxGrade: "+",
                standardID: 'b',
                standardName: 'Sample',
                assessmentID: 'D',
                grade: '-'
            },
            {
                date: "2018-08-20",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Sample3',
                assessmentID: 'E',
                grade: 13
            },
            {
                date: "2018-10-10",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Samplef',
                assessmentID: 'F',
                grade: 8
            }
        ];
        expect(filters.filterAssessmentsByGradeType(gradeType, standardsArray, assessments)).toEqual(assessments)
    })

    it('returns proper assessment array from gradeType: language', () => {
        const gradeType = 'language';
        var standardsArray = [
            {
                gradeType: 'criteria',
                maxGrade: '+',
                standardID: 'a'
            },
            {
                gradeType: 'criteria',
                maxGrade: 10,
                standardID: 'b'
            },
            {
                gradeType: 'language',
                maxGrade: 26,
                standardID: 'c'
            },
            {
                gradeType: 'crandom',
                maxGrade: 26,
                standardID: 'd'
            },
            {
                gradeType: 'afsdasd',
                maxGrade: 26,
                standardID: 'e'
            },
            {
                gradeType: 'criteria',
                maxGrade: '+',
                standardID: 'f'
            }
        ];
        var assessments= [
            {
                assessmentID: 'A',
                date: "2018-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample',
                grade: '+'
            },
            {
                date: "2019-08-08",
                maxGrade: "+",
                standardID: 'a',
                standardName: 'Sample2',
                assessmentID: 'B',
                grade: '+'
            },
            {
                date: "2018-09-08",
                maxGrade: "+",
                standardID: 'f',
                standardName: 'Sample3',
                assessmentID: 'C',
                grade: '-'
            },
            {
                date: "2018-08-10",
                maxGrade: "+",
                standardID: 'b',
                standardName: 'Sample',
                assessmentID: 'D',
                grade: '-'
            },
            {
                date: "2018-08-20",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Sample3',
                assessmentID: 'E',
                grade: 13
            },
            {
                date: "2018-10-10",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Samplef',
                assessmentID: 'F',
                grade: 8
            }
        ];
        expect(filters.filterAssessmentsByGradeType(gradeType, standardsArray, assessments)).toEqual([
            {
                date: "2018-08-20",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Sample3',
                assessmentID: 'E',
                grade: 13
            },
            {
                date: "2018-10-10",
                maxGrade: 26,
                standardID: 'c',
                standardName: 'Samplef',
                assessmentID: 'F',
                grade: 8
            }
        ])
    })
})