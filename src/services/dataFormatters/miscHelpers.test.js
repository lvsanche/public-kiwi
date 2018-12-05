import * as helpers from './miscHelpers';

describe('compareAlphaAscendingStandardNames', () => {
    it('returns 1 if first elem standardName is higher alphabetically', () => {
        const a =   {
            standardName: 'Aaaa'
        }
        const b = {
            standardName: 'Bbb'
        }

        expect(helpers.compareAlphaAscendingStandardNames(b,a)).toEqual(1);
    })

    it('returns -1 if first elem standardName is lower alphabetically', () => {
        const a =   {
            standardName: 'Aaaa'
        }
        const b = {
            standardName: 'Bbb'
        }
        expect(helpers.compareAlphaAscendingStandardNames(a,b)).toEqual(-1);
    })

    it('returns 0 if elements have the same', () => {
        const a =   {
            standardName: 'Aaaa'
        }
        const b = {
            standardName: 'Bbb'
        }
        expect(helpers.compareAlphaAscendingStandardNames(a,a)).toEqual(0);
    })
})

describe('compareAlphaDescendingStandardNames', () => {
    it('returns 1 if first elem standardName is lower alphabetically', () => {
        const a =   {
            standardName: 'Aaaa'
        }
        const b = {
            standardName: 'Bbb'
        }
        expect(helpers.compareAlphaDescendingStandardNames(a,b)).toEqual(1);
    })

    it('returns -1 if first elem standardName is higher alphabetically', () => {
        const a =   {
            standardName: 'Aaaa'
        }
        const b = {
            standardName: 'Bbb'
        }
        expect(helpers.compareAlphaDescendingStandardNames(b,a)).toEqual(-1);
    })

    it('returns 0 if elements have the same', () => {
        const a =   {
            standardName: 'Aaaa'
        }
        const b = {
            standardName: 'Bbb'
        }
        expect(helpers.compareAlphaDescendingStandardNames(b,b)).toEqual(0);
    })
})

describe('compareDateAscendingAssessments', () => {
    it('returns 1 if first elem date is more recent or in the future', () => {
        const a = {
            date: '10-10-2018'
        }
        const b = {
            date: '10-10-2017'
        }
        expect(helpers.compareDateAscendingAssessments(a,b)).toEqual(1);
    })

    it('returns -1 if first elem date is more recent or in the future', () => {
        const a = {
            date: '10-10-2018'
        }
        const b = {
            date: '10-10-2017'
        }
        expect(helpers.compareDateAscendingAssessments(b,a)).toEqual(-1);
    })

    it('returns 0 if elements have the same', () => {
        const a = {
            date: '10-10-2018'
        }
        const b = {
            date: '10-10-2018'
        }
        expect(helpers.compareDateAscendingAssessments(a,b)).toEqual(0)
    })
})

describe('compareDateDescendingAssessments', () => {
    it('returns -1 if first elem date is more recent or in the future', () => {
        const a = {
            date: '10-10-2018'
        }
        const b = {
            date: '10-10-2017'
        }
        expect(helpers.compareDateDescendingAssessments(a,b)).toEqual(-1);
    })

    it('returns -1 if first elem date is more recent or in the future', () => {
        const a = {
            date: '10-10-2018'
        }
        const b = {
            date: '10-10-2017'
        }
        expect(helpers.compareDateDescendingAssessments(b,a)).toEqual(1);
    })

    it('returns 0 if elements have the same', () => {
        const a = {
            date: '10-10-2018'
        }
        const b = {
            date: '10-10-2018'
        }
        expect(helpers.compareDateDescendingAssessments(a,b)).toEqual(0)
    })
})

describe('getAssessmentArrayByStandard', () => {
    it('filters out assessments by standard id', () => {
        const assessments = {
            '123': {
                standardID: '098',
                assessmentID: '123',
                date: '10-10-2018'
            },
            '234': {
                standardID: '098',
                assessmentID: '234',
                date: '10-12-2018'
            },
            '345': {
                standardID: '092',
                assessmentID: '345',
                date: '10-14-2018'
            },
            '456': {
                standardID: '098',
                assessmentID: '456',
                date: '10-15-2018'
            },
            '543': {
                standardID: '345',
                assessmentID: '543',
                date: '10-10-2017'
            }
        };

        expect(helpers.getAssessmentArrayByStandard(assessments, '098')).toEqual(
            [
                {
                    standardID: '098',
                    assessmentID: '123',
                    date: '10-10-2018'
                },
                {
                    standardID: '098',
                    assessmentID: '234',
                    date: '10-12-2018'
                },
                {
                    standardID: '098',
                    assessmentID: '456',
                    date: '10-15-2018'
                }
            ]
        );

        expect(helpers.getAssessmentArrayByStandard(assessments, '092')).toEqual(
            [
                {
                    standardID: '092',
                    assessmentID: '345',
                    date: '10-14-2018'
                }
            ]
        );
    })
})

describe('convertObjToArray', () => {
    it('handles empty object and returns empty array', () => {
        const emptyObj = {};
        expect(helpers.convertObjToArray(emptyObj)).toEqual([]);
    })

    it('handles null object and returns empty array', () => {
        const nullObj = null;
        expect(helpers.convertObjToArray(nullObj)).toEqual([]); 
    })

    it('handles undefined object and returns empty array', () => {
        const undefinedObj = undefined;
        expect(helpers.convertObjToArray(undefinedObj)).toEqual([]);
    })

    it('handles object with items and returns array with items', () => {
        const normObj = {
            'a': {
                'a': 1,
                'b': 2
            },
            'b': {
                'b': 3,
                'd': 4
            },
            'c': {
                'c': 5,
                'e': 6
            }
        };
        
        expect(helpers.convertObjToArray(normObj)).toEqual( [
            {
                'a': 1,
                'b': 2
            },
            {
                'b': 3,
                'd': 4
            },
            {
                'c': 5,
                'e': 6
            }
        ])
    })
})

describe('addStandardNameToAssessments', () => {
    it('handles empty assessment array and returns empty array', () => {
        const assessmentsArray = [];
        const standards = {
            a: {
                standardID: 'a',
                standardName: 'A'
            },
            b: {
                standardID: 'b',
                standardName: 'B'
            },
            c: {
                standardID: 'c',
                standardName: 'C'
            }
        };
        
        expect(helpers.addStandardNameToAssessments(assessmentsArray, standards)).toEqual([])
    })

    it('handles object with items without standards and returns unchanged array', () => {
        const assessmentsArray = [
            {
                standardID: 'a',
                standardName: ''
            },
            {
                standardID: 'b'
            }
        ];

        const standards = {};
        expect(helpers.addStandardNameToAssessments(assessmentsArray, standards)).toEqual(
            assessmentsArray
        )
        
    })

    it('handles object with items with partial standards and returns unchanged array', () => {
        const assessmentsArray = [
            {
                standardID: 'a',
                standardName: ''
            },
            {
                standardID: 'b'
            }
        ];

        const standards = {
            a: {
                standardID: 'a',
                standardName: 'A'
            }
        };
        expect(helpers.addStandardNameToAssessments(assessmentsArray, standards)).toEqual(
            [
                {
                    standardID: 'a',
                    standardName: 'A'
                },
                {
                    standardID: 'b'
                }
            ]
        )
        
    })

    it('handles object with items with standards and returns proper array', () => {
        const assessmentsArray = [
            {
                standardID: 'a',
                standardName: ''
            },
            {
                standardID: 'b'
            }
        ];
        const standards = {
            a: {
                standardID: 'a',
                standardName: 'A'
            },
            b: {
                standardID: 'b',
                standardName: 'B'
            },
            c: {
                standardID: 'c',
                standardName: 'C'
            }
        };
        
        expect(helpers.addStandardNameToAssessments(assessmentsArray, standards)).toEqual([
            {
                standardID: 'a',
                standardName: 'A'
            },
            {
                standardID: 'b',
                standardName: 'B'
            }
        ])
    })

})

describe('convertCriteriaGradeToNumber', () => {
    it('handles invalid maxGrade', () => {
        expect(helpers.convertCriteriaGradeToNumber('-','+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('','+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('String','+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('8','+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber([],'+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber({},'+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(null,'+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(undefined,'+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(() => {}, '+')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(0,1)).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(-2,1)).toBe(-1);
    })

    it('handles invalid grade', () => {
        expect(helpers.convertCriteriaGradeToNumber('+','_')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+','string')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+','')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+','9')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+',[])).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+',{})).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+', null)).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber('+', undefined)).toBe(-1);


        expect(helpers.convertCriteriaGradeToNumber(10,'-')).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(10, [])).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(10,{})).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(10, null)).toBe(-1);
        expect(helpers.convertCriteriaGradeToNumber(10, undefined)).toBe(-1);        
    })

    it('handles all criteria grades', () => {
        expect(helpers.convertCriteriaGradeToNumber('+','+')).toBe(2);
        expect(helpers.convertCriteriaGradeToNumber('+', '~')).toBe(1);
        expect(helpers.convertCriteriaGradeToNumber('+', '-')).toBe(0);
    })

    it('handles percentage grades', () => {
        expect(helpers.convertCriteriaGradeToNumber(10, 10)).toBe(2);
        expect(helpers.convertCriteriaGradeToNumber(10, 8)).toBe(2);
        expect(helpers.convertCriteriaGradeToNumber(10, 7)).toBe(1);
        expect(helpers.convertCriteriaGradeToNumber(10, 2.5)).toBe(1);
        expect(helpers.convertCriteriaGradeToNumber(10, 2.4)).toBe(0);
        expect(helpers.convertCriteriaGradeToNumber(10, 1)).toBe(0);
    })
})

describe('flattenAssessmentsStructure', () => {
    it('handles when assessment obj is not an obj', () => {
        expect(helpers.flattenAssessmentsStructure(null)).toEqual([]);
        expect(helpers.flattenAssessmentsStructure(['some', 'thing'])).toEqual([]);
        expect(helpers.flattenAssessmentsStructure(undefined)).toEqual([]);
        expect(helpers.flattenAssessmentsStructure(43)).toEqual([]);
        expect(helpers.flattenAssessmentsStructure('string')).toEqual([]);
        expect(helpers.flattenAssessmentsStructure(()=>{ return 0})).toEqual([]);
    })

    it('handles assessments obj that are empty', () => {
        const assessments = {};
        expect(helpers.flattenAssessmentsStructure(assessments)).toEqual([]);
    })

    it('handles standards obj that are empty', () => {
        const assessments = {
            aa: {

            },
            bb: {
        
            }
        };
        expect(helpers.flattenAssessmentsStructure(assessments)).toEqual([]);
    })
    it('handles assessments obj with items properly', () => {
        const assessments = {
            aa: {
                a: {
                    A: 'something',
                    B: 'new'
                },
                b: {
                    A: 'random',
                    B: 'again'
                }
            },
            bb: {
                a: {
                    A: 'exactly'
                },
                b: {

                }
            }
        };
        expect(helpers.flattenAssessmentsStructure(assessments)).toEqual(
            [
                {
                    A: 'something',
                    B: 'new'
                },
                {
                    A: 'random',
                    B: 'again'
                },
                {
                    A: 'exactly'
                },
                {}
            ]
        )
    })
})

describe('letterIndexToChar', () => {
    it('handles invalid input', () => {
        expect(helpers.letterIndexToChar('')).toBeNull();
        expect(helpers.letterIndexToChar('4')).toBeNull();
        expect(helpers.letterIndexToChar(null)).toBeNull();
        expect(helpers.letterIndexToChar(undefined)).toBeNull();
        expect(helpers.letterIndexToChar([])).toBeNull();
        expect(helpers.letterIndexToChar({})).toBeNull();
        expect(helpers.letterIndexToChar(()=>{ return 0})).toBeNull();
        expect(helpers.letterIndexToChar(-2)).toBeNull();
        expect(helpers.letterIndexToChar(28)).toBeNull();
    })

    it('handles proper input and returns appropriate values', () => {
        expect(helpers.letterIndexToChar(0)).toBe('A');
        expect(helpers.letterIndexToChar(26)).toBe('Z');
        expect(helpers.letterIndexToChar(14)).toBe('Ñ');
    })
})