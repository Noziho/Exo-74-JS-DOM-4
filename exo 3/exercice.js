let libButton = document.getElementById('lib-button');
let libIt = function() {
    let inputNoun = document.getElementById('noun');
    let inputAdjective = document.getElementById('adjective');
    let someoneName = document.getElementById('person');
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = inputNoun.value + " " + inputAdjective.value +" "+ someoneName.value;

};

libButton.addEventListener('click', libIt);










