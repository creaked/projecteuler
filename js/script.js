//prob1 vars
var a = new Array();
var b = new Array();
var totalthree = 0;
var totalfive = 0;

//prob2 vars
var pre = 1;
var now = 1;
var num = 0;
var sum = 0;

//prob3 vars
var prime = new Array();
var number = 600851475143;
var summon = 0;

//problem 1
var prob1 = function() {
  for (var mult = 0; mult < 1000; mult++) {
    if (mult % 3 == 0) {
      a.push(mult);
      totalthree += mult;
    } else if (mult % 5 == 0) {
      b.push(mult);
      totalfive += mult;
    }
  }
  console.log('total for three: ' + totalthree);
  console.log('total for five: ' + totalfive);
  console.log(totalthree + totalfive)
}


//problem 2
var prob2 = function() {
  while (num < 4000000){
    if(num % 2 === 0) {
      sum += num
    }

    num = pre + now;
    pre = now;
    now = num;
  }
  console.log('Problem 2 SUM: ' + sum);
}

//problem 3
var prob3 = function() {
  for (var i=2; i <= number; i++) {
    while(number % i === 0) {
      prime[prime.length] = i;
      number /= i;
    }
  }
  summon = prime[prime.length - 1];
  console.log('The largest prime factor is ' + summon);
}

prob1();
prob2();
prob3();