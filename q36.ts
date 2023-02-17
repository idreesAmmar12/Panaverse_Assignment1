
function make_shirts(size = "large", text = "I love JavaScript") {
    console.log("The size of the shirt is " +size+" and message is " +text)
}

// Large Size shirt with default text
make_shirts();

// Medium Size shirt with default text
make_shirts("medium");

// Small size shirt with different message
make_shirts("Small", "Don't repeat yourself");