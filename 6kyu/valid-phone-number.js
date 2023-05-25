// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
    let pn = phoneNumber.split('');
    let paran = pn[0] ===`(` && pn[4] ===`)`;
    let space = pn[5] === ` `;
    let dash = pn[9] === `-`;
    let length = pn.length === 14;

    return paran && space && dash && length ? true : false;
}

validPhoneNumber("(123) 456-7819")

// look into .test()