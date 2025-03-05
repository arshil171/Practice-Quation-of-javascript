// Question 
// Arithmetic operator


// Q-1 calculate the area of circle


let radius = 7
let Area = 3.14 * radius *radius
 
console.log("Area of circle is = " + Area)




// Q-2 find the value of (a * b) / c + (b - a)


let a = 10
let b = 20
let c = 5

console.log( Result = (a * b) / c + (b - a))



// Assignment operator

// Q-3   increment 

let x = 5
let y = 10

x = ++x
x = ++x
y = y * x

console.log("New value of x = " + x ) 
console.log("New Value of y = " + y)



// Q-4  compound assignment operator

let num = 10

// add 15 to num 
num += 15
console.log(num)

// subtract 5 from num 
num -= 5
console.log(num)

// multiply 3 by num 
num *= 3
console.log(num)

// divide 2 by num 
num /= 2
console.log(num)





// comparison operator 


// Q-5 comparison operator


var score1 = 85
var score2 = 90

console.log(score1>80)
console.log(score2>80)
console.log("Both score are grater than 80")




// Q -6 compare two string using comparison operator


let string = "apple"
let string1 = "banana"

string3 = string<string1
console.log(string3)
console.log("yes , first string is less than second string")




// Logical operator 


// Q-7 check person is eligible to drive 


let age = 19
age1 = age>18
hasedrivingLicence = true

console.log(age1 && hasedrivingLicence)
console.log("if true than is aligible to drive and false then it is not aligible")



// Q-8   logical operator


let number = 80

number1 = 10 < number
number2 = 50 > number 
// console.log(number1)
// console.log(number2)
number3 = number * 5
console.log (number1 == true && number2 ==true && number3)

console.log ("if number is come with multiply by 5 than your number is between 10 and 50")
console.log("if false than your number is not between 10 to 50")




// type conversion


// Q -9 convert string to number and add 10


let string4 = "123.45"
console.log("type of string = "+typeof(string4))

let resultNum = Number(string4)
console.log("type of string = "+typeof(resultNum))

resultNum +=10 
console.log(resultNum)





// Q-10   convert boolean value true to string concatenate with "is the value"



let boolean = true
let string5 = " Is the value"
console.log("type of = "+typeof(boolean))

let resutlBoolean = String(boolean)
console.log("type of = "+typeof(resutlBoolean))



console.log(resutlBoolean + string5)



// if statement 

// Q-13 if 

let a4 = 10

if(a4 > 0){
    console.log("a is positive")
}


// Q-14 if


let temperature = 30

if(temperature > 25){
    console.log("It's hot day outside")
}

if(temperature < 25){
    console.log("It's cold day outside")
}


// Nested  if-else 

// Q-15 nested if-else


let a5 = 0


if(a5 > 0){
    console.log("a is positive")

}
else {
    console.log("a is negative")
}
if (a5 == 0){
    console.log("a is  zero")
}


// q-16 if elase


let grade = 75


if(grade >= 90){
    console.log("Grade is A")
}
else if(89 grade < 80){
    console.log("Grade is B")
}

// else if(70 < grade < 79){
//     console.log("Grade is C")
// }
// else if(grade <= 70){
//     console.log("Grade is D")
// }


