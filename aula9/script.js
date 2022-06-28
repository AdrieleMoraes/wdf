//laço de repetição for
/*for(let i=0; i<10; i++){
    console.log(i);
}

var numbers="";
for(let i=0; i<10; i++){
   numbers += i;

   if(i!=9){
        numbers+='-';
   }
}
console.log(numbers);*/

//laço de repetição while
/*var numbers="";
var i=0;
while(i < 10){
    numbers+=i;

    if(i!=9){
        numbers+='-';
    }

    i++;
}
console.log(numbers);*/

//laço de repetição do while
/*var numbers="";
var i=0;
do {
    numbers += i;
    if(i!=9){
        numbers+='-';
    }
    i++;
}while(i < 10);

console.log(numbers);*/

let person={
    name:'Ana',
    age: 18,
    city: 'New York'
}

for(key in person){
    console.log(person.age);
}