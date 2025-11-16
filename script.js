// Register custom helper
Handlebars.registerHelper("eq", function (a, b) {
    return a === b;
});

// Fetch JSON and render template
fetch("users.json")
    .then(res => res.json())
    .then(data => {
        const template = document.getElementById("user-template").innerHTML;
        const compiled = Handlebars.compile(template);

        document.getElementById("user-container").innerHTML = compiled(data);
    });