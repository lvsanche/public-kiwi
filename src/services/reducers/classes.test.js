import reducer from './classes';

describe('classes reducer', () => {
    it('should handle initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {}
        )
    })

    it('should handle invalid type', () => {
        expect(reducer(
            {
                '67542': {
                    id: '67542',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School'
                }
            },
            {
                type: 'NONE_SENSE',
                date: '2018-10-19'
            }
        )).toEqual(
            {
                '67542': {
                    id: '67542',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School'
                }
            }
        )
    })

    it('should handle ADD_CLASS for empty class id', () => {
        expect(reducer(
            {
            },
            {
                type: 'ADD_CLASS',
                id: '67542',
                year: '2018',
                grade: 'preK',
                schoolName: 'Random School'
            }
        )).toEqual(
            {
                '67542' :{
                    id: '67542',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School'
                }
            }
        )
    })

    it('should handle ADD_CLASS to replace an existing class', () => {
        expect(reducer(
            {
                '67542' :{
                    id: '67542',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School'
                }
            },
            {
                type: 'ADD_CLASS',
                id: '67542',
                year: '2019',
                grade: 'kinder',
                schoolName: 'Best Random School'
            }
        )).toEqual(
            {
                '67542' :{
                    id: '67542',
                    year: '2019',
                    grade: 'kinder',
                    schoolName: 'Best Random School'
                }
            }
        )
    })
    
    it('should handle ADD_CLASS to add to existing classes object', () => {
        expect(reducer(
            {
                '67542' :{
                    id: '67542',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School'
                }
            },
            {
                type: 'ADD_CLASS',
                id: '5678',
                year: '2019',
                grade: 'kinder',
                schoolName: 'Best Random School'
            }
        )).toEqual(
            {
                '67542' :{
                    id: '67542',
                    year: '2018',
                    grade: 'preK',
                    schoolName: 'Random School'
                },
                '5678': {
                    id: '5678',
                    year: '2019',
                    grade: 'kinder',
                    schoolName: 'Best Random School'
                }
            }
        )
    })
    
})