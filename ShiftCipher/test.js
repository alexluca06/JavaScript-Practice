// Imports
const assert = require('assert');
const ShiftCipher = require('./shiftCipher');



describe('Testing ShiftCipher class:', () => {
    
    const cipher = new ShiftCipher(2);
    
    describe('testing encrypt function:', () => {
        it('returns for encrypt("I love to code!") should be "K NQXG VQ EQFG!"', () => {
            // Setup
            const input = 'I love to code!';
            const expectedResult = 'K NQXG VQ EQFG!';

            // Exercise
            const result = cipher.encrypt(input);

            // Verification
            assert.strictEqual(result, expectedResult);
        });

        it('returns for encrypt("z") should be "B"', () => {
            // Setup
            const input = 'z';
            const expectedResult = 'B';

            // Exercise
            const result = cipher.encrypt(input);

            // Verification
            assert.strictEqual(result, expectedResult);
        });

        it('returns for encrypt(" ") should be " "', () => {
            // Setup
            const input = ' ';
            const expectedResult = ' ';

            // Exercise
            const result = cipher.encrypt(input);

            // Verification
            assert.strictEqual(result, expectedResult);
        });
    });

    describe('testing decrypt function:', () => {

        it('returns for decrypt("K <3 OA RWRRA") should be "i <3 my puppy"', () => {
            
            // Setup
            const input = 'K <3 OA RWRRA';
            const expectedResult = 'i <3 my puppy';

            // Exercise
            const result = cipher.decrypt(input);

            // Verification
            assert.strictEqual(result, expectedResult);
        });

        it('returns for decrypt("B") should be "z"', () => {
            
            // Setup
            const input = 'B';
            const expectedResult = 'z';

            // Exercise
            const result = cipher.decrypt(input);

            // Verification
            assert.strictEqual(result, expectedResult);
        });

        it('returns for decrypt(" ") should be " "', () => {
            
            // Setup
            const input = ' ';
            const expectedResult = ' ';

            // Exercise
            const result = cipher.decrypt(input);

            // Verification
            assert.strictEqual(result, expectedResult);
        });
    });
});

