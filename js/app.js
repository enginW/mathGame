let num1,num2,operator,result,answer,truee=0,falsee=0;

    num1=document.getElementById("num1");
    num2=document.getElementById("num2");
    operator=document.getElementById("operator");
    result=document.getElementById("result");
    answer=document.getElementById("answer");
    truee=document.getElementById("truee");
    falsee=document.getElementById("falsee");

    //Random number function

    function randomNumber(min,max){
        let number=Math.floor((Math.random()*(max-min))+min);
        return number;
    }
    function newQuestion(){
        let operation=["+","-","*","/"];
        operator.textContent=operation[randomNumber(0,4)];
        num1.textContent=randomNumber(0,50);
        num2.textContent=randomNumber(0,50);
        if(operator.textContent=="/"){
            while(true){
                num2.textContent=randomNumber(0,50);
                if(num1.textContent%num2.textContent==0){
                    break;
                }
            }
        }
    }
    window.onload=function(){
        newQuestion();
    }
    answer.onclick=function(){
        let ans,n1,n2;
        n1=Number(num1.textContent);
        n2=Number(num2.textContent);
        switch(operator.textContent){
            case "+":ans=n1+n2;break;
            case "-":ans=n1-n2;break;
            case "*":ans=n1*n2;break;
            case "/":ans=n1/n2;break;
            default:break;
        }
        if(result.value==ans){
            truee.textContent=Number(truee.textContent)+1;
        }else{
            falsee.textContent=Number(falsee.textContent)+1;
        }
        newQuestion();
    }