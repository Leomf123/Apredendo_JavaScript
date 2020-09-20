
//Respostas das questões do capit 3 dp livro Eloquent Java Script


//Questão 1
const min=(valor1,valor2)=>(valor1<valor2)?valor1:valor2;


//Questão 2
function isEven(number){
  if(number==0)
    return true;
  else if(number==1)
          return false;
       else if(number<0)//My way to fix this
               return;
  return isEven(number-2);
}



functions countChar(string,char){
  var count=0;
 for(let i=0;i<string.length;i++)
   if(string[i]==char)
     count++;
 return count;
   
}


//Questão 3
/*function countBs(word){
  let quant=0;
 for(let i=0;i<word.length;i++)
   if(word[i]=="B")
     quant++;
 return quant;
   
}*/
function countChar(word,char){
  let quant=0;
 for(let i=0;i<word.length;i++)
   if(word[i]==char)
     quant++;
 return quant;
   
}

const countBs=(word)=> countChar(word,"B");
  
