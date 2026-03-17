//functions
function DoSomething(){}

export const DoThis = () => {
    return <div></div>;
}

<button onClick={()=>{

}}></button>

//ternary operator
let age = 10;
let name = age > 10 ? "Filip" : "Matej";

if (age > 10) {
    name = "Filip";
}else {
    name="Matej";
}

//Objects
const person = {
    name: "Filip",
    age:19,
    isMarried:false
};

const {name1,age2,isMarried} = person;

const me = {
    age1,
    name2
};

//okopci vsechno krome jmena
const person2 = {...person,name:"Matej"};

const names = ["Matej", "Filip","Nevim","Filip"];
const names2 = [...names,names[2] = "Lucinka"];
console.log(names2);

//neco jako foreach
names.map((name)=>{
    return name+"1" && <h1>{name}</h1>;
});

//vrat vsechno krome Filipa
names.filter((name)=>{
    return name !== "Filip";
})

//.reduce()