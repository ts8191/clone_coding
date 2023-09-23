/*const a = 5;

console.log(5+2);
console.log(5*2);
console.log(5/2);*/
/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon , tue , wed, thu , fri , sat];
const nonsense = [1 , 2 , "hello", false , true , undefined , "nico"];

console.log(daysOfWeek, nonsense);
console.log(daysOfWeek[5]); // sat

daysOfWeek.push("sun");

console.log(daysOfWeek);
*/

/*
const player = {
    name: "nico",
    points: 10, 
    fat : true,
};


console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat= false;
console.log(player.fat);

player.lastname = "potato";
console.log(player.lastname); // potato
player.points = player.points + 15;
console.log(player.points); // 25  */


/*
function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson + " and I'm "+ age);
}

sayHello("nico", 10); // hello my name is nico
sayHello("dal", 20); 
sayHello("lynn", 21); 

function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a/b);
}
plus(); //nan
plus(8, 60); //68
divide(98, 20);

const player = {
    name : "nico",
    sayHello: function(otherPersonName){
        console.log("Hello! " + otherPersonName + " nice to meet you" );
    },
};

console.log((player.name));
player.sayHello("lynn");
player.sayHello("nico");*/


/*
const calculator = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a /b);
    },
    mutiply: function(a, b){
        console.log(a * b);
    },
    powerof: function(a, b){
        console.log(a ** b);
    },
};

calculator.plus(2, 2);
calculator.minus(3, 2);
calculator.divide(8, 4);
calculator.mutiply(5, 2);
calculator.powerof(4, 3);


*/


/*
const age = 96;
function calculateKrAge(ageOfForeeigner){
    return ageOfForeeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);


const calculator = {
    plus: function(a, b){
        return (a + b);
    },
    minus: function(a, b){
        return (a - b);
    },
    divide: function(a, b){
        return (a /b);
    },
    mutiply: function(a, b){
        return (a * b);
    },
    powerof: function(a, b){
        return (a ** b);
    },
};


const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const mutiplyResult = calculator.mutiply(10, minusResult);
const divideResult = calculator.divide(mutiplyResult, plusResult);
const powerResult = calculator.powerof(divideResult, minusResult);

*/

/*
const age = prompt("How old are you?"); // old
console.log(typeof "15", typeof parseInt ("15"));
*/

//const age = parseInt(prompt("How old are you?"));

/*const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); // false = number*/
/*
if(condition){
    /// condition === true

} else {
    /// condition === false
}*/




const age = parseInt (prompt("How old are you?"));

if(isNaN(age)|| age < 0){
    console.log("please write a real positive number");
} else if(age <18) {
    console.log("You are too young");
} else if (age >= 18 && age <=50){
    console.log("You can drink");
} else if (age > 50 && age <=80) {
    console.log("You should exercise");
} else if ( age === 100){
    console.log("wow You are wise ");
} else if (age > 80){
    console.log("You can do whtever you want");
} 
// !==



