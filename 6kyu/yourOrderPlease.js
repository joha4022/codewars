// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

order("is2 Thi1s T4est 3a");

function order(words) {
    var x = words.split(' ');
    // global search for digits within a word
    var ex = /\d/g;
    // sorts the words in correct order by comparing the number within a word
    x.sort((a, b) => a.match(ex)-b.match(ex));
    return x.join(' ');
}