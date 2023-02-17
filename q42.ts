
// Magician List
let magiciansss = ["Emilia", "Blake", "Hansen", "George"];

// Printing Magicians Names
function show_magicianss(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i])
    }
}

// Printing message along Magicians names without mutating original Array
function make_greats(magicianNames){
    let new_array = [...magicianNames];
    for(let i=0; i<new_array.length; i++){
        new_array[i] = "Hello " + new_array[i];
        console.log(new_array[i])
    }
}
console.log("\nFunction 1 executed");
// Original Magicians Array
show_magicianss(magiciansss);
console.log("\nFunction 2 executed");
// Modified Array
make_greats(magiciansss)
console.log("\nFunction 3 executed");
// Original Magicians Array Modified
show_magicianss(magiciansss);

console.log("Original Array", magiciansss);