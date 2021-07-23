let t = 0;
let l = 0;
let w = 0;
let badAnswer = 0;
let choice;
let rock;
let paper;
let scissors;

function computerPlay(){
    let cpuSelect = Math.floor(Math.random()*100);
    console.log(cpuSelect);
    if (cpuSelect <= 33){
        return rock;
    }
    else if(cpuSelect >= 66){
        return paper;
    }
    else {
        return scissors;
    }
}

function playerSelection(){
    let cpuChoice = computerPlay();
    if(choice.toLowerCase() == `rock` && cpuChoice == rock){
        t++;
        return tieResult = `Computer: Rock! \rYou tied!`;
    }
    else if (choice.toLowerCase() == `rock` && cpuChoice == paper){
        l++;
        return loseResult = 'Computer: Paper! \rYou lose!';
    }
    else if (choice.toLowerCase() == 'rock' && cpuChoice == scissors){
        w++;
        return winResult = `Computer: Scissors! \rYou win!`;
    }
//----------------------------------------------
    else if(choice.toLowerCase() == `paper` && cpuChoice == rock){
        w++;
        return winResult = `Computer: Rock! You \rwin!`;
    }
    else if (choice.toLowerCase() == `paper` && cpuChoice == paper){
        t++;
        return tieResult = 'Computer: Paper! You \rtied!';
    }
    else if (choice.toLowerCase() == 'paper' && cpuChoice == scissors){
        l++;
        return loseResult = `Computer: Scissors! \rYou lose!`;
    }
//----------------------------------------------
    else if(choice.toLowerCase() == `scissors` && cpuChoice == rock){
        l++;
        return loseResult = `Computer: Rock! \rYou lose!`;
    }
    else if (choice.toLowerCase() == `scissors` && cpuChoice == paper){
        w++;
        return winResult = 'Computer: Paper! \rYou win!';
    }
    else if (choice.toLowerCase() == 'scissors' && cpuChoice == scissors){
        t++;
        return tieResult = `Computer: Scissors! \rYou tied!`;
    }
//----------------------------------------------
    else{
        badAnswer++;
        return noResult = `Please type: Rock, Paper, or Scissors.`;
    }
}

function game(){
    for (let i = 1; i < 4; i++){
        choice = prompt(`Type Rock, Paper, or Scissors:`);
        alert(`You: `+ choice[0].toUpperCase() + choice.substring(1) + `!\r` + playerSelection());
        alert(`Game: ` + i + `/3\r` + `Score:\rYou: ` + w +`\rCPU: ` + l + `\rTies: ` + t);
        if (badAnswer == 1){
            i--;
            badAnswer--;
        }
}}

game();