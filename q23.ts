let day = "Monday"
console.log("Predict the day of week : I predict Monday")
console.log(day == "Monday")

let Capital = "Islamabad"
console.log("Which city is not the capital of Pakistan ? \n 1- Rawapindi\n 2- Islamabad\n I Select Rawalpindi")
console.log(Capital !== "Rawalpindi")
console.log("\n")

let password = "AmmarIdrees"
let user_input = "ammaridrees"
console.log(user_input == password.toLowerCase())

let age = 5;
console.log("Age is : "+age)
console.log("Is age is less than 5")
console.log(age<5)
console.log("Is age is greater than 5")
console.log(age>5)
console.log("Is age is greater than or equal to 5")
console.log(age>=5)
console.log("Is age is less than or equal to 5")
console.log(age<=5)

let num1 = 8;
let num2 = 9;
console.log("\nNumber 1 = "+num1+ " and Number 2 = "+num2)
console.log("Number 1 and Number 2 are greater than 10")
console.log(num1 > 10 && num2 > 10)
console.log("Number 1 or Number 2 is equal to 8")
console.log(num1 == 8 || num2 == 8)

let test_array = [5,4,2,1,6]
console.log("Array is : "+test_array)
console.log("Is 2 present in array !")
console.log(test_array.includes(2))
console.log("Is 3 not present in array !")
console.log(!test_array.includes(3))