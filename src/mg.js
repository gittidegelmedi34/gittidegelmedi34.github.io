pictures = ["resources/amogus.jpg", "resources/apple.png", "resources/ares.jpg", "resources/carrot.png", "resources/charmender.jpg",
"resources/fish.jpg", "resources/heart.jpg", "resources/istanbul.png", "resources/moby dick.png", "resources/pikachu.png", "resources/ryuk pixel art.jpg",
"resources/watermelon.jpg", "resources/amogus.jpg", "resources/apple.png", "resources/ares.jpg", "resources/carrot.png", "resources/charmender.jpg",
"resources/fish.jpg", "resources/heart.jpg", "resources/istanbul.png", "resources/moby dick.png", "resources/pikachu.png", "resources/ryuk pixel art.jpg",
"resources/watermelon.jpg", ]

let selectedBlocks = [];
let controler = 0;
let attempt = 0;
let ifControler = 0;
let usedOnes = [];

function numberGenerator(usedOnes){
    let number = Math.floor(Math.random()*24);
    while(usedOnes.includes(number)){
        number = Math.floor(Math.random()*24);
    }
    usedOnes.push(number);
    return number
}

function flipper(firstBlock, secondBlock){
    firstBlock.src = firstBlock.getAttribute("back");
    secondBlock.src = secondBlock.getAttribute("back");
    ifControler = 0;
    firstBlock.setAttribute("visible", "false");
    secondBlock.setAttribute("visible", "false");
}



function cardSetup(card){
    card.setAttribute("back", "resources/colorfulpixel.jpg");
    card.setAttribute("visible", "false");
    console.log(card)
    let generatedNum = numberGenerator(usedOnes);
    let front = pictures[generatedNum];
    card.setAttribute("front", front);
}
function cardClickObeyer(event){
    let selectedCard = event.target; 
    let visibility = selectedCard.getAttribute("visible");
    if(visibility == "true") {
        return
    }

    if(ifControler < 2) {
        selectedCard.src = selectedCard.getAttribute("front");
        selectedCard.setAttribute("visible", "true");
        selectedBlocks.push(selectedCard);
        controler += 1;
        ifControler += 1; 
    }

    if(controler == 2) {
        let firstBlock = selectedBlocks[0]
        let secondBlock = selectedBlocks[1];
        selectedBlocks = [];
        controler = 0;

        if(firstBlock.src == secondBlock.src) {
            console.log("match!");
            ifControler = 0;
        }

        else {
            console.log("failed");
            attempt +=1;
            controler = 0;
            setTimeout( () => flipper(firstBlock, secondBlock), 2000)
        }
    }
}

let cards = document.getElementsByClassName("image");
for(i = 0; i < cards.length; i++){
    let card = cards[i];
    cardSetup(card);
    card.addEventListener("click", (event) => cardClickObeyer(event));
}

if(attempt > 10){
    console.log("You failed!")
}