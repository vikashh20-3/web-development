alert('file added')
a = Math.round(1.3)
console.log(a);
console.log(Math.round(2.9));
console.log(Math.round(3.9));


console.log("hello")

console.log(typeof 'hello')
console.log(typeof 2)
a = 'hello' + 3
console.log(a)
// It is called type coercion
//automatically type conversion of 3 from number to string 

b = '$'
console.log(b + (20.95 + 7.99))
// this can by give us the incorrect answer because float can may vary different answers
// so to overcome this we use 
console.log(b + (2095 + 799) / 100)

console.log(typeof b + (2095 + 799) / 100)


// To achieve interpolation in the string we use this backtick string 
// interpolation means directly inserting the value of other variables into the string 
console.log(`${b}`)