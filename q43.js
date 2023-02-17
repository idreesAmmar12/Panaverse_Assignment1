function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    var sandwich = [];
    for (var i = 0; i < ingredients.length; i++) {
        sandwich.push(ingredients[i]);
    }
    console.log("You order a sandwich with followinng ingredients:" + sandwich);
    //return `You order a sandwich with followinng ingredients: ${sandwich.toString()}`
}
;
make_sandwich("Bread slices", "Swiss Cheese", "Mayonnaise sauce");
make_sandwich("Bread slices", "Cheese slices", "Chilli sauce", "Salt", "Black pepper");
make_sandwich("Ham", "Lettuce", "Cucumber", "Olives");
