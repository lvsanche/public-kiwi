import * as formatters from './miscFormatters';

describe('makeDictFromCountingString', () => {
    it('handles invalid input', () => {
        expect(formatters.makeDictFromCountingString('asdfb,asdf-3d')).toEqual({});
        expect(formatters.makeDictFromCountingString('23-12-32')).toEqual({});
        expect(formatters.makeDictFromCountingString(',-,-,')).toEqual({});
        expect(formatters.makeDictFromCountingString('  ,   ')).toEqual({});
        expect(formatters.makeDictFromCountingString('-')).toEqual({});
        expect(formatters.makeDictFromCountingString('-1-10, ')).toEqual({});
        expect(formatters.makeDictFromCountingString(', , ')).toEqual({});
        expect(formatters.makeDictFromCountingString('3-1, 2-2')).toEqual({});
    })

    it('handles properly formatted strings', () => {
        expect(formatters.makeDictFromCountingString('0-5')).toEqual({
            "0": true,
            "1": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
        });
        expect(formatters.makeDictFromCountingString('0,1,2,3,4,5')).toEqual({
            "0": true,
            "1": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
        });
        expect(formatters.makeDictFromCountingString('0-2,1-4,3-5')).toEqual({
            "0": true,
            "1": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
        });
        expect(formatters.makeDictFromCountingString('0,1,2,3,4,5,0-5')).toEqual({
            "0": true,
            "1": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
        });
    })
})

describe('countingFromString', () => {
    it('handles invalid strings', () => { 
        expect(formatters.countingFromString('asdfb,asdf-3d')).toBe(0);
        expect(formatters.countingFromString('23-12-32')).toBe(0);
        expect(formatters.countingFromString(',-,-,')).toBe(0);
        expect(formatters.countingFromString('  ,   ')).toBe(0);
        expect(formatters.countingFromString('-')).toBe(0);
        expect(formatters.countingFromString('-1-10, ')).toBe(0);
        expect(formatters.countingFromString(', , ')).toBe(0);
        expect(formatters.countingFromString('3-1, 2-2')).toBe(0);
    })
    it('handles properly formatted strings', () => {
        expect(formatters.countingFromString('0-5')).toBe(6);
        expect(formatters.countingFromString('0,1,2,3,4,5')).toBe(6);
        expect(formatters.countingFromString('0-2,1-4,3-5')).toBe(6);
        expect(formatters.countingFromString('0,1,2,3,4,5,0-5')).toBe(6);
    })
})

describe('isCountingStringValid', () => {
    it('returns false for invalid string', () => {
        expect(formatters.isCountingStringValid('asdfb,asdf-3d')).toBeFalsy();
        expect(formatters.isCountingStringValid('23-12-32')).toBeFalsy();
        expect(formatters.isCountingStringValid(',-,-,')).toBeFalsy();
        expect(formatters.isCountingStringValid('  ,   ')).toBeFalsy();
        expect(formatters.isCountingStringValid('-')).toBeFalsy();
        expect(formatters.isCountingStringValid('-1-10, ')).toBeFalsy();
        expect(formatters.isCountingStringValid(', , ')).toBeFalsy();
        expect(formatters.isCountingStringValid('3-1, 2-2')).toBeFalsy();
    })
    it('returns true for valid string', () => {
        expect(formatters.isCountingStringValid('0-5')).toBeTruthy();
        expect(formatters.isCountingStringValid('0,1,2,3,4,5')).toBeTruthy();
        expect(formatters.isCountingStringValid('0-2,1-4,3-5')).toBeTruthy();
        expect(formatters.isCountingStringValid('0,1,2,3,4,5,0-5')).toBeTruthy();
    })
})

describe('randomBarColorMaker', () => {
    it('returns object with label and random backgroundColor', () => {
        const testObj = formatters.randomBarColorMaker('Random');
        expect(testObj.label).toBe('Random');
        expect(testObj.backgroundColor).toMatch(/rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},0.5\)/)
    })
})

describe('barColorSelector', () => {
    it('returns object with label and first backgroundColor with index 0', () => {
        expect(formatters.barColorSelector('Random', 0)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(255,0,0,0.5)'
        })
    })
    it('returns object with label and second backgroundColor with index 1', () => {
        expect(formatters.barColorSelector('Random', 1)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(255,255,0,0.5)'
        })
    })
    it('returns object with label and third backgroundColor with index 2', () => {
        expect(formatters.barColorSelector('Random', 2)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(0,255,0,0.5)'
        })
    })
    it('returns object with label and third backgroundColor with index 3', () => {
        expect(formatters.barColorSelector('Random', 3)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(105,77,117,0.5)'
        })
    })
    it('returns object with label and third backgroundColor with index 4', () => {
        expect(formatters.barColorSelector('Random', 4)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(255,74,28,0.5)'
        })
    })
    it('returns object with label and third backgroundColor with index 5', () => {
        expect(formatters.barColorSelector('Random', 5)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(30,88,117,0.5)'
        })
    })
    it('returns object with label and third backgroundColor with index 6', () => {
        expect(formatters.barColorSelector('Random', 6)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(159,194,204,0.5)'
        })
    })
    it('returns object with label and third backgroundColor with index 7', () => {
        expect(formatters.barColorSelector('Random', 7)).toEqual({
            label: 'Random',
            backgroundColor: 'rgba(209,240,177,0.5)'
        })
    })
})

describe('countingLabelMaker', () => {
    it('handles random input for max num', () => {
        expect(formatters.countingLabelMaker('')).toEqual([]);
        expect(formatters.countingLabelMaker(()=>{ return 0})).toEqual([]);
        expect(formatters.countingLabelMaker(0)).toEqual([]);
        expect(formatters.countingLabelMaker(-1)).toEqual([]);
    })
    it('handles creation of array of strings enumerating from 0 - maxNum', () => {
        expect(formatters.countingLabelMaker(3)).toEqual([
            '0', '1', '2', '3'
        ])
    })
})