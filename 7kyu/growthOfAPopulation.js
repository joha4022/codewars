// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

// p0 + p0 x percent + aug = p1
// p1 + p1 x percent + aug = p2 
// repeat this until px reaches p and find how many years it takes. 

//nbYear(1500, 5, 100, 5000) // 15 years;
//nbYear(1500000, 2.5, 10000, 2000000) // 10 years;
nbYear(1500000, 0.25, 1000, 2000000) // 94 years;

// aug (inhabitants coming or leaving each year)
// p (population to equal or surpass)

function nbYear(p0, percent, aug, p) {
    var p1 = p0;
    var years = 0;
    
    for (let i = p0; i <= p;) {
        p1 = p1 + (p1 * (percent/100)) + aug;
        i = p1;
        //console.log('population count: ' + i);
        years++;
        //console.log(years + ' year(s)');
    }
    return years;
}