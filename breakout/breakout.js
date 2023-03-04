// reaching html elements

let ball = document.getElementById("ball");
let boxes = document.getElementsByClassName("box");
let container = document.getElementById("container");
let user = document.getElementById("user");


// universal variables

yIndexMover = 1;
xIndexMover = 1;
let winSound = new Audio("resources/Terapi.mp3")
let winCounter1 = 0
let winCounter2 = 0
let winCounter3 = 0
let winCounter4 = 0
let winCounter5 = 0

// ball centering

let topMarginOfTheBall = 257
let leftMarginOfTheBall = 257
ball.style.marginTop = `${topMarginOfTheBall}px`
ball.style.marginLeft = `${leftMarginOfTheBall}px`

// userStick centering

user.style.marginLeft = "210px";
user.style.marginTop = "420px";




// ball movement

function ballMove(){
    leftMarginOfTheBall -= xIndexMover;
    topMarginOfTheBall -= yIndexMover;
    ball.style.marginTop = `${topMarginOfTheBall}px`;
    ball.style.marginLeft = `${leftMarginOfTheBall}px`;
    if(ball.offsetTop < boxes[0].offsetTop + 21){
        let hitArea = parseInt(ball.style.marginLeft);
        blockExploder(hitArea)
        yIndexMover = -yIndexMover;
    }
    if(ball.offsetLeft == container.offsetLeft){
        xIndexMover = -xIndexMover
    }
    if(ball.offsetTop == 590){
        yIndexMover = -yIndexMover;
    }
    if(ball.offsetLeft == container.offsetLeft + 489){
        xIndexMover = -xIndexMover
    }
    if(topMarginOfTheBall == 420 && leftMarginOfTheBall >= parseInt(user.style.marginLeft) && leftMarginOfTheBall <=
    parseInt(user.style.marginLeft)+ 100 && yIndexMover <0){
        yIndexMover = -yIndexMover;
        
    }
// exploiding blocks

function blockExploder(hitArea){
if(hitArea < 84){
    boxes[0].style.backgroundColor = "red";
     winCounter1 =1;
}
if(hitArea> 104 && hitArea < 184){
    boxes[1].style.backgroundColor = "red";
     winCounter2 =1;
}
if(hitArea> 204 && hitArea< 284){
    boxes[2].style.backgroundColor = "red";
     winCounter3 =1;
}
if(hitArea> 304 && hitArea< 384){
    boxes[3].style.backgroundColor = "red";
     winCounter4 =1;
}
if(hitArea> 404 && hitArea< 484){
    boxes[4].style.backgroundColor = "red";
     winCounter5 =1;
}
if(winCounter1 + winCounter2 + winCounter3 + winCounter4 + winCounter5 >4){
    winSound.play()
}


}
}

let ballMoveInterval =  setInterval(ballMove, 3);


// userStick movement

function userMove(event){
    let marginBeforePressed = parseInt(user.style.marginLeft)
    let keyCode = event.keyCode;
    if(keyCode == 37){
        user.style.marginLeft = `${marginBeforePressed - 10}px `
    }
    if(keyCode == 39){
        user.style.marginLeft = `${marginBeforePressed + 10}px `
    }
}
document.addEventListener("keydown", (event) => userMove(event))
console.log(container.offsetHeight)





