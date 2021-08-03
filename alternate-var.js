//next we will not use var to declare variable. We use let and const to use variable.
// use Let to make normal variable that could change its value. LIke below
let price = 300;
console.log(price);
price = 200;
console.log(price);
price = 469;
console.log(price);
// use # Const # to make constant variable that value won't change at the entire program. So we will not declare any updatable variable using const. We will do it for non-changing value.
const name = "Lal Mia";
console.log(name);
name = "maji mia";
console.log(name);//expected : process exited with code 1. Because name is a const variable and we can't update its value.