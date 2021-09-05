// divide 3
function divide3(num){
for(let i = 0; i <= num ; i+1 ){
if (i % 3 === 0 ){
console.log(i)
}
}
}
divide3(100)

//range between numbers

function range(num1,num2){
    for(let i = num1; i <= num2; i++){
        console.log(i)
        
    }
}
range(10,30)

//prime numbers

function pNum(num1){
    for(let i = 1; i < num1 ; i++){
        if(num1 % i == 1){
          return "Prime Number"
        }else{
            return "Not A Prime Number"
       
            
        }
    }
    
} console.log (pNum(18))


//sum of num1 to num2

function sum(num1 , num2){
   if(num2 % num1 === 0 ){
   return true
   }else{
       return false
   }
}
console.log(sum(16,4))




    
    

    


    
