//Typeof of variables

const firstName="Yashi";
const lastName="verma";

console.log(firstName, typeof firstName);
console.log(lastName, typeof lastName);


let age=20;
console.log(age , typeof age);

let answer=true;
console.log(answer , typeof answer);

let a = null;
console.log(a , typeof a);   //special case 

let course ;
console.log(course , typeof course);


//array

const arr=[1,2,3,4,5];
console.log(arr , typeof arr);  


let person = {
    name1 : "Nina",
    age1 :  24,
    eligible1 : true,
    course1 : 'Y',
    
};
console.log(person , typeof person);
console.log(person.course1 , typeof person.course1);
console.log(person.age1 , typeof person.age1);


//Stack and heap 

let name ="Jerry";
let newName = name;       //for primitive (for normal variables   stored in stack)
newName="Ben10";

console.log(name , newName);


let p = {               //for reference dt(object ,fun,array stored inn heap )
     nameP:"Rose",  
     agep:30,
};

let newP =  p.nameP;
p.nameP="Harry";    //Phele walaname bhi change and current name bhi change )
let ag=p.agep;        //becoz heap me stored
p.agep=66;
console.log(p,newP);
console.log(p,ag);















