var a = parseInt(prompt("Nhap a"));
var b = parseInt(prompt("Nhap b"));
let sum = 0;
for (let i = 0; i < b; i++){
    if (i==a){
        continue;
    }
    sum+=i;
}
if ( sum % 2 ==0){
    console.log("Tong chan la:", sum);
}
if ( sum % 2 !=0) {
    console.log("Tong le la:", sum);
}