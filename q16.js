var guestList = ["Hassan", "Akash", "Ahmad"];
for (var n = 0; n < guestList.length; n++) {
    console.log("Hello " + guestList[n] + ", Let's have dinner today.");
}
console.log("\nAkash is not coming due to some issues.");
console.log("");
guestList[1] = "Hussnain";
for (var n = 0; n < guestList.length; n++) {
    console.log("Hello " + guestList[n] + ", Let's have dinner today.");
}
console.log("\nWe found a bigger dinner table\n");
guestList.splice(0, 0, "Dr Wasif");
guestList.splice(2, 0, "Dr Ehsan");
guestList.push("Dr Hikmat");
for (var n = 0; n < guestList.length; n++) {
    console.log("Hello " + guestList[n] + ", Let's have dinner today.");
}
console.log("\nWe have shortage of space on table so we are going to invite only two people for dinner\n");
for (var i = guestList.length - 1; i >= 2; i--) {
    console.log("Dear " + guestList[i] + ", Sorry we can't invite you for dinner.");
    guestList.splice(i, 1);
}
for (var i = 0; i < guestList.length; i++) {
    console.log("\nDear " + guestList[i] + ", You are still invited for Dinner Today");
}
for (var i = 0; i <= guestList.length; i++) {
    guestList.pop();
}
console.log(guestList);
