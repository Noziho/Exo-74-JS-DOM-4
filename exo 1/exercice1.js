//Votre code ci dessous

let imgCat = document.getElementById('cat-pic');

function changeTextCat (){
    let changeText = document.getElementById('cat-chat');
    changeText.innerText = "Miaou";
    return changeText;
}

imgCat.addEventListener("click", function (){

    changeTextCat ();

});








