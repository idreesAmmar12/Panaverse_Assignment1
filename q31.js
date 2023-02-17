var current_users = ["john", "jane", "jim", "jack", "jill"];
var new_users = ["john", "judy", "james", "joseph", "jenny"];
var _loop_1 = function (user) {
    if (current_users.some(function (name) { return name.toLowerCase() === user.toLowerCase(); })) {
        console.log("Sorry, the username " + user + " is not available. Please choose a different username.");
    }
    else {
        console.log("The username " + user + " is available.");
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    _loop_1(user);
}
