/*Chapter 4- Eloquent Java Script*/



//Questão 1
const range=(start,end,step=(start<end)?1:(-1))=> {
  let array=[];
  if(step>0)
    for(let i=start;i<=end;i+=step)
        array.push(i);
  else if(step<0)
          for(let i=start;i>=end;i+=step)
              array.push(i);
    
  return array;
}

function sum(numbers){
  let sum=0;
  for(let number of numbers)
    sum+=number;
  return sum;
}
  

//Questão 2
function reverseArray(array){
  let newArray=[];
  for(let variavel of array)
    newArray.unshift(variavel);
  return newArray;
}

function reverseArrayInPlace(array){
  
  for(let i=0,j=array.length-1;i<Math.floor(array.length/2);i++,j--){
      let aux=array[i];
      array[i]=array[j];
      array[j]=aux;
  }
}
 



 //Questão 3
function arrayToList(array){
  let list={ value : array[array.length-1],
             rest : null};
  
  for(let i=array.length-2;i>=0;i--){
    list= {value: array[i],
           rest: list};
    
   /*if I make this atribuition by 
     list.value=array[i]
     list.rest=list
     it does not work. Why?
   */
    
  }

  return list;
}

function listToArray(list){
  let array=[];
 for(let node=list; node ;node=node.rest)
    array.push(node.value);
  
  return array;  
  
}

function prepend(element,list){
  return {value: element,
          rest: list
         }
}

function nth(list,index){
  
  for(let node=list,i=0; node; node=node.rest,i++)
    if(i==index)
      return node.value;
}

/*function nth(list,index){
  if(!index)
    return list.value;
  else
    return nth(list.rest,index-1);
}*/


//Questão 4
function deepEqual(obj1,obj2){
  if(typeof(obj1)!="object" || typeof(obj2)!="object") {
    console.log(typeof(obj1));
    console.log(typeof(obj2));
    console.log(obj1);
    console.log(obj2);
    
    return obj1===obj2;
  }
  else if(obj1==null || obj2==null)
         return obj1===obj2;
       else {
         let prop1=Object.keys(obj1);
         let prop2=Object.keys(obj2);
         
         console.log(prop1);
         console.log(prop2);
         
        
           for(let i=0; i<prop1.length ;i++)
           {
             if(prop1[i]!=prop2[i]){
               console.log("F");
               return false;
             }
             else { 
               console.log("T");
               return deepEqual(obj1[prop1[i]],obj2[prop2[i]]);
             }
             
           }
         
         
         }
         
       
}
