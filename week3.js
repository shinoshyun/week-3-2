function getData() {
    fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
    });
}