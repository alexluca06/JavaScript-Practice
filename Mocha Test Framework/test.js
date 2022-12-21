/**
 *      We will test the methods from Calculator class using Mocha Framework.
 * The code from Calculator class is basic, but I just want to see how the
 * framework works!
 */

// Imports
const assert = require('assert');
const Calculator = require('./calculator');

describe('Calculator class', () => {

    const calculator = new Calculator();
    
    describe('add method', () => {
        it('returns for add(2, 3) should be 5', () => {

            // Setup
            //const calculator = new Calculator();
            const input1 = 2;
            const input2 = 3;
            const expectedResult = 5;

            // Exercise
            const result = calculator.add(input1, input2);

            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('sub method', () => {
        it('returns for sub(9, 12) should be -3', () => {

            // Setup
            //const calculator = new Calculator();
            const input1 = 9;
            const input2 = 12;
            const expectedResult = -3;

            // Exercise
            const result = calculator.sub(input1, input2);

            // Verification
            assert.strictEqual(result, expectedResult);
            
        });
    });

    describe('mul method', () => {
        it('returns for mul(2, 3) should be 6', () => {

            // Setup
            //const calculator = new Calculator();
            const input1 = 2;
            const input2 = 3;
            const expectedResult = 6;

            // Exercise
            const result = calculator.mul(input1, input2);

            // Verification
            assert.strictEqual(result, expectedResult);
            
        });
    });

    describe('div method', () => {
        it('returns for div(10, 5) should be 2', () => {

            // Setup
            //const calculator = new Calculator();
            const input1 = 10;
            const input2 = 5;
            const expectedResult = 2;

            // Exercise
            const result = calculator.div(input1, input2);

            // Verification
            assert.strictEqual(result, expectedResult);
            
        });
    });
});