var personName = "Ammar Idrees";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase(personName));
