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
