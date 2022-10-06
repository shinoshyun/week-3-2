fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
    return response.json();
}).then(function (data) {
    //把json資料取出 data2
    let data2 = data.result.results
    console.log(data2)
        for (let i = 0; i < data2.length; i++) {
            let information = data2[i];

            // 創一個<h3></h3>  //再創一個 取出json資料內的stilte(景點)  //把stitle放進h3內
            let h3 = document.createElement("h3");
            let stitle = document.createTextNode(information.stitle);
            h3.appendChild(stitle);
            //找到HTML item1的位置  //依序把h3放入
            let element = document.querySelectorAll(".item1");
            element[i].appendChild(h3);

            let jpg = information.file.split(".jpg")[0] + ".jpg"
            let imgSrc = document.createElement("img");
            imgSrc.setAttribute("src", jpg);
            let file = document.createTextNode(jpg);
            imgSrc.appendChild(file);

            let pic = document.querySelectorAll(".item1");
            element[i].appendChild(imgSrc);
        }


        // for (let i = 2; i < data2.length; i++) {
        //     let information = data2[i];
        //     let h2 = document.createElement("h2");
        //     let stitle = document.createTextNode(information.stitle);
        //     h2.appendChild(stitle);
        //     console.log(h2);

        //     let elements = document.querySelectorAll(".title");
        //     elements[i].appendChild(h2);


        // }
})