const numbers = [ 10, 20, 30, 40, 50 ];

function duplicateValue (num) {
    return num * 2;
}

function sumElements (sumSoFar, currentArrayElement) {
  return sumSoFar + currentArrayElement;
}

const sumOfMultiples = numbers //     [ 10,  20,  30,  40,   50 ] 
  .map(duplicateValue)         //     [ 20,  40,  60,  80,  100 ]
  .reduce(sumElements, 0);        // 300 = 20 + 40 + 60 + 80 + 100