/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;

if (votingAge > votingAge) {
    console.log("True");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let var1 = 1;
let var2 = 2;
if(var2 = 2){
    var1++;
}
console.log("Variable 1: "+var1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");

//Task d: Write a function to multiply a*b 

multiply = function(a,b) {
    return a * b;
}
console.log("5 x 10 = " + multiply(5,10));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

dog_years = function(age) {
 return age * 7;
};
console.log("My age in dog years: "+dog_years(18));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dog_feeder(weight,age){
    if (age >= 1) {
        if (weight <= 5) {
            return weight * 0.05;
        }
        else if  (weight >= 6 && weight <= 10) {
            return weight * 0.04;
        }
        else if (weight >= 11 && weight <= 15) {
            return weight * 0.03;
        }
        else if (weight > 15); {
            return weight * 0.02;
        }
    }
    if (age > 0.16 && age < 0.33) {
        return weight * 0.1;
    }
    if (age >= 0.33 && age < 0.58) {
        return weight * 0.05;
    }
    if (age >= 0.58 && age < 1) {
        return weight * 0.04;
    }
}
console.log(dog_feeder(15,1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperSissors(choice){
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    if(computerChoice === 0){
        if (choice = 'paper'){
            return 'you win';
        }
        else {
            return 'you loose'
        }
    }
    else if(computerChoice === 1){
        if (choice = 'sissors'){
            return 'you win';
        }
        else {
            return 'you loose'
        }
    }
    else if(computerChoice === 2){
        if (choice = 'rock'){
            return 'you win';
        }
        else {
            return 'you loose'
        }
    }
}

console.log("Rock, paper, scissors -- " + rockPaperSissors('rock'));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function km_to_mi(km) {
    return km * 0.621371
}
console.log("1 km is "+km_to_mi(1),"miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ft_to_cm(ft) {
    return ft * 30.48;
}
console.log("1 ft is "+ft_to_cm(1),"cm");


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoying_song(starting_number) {
    for (var i = 0; starting_number > 0; starting_number--) {
        console.log(starting_number, " bottles of soda on the wall");
        console.log(starting_number, " bottles of soda. Take one down pass it around");
        console.log(starting_number -1, " bottles of soda on the wall");
    }
}
const num = 99;
annoying_song(num);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade_calculator(mark) {
    if(mark >= 90) {
        console.log("You got an A!");
    }else if(mark <= 89 && mark >= 80){
        console.log("You got a B");
    }else if(mark <= 79 && mark >= 70){
        console.log("You got a C");
    }else if(mark <= 69 && mark >= 60){
        console.log("You got a D");
    }else{
        console.log("You got an F ;(");
    }
}
  console.log(grade_calculator(69));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const vowel_list = ['a','e','i','o','u'];
let count = 0
function vowel_counter(word){
    for (let letter of word.toLowerCase()){
        if(vowel_list.includes(letter)){
            count +=1
        }
    }
}
console.log(vowel_counter("antidisestablishmentarianism"))


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

user = prompt("Rock, Paper, or Scissors?").toLowerCase();
options = ['Rock','Paper','Scissors'];

function rock_paper_scissors(user) {
    comp = Math.random(options)
    if (user === 'Rock'.toLowerCase()) {
        if (comp === 'Paper') {
            console.log("Wow you suck!");
        } 
        else if (comp === 'Rock'){
            console.log("Tie");
        } 
        else {
            console.log("Winner winner chicken dinner!")
        }
    } 
    else if (user==='Paper'.toLowerCase()){
        if (comp === 'Scissors') {
            console.log("Wow you suck!");
        } 
        else if (comp === 'Paper') {
            console.log("Tie");
        }
        else {
            console.log("Winner winner chicken dinner!")
        }
    }
    else if (user === 'Scissors'.toLowerCase()) {
        if (comp === 'Rock') {
            console.log("Wow you suck!");
        }
        else if (comp === 'Scissors') {
            console.log("Tie");
        }
        else {
            console.log("Winner winner chicken dinner!")
        }
    }
}
