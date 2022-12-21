// Magic numbers

const A = 65;
const Z = 90;
const a = 97;
const z = 122;
const numberofletters = 26;

/**
 *      This class is the brain of the program. It encrypts texts using a shift value
 * that can be change using the setter: shiftValue. Also, it can decrypt texts using
 * the same shift value!
 */
class ShiftCipher {

    constructor(shiftValue) {
        this._shiftValue = shiftValue; // should not be accessed directly(use getter/setter)
    }

    get shiftValue () {
        return this._shiftValue;
    }

    set shiftValue (newShiftValue) {
        this._shiftValue = newShiftValue;
    }
    // Function uses to encrypt a text got it as a parameter:(string) -> string 
    encrypt(text) {

        let encryptedText = '';

        // Go through all letters of text
        for (let letter of text) {

            // transform the letter in uppercase and get the ascii code
            let asciiCode = letter.toUpperCase().charCodeAt(); 
            
            // If it's a letter, shift it! Else, do nothing!
            if(asciiCode >= A && asciiCode <= Z) {

                asciiCode += this._shiftValue;  // shift it
                
                // Verify if a character is shifted outside the alphabet 
                if(asciiCode - A < numberofletters) {

                  encryptedText += String.fromCharCode(asciiCode);

                } 
                else {

                  encryptedText += String.fromCharCode(asciiCode - numberofletters);
                
                } 
            }
            else {

                  encryptedText += String.fromCharCode(asciiCode);
                
            }
        } 
 
        return encryptedText;  // return the encrypted text

    }

    // Function uses to decrypt a text got it as a parameter: (string) -> string 
    decrypt(text) {

        let decryptedText = '';

        // Go through all letters of text
        for(let letter of text) {

            // transform the letter in lowercase and get the ascii code
            let asciiCode = letter.toLowerCase().charCodeAt();

            // If it's a letter, shift it! Else, do nothing!
            if(asciiCode >= a && asciiCode <= z) {

                asciiCode -= this._shiftValue; // shift it back!

                // Verify if a character is shifted outside the alphabet
                if(asciiCode >= a) {

                    decryptedText += String.fromCharCode(asciiCode);

                }
                else {
                
                    decryptedText += String.fromCharCode(asciiCode + numberofletters);
                } 
            }

            else {

                decryptedText += String.fromCharCode(asciiCode);
            
            }
        }

        return decryptedText;  // return decrypted text
  }
    
}


/**
 * Function used to test the code using some default tests!
 */
function test() {

    const cipher = new ShiftCipher(2);
    let encrypt1 = cipher.encrypt('I love to code!');
    if(encrypt1 === 'K NQXG VQ EQFG!') {
        console.log('Test 1(encrypt): passed!');
    } 
    else {
        console.log("Something doesn't work! This is your result: " + encrypt1 + " Correct result: K NQXG VQ EQFG!");
    }

    let encrypt2 = cipher.encrypt('z');
    if(encrypt2 === 'B') {
        console.log('Test 2(encrypt): passed!');
    } 
    else {
        console.log("Something doesn't work! This is your result: " + encrypt2 +"Correct result: B");
    }

    let decrypt1 = cipher.decrypt('K <3 OA RWRRA');
    if(decrypt1 === 'i <3 my puppy') {
        console.log('Test 1(decrypt): passed!');
    } 
    else {
        console.log("Something doesn't work! This is your result: " + decrypt1 + " Correct result: i <3 my puppy");
    }

    cipher.shiftValue = 3;
    let decrypt2 = cipher.decrypt('ABCDEFG');
    if(decrypt2 === 'xyzabcd') {
        console.log('Test 2(decrypt): passed!');
    } 
    else {
        console.log("Something doesn't work! This is your result: " + decrypt2 + " Correct result: xyzabcd");
    }


}

/* Create a more interactive test function: (typeOfTest, shiftValue, text, correctResult) -> console.log()
*typeOfTest = 'encrypt' || 'decrypt'
*/

const testAdvanced = function (typeOfTest, shiftValue, text, correctResult) {
    
    // Create ShiftCipher
    const cipher = new ShiftCipher(shiftValue);
    // Store the result
    let result = '';

    // Choose between encryption or decryption!
    if (typeOfTest === 'encrypt') {
        result = cipher.encrypt(text);
    } else if (typeOfTest === 'decrypt') {
        result = cipher.decrypt(text);
    } else {
        console.log("Your input is not correct! Choose between: 'encrypt' or 'decrypt'!");
        return;
    }

    if(correctResult === result) {
        console.log('Ooo, yees! You have passed the ' + typeOfTest + ' test!');
    } else {
        console.log("Ooo, nooo! You have failed the " + typeOfTest + " test...");
    }

}
// Call testAdvanced function!
/*
testAdvanced('encrypt', 2, 'I love to code!', 'K NQXG VQ EQFG!');
testAdvanced('decrypt', 3, 'ABCDEFG', 'xyzabcd');
*/

// Required for the mocha test framework

module.exports =  ShiftCipher;