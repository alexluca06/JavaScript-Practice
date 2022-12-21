# How to use MOCHA Framework to test your code!

## Description:

I created a simple class named Calculator(Path: ./calculator.js) with four
methods(add(), sub(), mul(), div()) to see how the Mocha framework works.
It's a basic code, but not the complexity is the point!

In test.js file I used Mocha Framework to test the methods from Calculator
class, if they work properly. Also, to verify the results I used 'assert'
to be more clearly in what I'm doing in the code!

## Setup:

1. npm init
2. npm install mocha -D
3. ./node_modules/mocha/bin/mocha || npm test

To run using npm test:

    For a easy run, go in the package.json file and set the value of 'test' to  
    mocha:
    
        "scripts": {
            "test":"mocha"
        }
