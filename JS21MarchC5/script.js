//function declarartion

/* function cube(cub){
    return cub*cub*cub;

}

//function call

cube(2);

let result=cube(2);                 
console.log(result);

document.getElementById("demo").innerHTML=result;
window.alert("Good job");
*/

//name

function display(fname,lname){
return fname+" "+lname;
}

display("Yashi", "Verma");
console.log(display("Yashi", "Verma"));

document.querySelector("h2.name").innerHTML=display("Yashi", "Verma");
document.querySelector("h2.name").style.fontSize="100px";


//=====================Function Expression============================== 

const display1 = function (fname , lname){
return fname +" "+lname;
}

console.log(display1("harry","singh"));



//=============function===============

let num1=100;
let num2=100;
let num3=100;

function multiply(num1,num2,num3){
    return num1*num2*num3;
}

let result1=multiply(num1,num1,num3);
console.log(result1);





















