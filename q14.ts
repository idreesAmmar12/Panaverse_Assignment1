var guestList = ["Hassan", "Akash", "Ahmad"];
for(let n=0; n<guestList.length; n++)
{
    console.log("Hello "+guestList[n]+ ", Let's have dinner today.")
}

console.log("\nAkash is not coming due to some issues.")
console.log("");

guestList[1] = "Hussnain";

for(let n=0; n<guestList.length; n++)
{
    console.log("Hello "+guestList[n]+ ", Let's have dinner today.")
}
