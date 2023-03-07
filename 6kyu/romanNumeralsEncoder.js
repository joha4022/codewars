function solution(number){
    var result = '',
        numberList = [1000,900,500,400,100,90,50,40,10,9,5,4,1],
        romanNumerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    
    numberList.map(function (element, index){
        while (number>= element) {
            //+= concatenation
            result += romanNumerals[index];
            number -= element;
        }
    })
    return result;
  }

  console.log(solution(4), solution(1992), solution(9));
