let num1 = parseInt(prompt("Nhập số thứ nhất"));
let num2 = parseInt(prompt("Nhập số thứ 2"));
let num3 = parseInt(prompt("Nhập số thứ 3"));
let num4 = parseInt(prompt("Nhập số thứ 4"));
let greatestCommonDivisor = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
  return a;
};
let smallestCommonMultiple = (num1, num2, num3, num4) => {
    let gcd1 = greatestCommonDivisor(num1, num2);
    let gcd2 = greatestCommonDivisor(num3, num4);
    let lcm1 = (num1 * num2) / gcd1;
    let lcm2 = (num3 * num4) / gcd2;
    let lcmFinal = (lcm1 * lcm2) / greatestCommonDivisor(lcm1, lcm2);
    return lcmFinal;
};
console.log(smallestCommonMultiple(num1, num2, num3, num4));