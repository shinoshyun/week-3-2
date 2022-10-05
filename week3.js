fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
    return response.json();
}).then(function (data) {
    //把json資料取出 data2
    let data2 = data.result.results
    //i<2 取到前兩筆放入information內
    for (let i = 0; i < 2; i++) {
        let information = data2[i];

        // 創一個<h3></h3>
        let h3 = document.createElement("h3");
        //再創一個 取出json資料內的stilte(景點)
        let stitle = document.createTextNode(information.stitle);
        //把stitle放進h3內
        h3.appendChild(stitle);

        //找到HTML中 item的位置，把item變成一個變數
        let element = document.querySelector(`.item${i + 1}`);

        //把剛剛取出的h3再放進去
        element.appendChild(h3);
    }

})