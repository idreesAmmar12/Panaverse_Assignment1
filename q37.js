function describe_city(name, country) {
    if (name === void 0) { name = "Rawalpindi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log(name + " is in " + country);
}
describe_city();
describe_city('Islamabad');
describe_city('Medina', 'Saudi Arabia');
