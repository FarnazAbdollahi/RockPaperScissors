function startGame() {
    document.getElementById("gameBox").style.display = 'block';
    document.getElementById("gameSet").style.display = 'inline-block';
    document.getElementById("btn").style.display = 'none';
    document.getElementById("set").style.display = 'inline-block';
    document.getElementById("set1").style.display = 'inline-block';
    document.getElementById("main").remove();
}
i = 0 ;
function play (op) {
    
    var gameNo = document.getElementById("gameSet").innerHTML;
        gameNo--;
        document.getElementById("gameSet").innerHTML = gameNo;
    
    if ( i < 5 ) {
        
        document.getElementById("gamePlay").style.display = 'block';
        var computerScore = document.getElementById("computerScore").innerHTML;
        var playerScore = document.getElementById("playerScore").innerHTML;
        var tieScore = document.getElementById("tieScore").innerHTML;

        var p = document.getElementById("player");
        var c = document.getElementById("computer");
        var w = document.getElementById("setWinner");

        var options = [ { name: "rock" } ,
                        {name: "paper" } ,
                        {name : "scissors"} ];
        
        p.getElementsByTagName("img")[i].src = "./images/" + options[op-1].name + ".png"; 

        var x = Math.floor((Math.random() * 3) + 1);
        if ( x == 1 ) {
            c.getElementsByTagName("img")[i].src = "./images/rock.png";
        }
        else if ( x == 2 ) {
            c.getElementsByTagName("img")[i].src = "./images/paper.png"; 
        }
        else {
            c.getElementsByTagName("img")[i].src = "./images/scissors.png";
        }

        if ( (x == 1 && op == 1) || (x == 2 && op == 2) || (x == 3 && op == 3) ) {
            playerScore = Number(playerScore) + 0;
            computerScore = Number(computerScore) + 0;
            tieScore ++;
            w.getElementsByTagName("span")[i].innerHTML = 'Tie Score';
        }
        else if ( ( x == 1 && op == 3) || ( x == 2 && op == 1) || ( x == 3 && op == 2) ) {
            playerScore = Number(playerScore) + 0;
            tieScore = Number (tieScore) + 0;
            computerScore ++;
            w.getElementsByTagName("span")[i].innerHTML = "You Lost";

        }
        else {
            playerScore ++;
            computerScore = Number(computerScore) + 0;
            tieScore = Number (tieScore) + 0;
            w.getElementsByTagName("span")[i].innerHTML = "You Won";
        }

        i++;

        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("tieScore").innerHTML = tieScore;
    }
    if ( i == 5 ) {
        document.getElementById("options").remove();
        document.getElementById("set").remove();
        document.getElementById("set1").remove();
        showResult();
        document.getElementById("gameSet").style.display = 'none';
    }
}


function showResult () {
    document.getElementById("resultBox").style.display = 'block';
    var computerScore = document.getElementById("computerScore").innerHTML;
    var playerScore = document.getElementById("playerScore").innerHTML;
    if ( computerScore > playerScore ) {
        document.getElementById("result").innerHTML = "You LOST!";
    }
    else if ( computerScore == playerScore ) {
        document.getElementById("result").innerHTML = "It's a Tie!";
    }
    else {
        document.getElementById("result").innerHTML = "You WON!";
    }
}

function playAgain () {
    location.reload();
}