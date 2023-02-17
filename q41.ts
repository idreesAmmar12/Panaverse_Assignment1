
let magiciann = ["Emilia", "Blake", "Hansen", "George"];

function show_magicianssss(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i])
    }
}

function make_greatt(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "The Great " + magicianNames[i];
        console.log(magicianNames[i])
    }
}
console.log("\nFunction 1 executed");
// Original Magicians Array
show_magicianssss(magiciann);
console.log("\nFunction 2 executed");
// Modified Array
make_greatt(magiciann)
console.log("\nFunction 3 executed");
// Original Magicians Array Modified
show_magicianssss(magiciann);

console.log("Original Array Modified", magiciann);