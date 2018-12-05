import reducer from './session';


const INITIAL_STATE = {
    authUser: null,
    teacherName: '',
    classID: null,
};

describe('session reducer', () => {
    it('should handle initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            INITIAL_STATE
        )
    })

    it('should handle invalid type', () => {
        expect(reducer(
            {
                authUser: null,
                teacherName: '',
                classID: null,
            },
            {
                type: 'NONSENSE',
                random: 'THINGS HERE'
            }
        )).toEqual(
            {
                authUser: null,
                teacherName: '',
                classID: null,
            }
        )
    })

    it('should handle SET_AUTH_USER empty state', () => {
        expect(reducer(
            undefined,
            {
                type: 'SET_AUTH_USER',
                authUser: {
                    id: 'asdfasdf',
                    key: '3678489143',
                    email: 'ajdf@fdas.com'
                }
            }
        )).toEqual({
            authUser: {
                id: 'asdfasdf',
                key: '3678489143',
                email: 'ajdf@fdas.com'
            },
            teacherName: '',
            classID: null,
        })
    })

    it('should handle SET_AUTH_USER exisitng state', () => {
        expect(reducer(
            {
                authUser: {
                    id: 'asdfasdf',
                    key: '3678489143',
                    email: 'ajdf@fdas.com'
                },
                teacherName: 'TEST',
                classID: 'afds',
            },
            {
                type: 'SET_AUTH_USER',
                authUser: {
                    id: 'mkmkaf',
                    key: '88192',
                    email: 'new@email.com'
                }
            }
        )).toEqual(
            {
                authUser: {
                    id: 'mkmkaf',
                    key: '88192',
                    email: 'new@email.com'
                },
                teacherName: 'TEST',
                classID: 'afds',
            }
        )
    })

    it('should handle SET_TEACHER_NAME empty state', () => {
        expect(reducer(
            undefined,
            {
                type: 'SET_TEACHER_NAME',
                teacherName: 'SOMETHIN NEW'
            }
        )).toEqual(
            {
                authUser: null,
                teacherName: 'SOMETHIN NEW',
                classID: null,
            }
        )
    })
    it('should handle SET_TEACHER_NAME existing state', () => {
        expect(reducer(
            {
                authUser: {
                    id: 'asdfasdf',
                    key: '3678489143',
                    email: 'ajdf@fdas.com'
                },
                teacherName: 'RANDOM',
                classID: 'afds',
            },
            {
                type: 'SET_TEACHER_NAME',
                teacherName: 'SOMETHIN NEW'
            }
        )).toEqual(
            {
                authUser: {
                    id: 'asdfasdf',
                    key: '3678489143',
                    email: 'ajdf@fdas.com'
                },
                teacherName: 'SOMETHIN NEW',
                classID: 'afds',
            }
        )

    })

    it('should handle SET_CLASS_ID empty state', () => {
        expect(reducer(
            undefined,
            {
                type: 'SET_CLASS_ID',
                classID: 'kjfsldfa'
            }
        )).toEqual(
            {
                authUser: null,
                teacherName: '',
                classID: 'kjfsldfa',
            }
        )
    })
    
    it('should handle SET_CLASS_ID existing state', () => {
        expect(reducer(
            {
                authUser: {
                    id: 'asdfasdf',
                    key: '3678489143',
                    email: 'ajdf@fdas.com'
                },
                teacherName: 'RANDOM',
                classID: 'afds'
            },
            {
                type: 'SET_CLASS_ID',
                classID: 'kjfsldfa'
            }
        )).toEqual(
            {
                authUser: {
                    id: 'asdfasdf',
                    key: '3678489143',
                    email: 'ajdf@fdas.com'
                },
                teacherName: 'RANDOM',
                classID: 'kjfsldfa'
            }
        )
    })
})