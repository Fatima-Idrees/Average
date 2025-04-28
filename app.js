console.log("Average Age of ten students");
let sum=0;
for( let i = 1; i <= 10;i++){
    let age=parseInt(prompt(`Enter age of student ${i}:` ));
    sum+=age;
}
let average=sum/10;
console.log(`Average age is: ${average}`);