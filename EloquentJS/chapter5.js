/* CHAPTER 5- Eloquent JavaScript */

//Questão 1
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce( (current,element) => current.concat(element) ) );


//Questão 2
function loop(start,test,update,body){
  
  for(let i=start; test(i); i=update(i))
      body(i);
  
}  
 

loop(3, n => n > 0, n => n - 1, console.log);

//Questão 3
/*function every(array, test) {
  // Your code here.
  for(let element of array)
    if(!test(element)) return false;
  return true;
}*/

const every = (array, test) => !array.some( n => !test(n) );


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


//Questão 4
function dominantDirection(text) {
  
  let directions=countBy(text, char => {
    let script=characterScript(char.codePointAt(0));
    return script?script.direction:"none";
  }).filter(({name})=>name!="none");
  
 return directions.reduce((current,element)=> 
                          (current.count>element.count)?
                          current.name:element.name,
                          {name:"none",count:0});
}
                          


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl