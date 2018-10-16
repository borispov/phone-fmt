# Phone-fmt
### Israeli mobile number formatter

This is a small module meant to check if a number is a valid number and convert it to a standard convention.

## Usage

var phoneFmt = require('./phone-fmt')

var num = '0505-999-000' // Fake num for Example. 

var formattedNum = phoneFmt(num)

output should be '+972 50 599-9000'

## testing 

run npm test, check the test file inside tests folder to see the test I implemented. 

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.