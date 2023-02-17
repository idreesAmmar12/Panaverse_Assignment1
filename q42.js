var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Magician List
var magiciansss = ["Emilia", "Blake", "Hansen", "George"];
// Printing Magicians Names
function show_magicianss(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
// Printing message along Magicians names without mutating original Array
function make_greats(magicianNames) {
    var new_array = __spreadArray([], magicianNames, true);
    for (var i = 0; i < new_array.length; i++) {
        new_array[i] = "Hello " + new_array[i];
        console.log(new_array[i]);
    }
}
console.log("\nFunction 1 executed");
// Original Magicians Array
show_magicianss(magiciansss);
console.log("\nFunction 2 executed");
// Modified Array
make_greats(magiciansss);
console.log("\nFunction 3 executed");
// Original Magicians Array Modified
show_magicianss(magiciansss);
console.log("Original Array", magiciansss);
