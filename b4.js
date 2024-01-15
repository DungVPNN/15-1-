let n = parseInt(prompt("Nhap n"));
var s = 0;
var p = 1
sum = 0;
for ( let i = 1; i <= n; i++){
    p = p*i;
    sum = s + p;
    console.log(sum);
}
