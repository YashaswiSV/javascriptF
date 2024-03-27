// ===========================Events===============================================


function display(){
    alert ("This is an event ");
}
// let mybtn =document.getElementById("btn");
// mybtn.addEventListener("click" , ()=>  {
//     alert ("This is an another event");
// });

document.getElementById("btn").addEventListener("click",display1);

// function display1(){
//     alert("THis is a new event");
// }

// ====================Display date on html page==================

let mydate = new Date();

function display1(){
    document.getElementById("demo").innerHTML=mydate;
}
console.log(Date());            // displayed on console

