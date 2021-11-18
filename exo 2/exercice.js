let catPic = document.getElementById("cat-pic");

let onCatClick = function(event) {

    let stashePic = document.getElementById("mustache-pic");
    stashePic.style.top = event.clientY + "px";
    stashePic.style.left = event.clientX + "px";


};

catPic.addEventListener("click", onCatClick);








