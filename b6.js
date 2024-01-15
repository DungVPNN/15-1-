let a = parseInt(prompt("Nhap a"));
let b = 0;
let c = 1;
let s = 0;
for ( let i = 0; i < a; i++){
    s=b+c;
    b=c;
    c=s;
}
console.log(s);