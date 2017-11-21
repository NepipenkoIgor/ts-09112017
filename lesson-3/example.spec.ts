import { isInArray } from '../lesson-2/anton_k/tasks';
import { expect } from 'chai';

describe('isInArray function ', () => {
    it('should return false ', () => {
        const result: boolean = isInArray([1, 2, 3], 3, 4, 5);
        expect(result).to.equal(false);
    });
    it('should return true ', () => {
        const result: boolean = isInArray([1, 2, 3], 2, 3, 1);
        expect(result).to.equal(true);
    });
});