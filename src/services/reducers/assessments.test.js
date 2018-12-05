import reducer from './assessments';

describe('assessments reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {}
        )
    })

    it('should handle invalid type', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                }
            }, {
                type: 'NONE_SENSE',
                date: '2018-10-19'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
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

    it('should handle CLEAR_ASSESSMENTS', () => {
        expect(reducer(
            {}, 
            {
                type: 'CLEAR_ASSESSMENTS'
            }
        )).toEqual(
            {}
        )

        expect(reducer(
            {
                assessmentID: '4567asdfjkasf',
                standardID: 'asdfajsdf8412394',
                date: '2018-10-13',
                maxGrade: '+',
                standardName: 'Some Random Name'
            },
            {
                type: 'CLEAR_ASSESSMENTS'
            }
        )).toEqual(
            {}
        )
    })

    it('should handle SET_UP_ASSESSMENTS empty initial state', () => {
        expect(reducer(
            {},
            {
                type: 'SET_UP_ASSESSMENTS',
                standardsObject: {
                    '56789': {},
                    'asdfa': {},
                    'eqrwe': {},
                    'zvxca23': {}
                }
            }
        )).toEqual(
            {
                '56789': {},
                'asdfa': {},
                'eqrwe': {},
                'zvxca23': {}
            }
        )
    })
    it('should handle SET_UP_ASSESSMENTS non-empty initial state', () => {
        expect(reducer(
            {
                '23443': {},
                'mvzxkj38': {},
                '7843bf': {}
            },
            {
                type: 'SET_UP_ASSESSMENTS',
                standardsObject: {
                    '56789': {},
                    'asdfa': {},
                    'eqrwe': {},
                    'zvxca23': {}
                }
            }
        )).toEqual(
            {
                '56789': {},
                'asdfa': {},
                'eqrwe': {},
                'zvxca23': {},
                '23443': {},
                'mvzxkj38': {},
                '7843bf': {}
            }
        )
    })

    it('should handle ADD_ASSESSMENT single empty standard obj', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {

                }
            },
            {
                type: 'ADD_ASSESSMENT',
                assessmentID: '4567asdfjkasf',
                standardID: 'asdfajsdf8412394',
                date: '2018-10-13',
                maxGrade: '+',
                standardName: 'Some Random Name'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
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
    it('should handle ADD_ASSESSMENT mutliple empty & filled standard objs', () => {
        expect(reducer(
            {
                'a9087jkg': {
                    'kvnasf': {
                        assessmentID: 'kvnasf',
                        standardID: 'a9087jkg',
                        date: '2019-01-31',
                        maxGrade: '10',
                        standardName: 'Another Name'
                    }
                },
                'asdfajsdf8412394': {
                    
                },
                'asfjuei1238': {

                }
            },
            {
                type: 'ADD_ASSESSMENT',
                assessmentID: '4567asdfjkasf',
                standardID: 'asdfajsdf8412394',
                date: '2018-10-13',
                maxGrade: '+',
                standardName: 'Some Random Name'
            }
        )).toEqual(
            {
                'a9087jkg': {
                    'kvnasf': {
                        assessmentID: 'kvnasf',
                        standardID: 'a9087jkg',
                        date: '2019-01-31',
                        maxGrade: '10',
                        standardName: 'Another Name'
                    }
                },
                'asdfajsdf8412394': {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                },
                'asfjuei1238': {

                }
            }
        )
    })
    it('should handle ADD_ASSESSMENT adding to non-empty standard obj', () => {
        expect(reducer(
            {
                'a9087jkg': {
                    'kvnasf': {
                        assessmentID: 'kvnasf',
                        standardID: 'a9087jkg',
                        date: '2019-01-31',
                        maxGrade: '10',
                        standardName: 'Another Name'
                    }
                },
                'asdfajsdf8412394': {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    }
                },
                'asfjuei1238': {

                }
            },
            {
                type: 'ADD_ASSESSMENT',
                assessmentID: '2345678',
                standardID: 'asdfajsdf8412394',
                date: '2018-12-29',
                maxGrade: '28',
                standardName: 'Double Up Random'
            }
        )).toEqual(
            {
                'a9087jkg': {
                    'kvnasf': {
                        assessmentID: 'kvnasf',
                        standardID: 'a9087jkg',
                        date: '2019-01-31',
                        maxGrade: '10',
                        standardName: 'Another Name'
                    }
                },
                'asdfajsdf8412394': {
                    '4567asdfjkasf': {
                        assessmentID: '4567asdfjkasf',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-10-13',
                        maxGrade: '+',
                        standardName: 'Some Random Name'
                    },
                    '2345678': {
                        assessmentID: '2345678',
                        standardID: 'asdfajsdf8412394',
                        date: '2018-12-29',
                        maxGrade: '28',
                        standardName: 'Double Up Random'
                    }
                },
                'asfjuei1238': {

                }
            }
        )
    })
})