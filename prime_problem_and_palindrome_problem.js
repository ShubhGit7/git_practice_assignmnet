1.Identify prime no. or not


let num = 10;
let count = 0;
    for(let i=1;i<=num;i++){
        
        if (num%1==0){
            count++;
        }
    }if(count==2){
        console.log("Yes");
    }else{
        console.log("No");
    };




2.Identify given string is Palindrome or not

let str = "naman";
let sum1="";
   let sum2="";
   for(i=0;i<=str.length-1;i++){
       sum1+=str[i];
  }for(j=str.length-1;j>=0;j--){
      sum2+=str[i];
  }
  

if(sum1==sum2){
      console.log("Yes");
  }else{
      console.log("No");
  };
