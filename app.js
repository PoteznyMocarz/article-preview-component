let shareBtn = document.getElementById("shareBtn");
let toolTipBox = document.getElementById("toolTipBox");
let btnImg = document.getElementById("path-img");

let clickCounter = 1;

shareBtn.onclick = function() {
    if(clickCounter == 1) {
        toolTipBox.classList.remove("unclicked");
        toolTipBox.classList.add("clicked");
        shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
        btnImg.style.fill = "hsl(210, 46%, 95%)";
        clickCounter = 0;
    }

    else {
        toolTipBox.classList.remove("clicked");
        toolTipBox.classList.add("unclicked");
        shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
        btnImg.style.fill = "hsl(214, 17%, 51%)"
        clickCounter = 1;
    }
}