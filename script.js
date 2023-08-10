function showDiv(){
    const divs = document.getElementsByClassName("hidden-div");
    const randomIndex = Math.floor(Math.random()*divs.length);
    divs[randomIndex].style.display = "block"
}