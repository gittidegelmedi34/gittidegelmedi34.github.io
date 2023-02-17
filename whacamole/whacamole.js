let rats = document.getElementsByClassName("image");
let points = 0
let availableOnes = Array.from(Array(15).keys())


function randomNumGenerator(){
    let randomIndex = Math.floor(Math.random() * availableOnes.length);
    let number = availableOnes[randomIndex]
    return number;
}


function clickFunc(event){
    let clickedRat = event.target;
    clickedRat.setAttribute("clicked", "true");
    clickedRat.src = "resources/explosion.jpg";
}


function crazy(selectedRat){
    selectedRat.src = "resources/crazyrat.jpg";
    selectedRat.setAttribute("clicked", "false");
    selectedRat.addEventListener("click", (event) => clickFunc(event))
}

function cleaner(selectedRat, timer){
    let clicked = selectedRat.getAttribute("clicked");
    if(clicked === "true"){
        points += 1;
        let number = selectedRat.getAttribute("index");
        number = parseInt(number);
        availableOnes = availableOnes.filter(item => item !== number);
    }
    else{
        points -= 1;
        selectedRat.src = "resources/whacamole rat.jpg";
    }
    clearTimeout(timer);

}


function interval(){
    let number = randomNumGenerator();
    let selectedRat = rats[number];
    selectedRat.setAttribute("index", number)
    crazy(selectedRat);
    let timer = setTimeout( ()=> cleaner(selectedRat, timer), 2000);
}

setInterval(interval, 2500);






 