fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
    return response.json();
}).then(function (data) {
    let data2 = data.result.results
    let item1 = document.querySelector("#item1");
    for (let i = 0; i < data2.length; i++) {
        let information = data2[i];
        let h2 = document.createElement("h2");
        let stitle = document.createTextNode(information.stitle);
        h2.appendChild(stitle);
        console.log(h2);

        // let element = document.getElementById('title');
        // element.appendChild("h2");
    }

})