fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
    return response.json();
}).then(function (data) {
    let data2 = data.result.results
    let item1 = document.querySelector(".item1");

    for (let i = 0; i < data2.length; i++) {
        let information = data2[i];
        let h3 = document.createElement("h3");
        let stitle = document.createTextNode(information.stitle);
        h3.appendChild(stitle);
        console.log(h3);

        let element = document.getElementById(".item1");
        element.appendChild(h3);
    }

})