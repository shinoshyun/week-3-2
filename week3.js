fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function (response) {
    return response.json();
}).then(function (data) {
    //把json資料取出 data2
    let data2 = data.result.results

    //i<2 取到前兩筆放入information內
    for (let i = 0; i < 2; i++) {

        let information = data2[i].stitle;

        let jpg = data2[i].file.toLowerCase().split(".jpg")[0] + ".jpg";
        let imgSrc = document.createElement("img");
        imgSrc.setAttribute("src", jpg);


        // 創一個<h3></h3>  //再創一個 取出json資料內的stilte(景點)  //把stitle放進h3內
        let h3 = document.createElement("h3");
        let stitle = document.createTextNode(information);
        h3.appendChild(stitle);
        //找到HTML item1的位置  //依序把h3放入
        let element = document.querySelectorAll(".item1");
        element[i].appendChild(imgSrc);
        element[i].appendChild(h3);
    }


    for (i = 2; i < 10; i++) {
        let information = data2[i].stitle;

        let jpg = data2[i].file.toLowerCase().split(".jpg")[0] + ".jpg";
        let imgSrc = document.createElement("img");
        imgSrc.setAttribute("src", jpg);


        let h2 = document.createElement("h2");
        let stitle = document.createTextNode(information);
        h2.appendChild(stitle);


        let title = document.createElement("div");

        title.className = "title";

        title.appendChild(imgSrc);
        title.appendChild(h2);

        //  下面的方法只會  你有生成幾個box就跑幾個
        // let element = document.querySelectorAll(".box1");
        // element.appendChild(title)

        //選擇一個點讓加進去就好
        let element = document.querySelector(".box1");
        element.appendChild(title);
    }


})

