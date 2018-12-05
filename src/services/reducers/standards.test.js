import reducer from './standards';

describe('standards reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {}
        )
    })

    it('should handle invalid type', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': 
                    {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                    }
            },
            {
                type: 'NONE_SENSE',
                date: '2018-10-19'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                        standardID: 'asdfajsdf8412394',
                        classID: 'yuio7890',
                        standardName: 'Some Random Name',
                        gradeType: 'criteria',
                        subject: 'math',
                        standardDetails: 'These are some of the details'
                }
            }
        )
    })

    it('should handle CLEAR_STANDARDS with empty state', () => {
        expect(reducer(undefined, 
            {
                type: 'CLEAR_STANDARDS'
            }
        )).toEqual(
            {}
        )
    })

    it('should handle CLEAR_STANDARDS with existing state', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                }
            }, 
            {
                type: 'CLEAR_STANDARDS'
            }
        )).toEqual(
            {}
        )
    })

    it('should handle ADD_STANDARD with empty state', () => {
        expect(reducer(undefined, 
            {
                type: 'ADD_STANDARD',
                standardID: 'asdfajsdf8412394',
                classID: 'yuio7890',
                standardName: 'Some Random Name',
                gradeType: 'criteria',
                subject: 'math',
                standardDetails: 'These are some of the details'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                }
            }
        )
    })

    it('should handle ADD_STANDARD with existing state', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                }
            }, 
            {
                type: 'ADD_STANDARD',
                standardID: '47294ruie',
                classID: 'yuio7890',
                standardName: 'Some New Random Name',
                gradeType: 'alphabet',
                subject: 'literacy',
                standardDetails: 'These are some of new details added'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                },
                '47294ruie': {
                    standardID: '47294ruie',
                    classID: 'yuio7890',
                    standardName: 'Some New Random Name',
                    gradeType: 'alphabet',
                    subject: 'literacy',
                    standardDetails: 'These are some of new details added'
                }
            }
        )
    })

    it('should handle ADD_STANDARD to replace standard', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                },
                '47294ruie': {
                    standardID: '47294ruie',
                    classID: 'yuio7890',
                    standardName: 'Some New Random Name',
                    gradeType: 'alphabet',
                    subject: 'literacy',
                    standardDetails: 'These are some of new details added'
                }
            }, 
            {
                type: 'ADD_STANDARD',
                standardID: '47294ruie',
                classID: 'yuio7890',
                standardName: 'Next Name',
                gradeType: 'alphabet',
                subject: 'reading',
                standardDetails: 'Changing the details'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                },
                '47294ruie': {
                    standardID: '47294ruie',
                    classID: 'yuio7890',
                    standardName: 'Next Name',
                    gradeType: 'alphabet',
                    subject: 'reading',
                    standardDetails: 'Changing the details'
                }
            }
        )
    })

    it('should handle EDIT_STANDARD with empty state', () => {
        expect(reducer(undefined, 
            {
                type: 'EDIT_STANDARD',
                standardID: 'asdfajsdf8412394',
                classID: 'yuio7890',
                standardName: 'Some Random Name',
                gradeType: 'criteria',
                subject: 'math',
                standardDetails: 'These are some of the details'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                } //this is never meant to happen in the application...
            }
        )
    })

    it('should handle EDIT_STANDARD with existing standard', () => {
        expect(reducer(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                },
                '47294ruie': {
                    standardID: '47294ruie',
                    classID: 'yuio7890',
                    standardName: 'Some New Random Name',
                    gradeType: 'alphabet',
                    subject: 'literacy',
                    standardDetails: 'These are some of new details added'
                }
            }, 
            {
                type: 'EDIT_STANDARD',
                standardID: '47294ruie',
                standardName: 'Next Name',
                gradeType: 'alphabet',
                subject: 'reading',
                standardDetails: 'Changing the details'
            }
        )).toEqual(
            {
                'asdfajsdf8412394': {
                    standardID: 'asdfajsdf8412394',
                    classID: 'yuio7890',
                    standardName: 'Some Random Name',
                    gradeType: 'criteria',
                    subject: 'math',
                    standardDetails: 'These are some of the details'
                },
                '47294ruie': {
                    standardID: '47294ruie',
                    classID: 'yuio7890',
                    standardName: 'Next Name',
                    gradeType: 'alphabet',
                    subject: 'reading',
                    standardDetails: 'Changing the details'
                }
            }
        )
    })

})