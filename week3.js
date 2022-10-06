fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
    return response.json();
}).then(function (data) {
    //把json資料取出 data2
    let data2 = data.result.results


    //i<2 取到前兩筆放入information內
    for (let i = 0; i < 2; i++) {
        let information = data2[i].stitle;

        let jpg = data2[i].file.split(".jpg")[0] + ".jpg"
        let imgSrc = document.createElement("img");
        imgSrc.setAttribute("src", jpg);
        let file = document.createTextNode(jpg);
        imgSrc.appendChild(file);

        let pic = document.querySelectorAll(".item1");
        pic[i].appendChild(imgSrc);

        // 創一個<h3></h3>  //再創一個 取出json資料內的stilte(景點)  //把stitle放進h3內
        let h3 = document.createElement("h3");
        let stitle = document.createTextNode(information);
        h3.appendChild(stitle);
        //找到HTML item1的位置  //依序把h3放入
        let element = document.querySelectorAll(".item1");
        element[i].appendChild(h3);

    }


    for (i = 2; i < data2.length; i++) {
        let information = data2[i].stitle;

        let jpg = data2[i].file.split(".jpg")[0] + ".jpg"
        let imgSrc = document.createElement("img");
        imgSrc.setAttribute("src", jpg);
        let file = document.createTextNode(jpg);
        imgSrc.appendChild(file);

        let pic = document.querySelectorAll(".title");
        pic[i - 2].appendChild(imgSrc);


        let h2 = document.createElement("h2");
        let stitle = document.createTextNode(information);
        h2.appendChild(stitle);


        let elements = document.querySelectorAll(".title");
        elements[i - 2].appendChild(h2);


    }
})

// for (i = 2, j = 0; i < data2.length, j > 2; i++, j++) {

