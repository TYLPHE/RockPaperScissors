const playerRock = document.querySelector(`#rock`);
const playerPaper = document.querySelector(`#paper`);
const playerScissors = document.querySelector(`#scissors`);
const cpuBoard = document.querySelector(`.computer-selection`);
const wins = document.querySelector(`.wins`);
const ties = document.querySelector(`.ties`);
const losses = document.querySelector(`.losses`);
const result = document.querySelector(`.result`);
const sfxRock = new Audio(`./sfxRock.wav`);
const sfxPaper = new Audio(`./sfxPaper.mp3`);
const sfxScissors = new Audio(`./sfxScissors.mp3`);
let t = 0;
let l = 0;
let w = 0;
let choice;

const imgRock = document.createElement(`img`);
imgRock.src = `https://atlas.wiki.fextralife.com/file/Atlas/stone_resources_atlas_mmo_game_wiki_guide.png`;
playerRock.appendChild(imgRock);
imgRock.style.height = `100%`;

const imgPaper = document.createElement(`img`);
imgPaper.src = `https://d35sutnyz9pbcz.cloudfront.net/media/catalog/product/cache/049f23e7a734b208ff5986153bfabf8d/j/s/js-ttr400_04.png`;
playerPaper.appendChild(imgPaper);
imgPaper.style.height = `100%`;

const imgScissors = document.createElement(`img`);
imgScissors.src = `https://s27329.pcdn.co/wp-content/uploads/KLH0857-1-e1543585176382.png`;
playerScissors.appendChild(imgScissors);
imgScissors.style.height = (`100%`);

game();

function computerPlay(){
    let cpuSelect = Math.floor(Math.random()*100);
    if (cpuSelect <= 33){
        return `rock`;
    }
    else if(cpuSelect >= 66){
        return `paper`;
    }
    else {
        return `scissors`;
        
    }
}

function cpuRock(){
    cpuBoard.innerText = ``;
    const imgCPURock = document.createElement(`img`);
    imgCPURock.src = `https://atlas.wiki.fextralife.com/file/Atlas/stone_resources_atlas_mmo_game_wiki_guide.png`;
    imgCPURock.style.height = `100%`;
    cpuBoard.appendChild(imgCPURock);
    sfxRock.load();
    sfxPaper.load();
    sfxScissors.load();
    sfxRock.play();
}

function cpuPaper(){
    cpuBoard.innerText = ``;
    const imgCPUPaper = document.createElement(`img`);
    imgCPUPaper.src = `https://d35sutnyz9pbcz.cloudfront.net/media/catalog/product/cache/049f23e7a734b208ff5986153bfabf8d/j/s/js-ttr400_04.png`;
    imgCPUPaper.style.height = `100%`;
    cpuBoard.appendChild(imgCPUPaper);
    sfxRock.load();
    sfxPaper.load();
    sfxScissors.load();
    sfxPaper.play();
}

function cpuScissors(){
    cpuBoard.innerText = ``;
    const imgCPUScissors = document.createElement(`img`);
    imgCPUScissors.src = `https://s27329.pcdn.co/wp-content/uploads/KLH0857-1-e1543585176382.png`;
    imgCPUScissors.style.height = `100%`;
    cpuBoard.appendChild(imgCPUScissors);
    sfxRock.load();
    sfxPaper.load();
    sfxScissors.load();
    sfxScissors.play();
}

function compare(){
    let cpuChoice = computerPlay();
    if(choice ==`rock` && cpuChoice == `rock`){
        t++;
        cpuRock();
        return tieResult = `Rock vs Rock! You tied!`;
    }
    else if (choice ==`rock` && cpuChoice == `paper`){
        l++;
        cpuPaper();
        return loseResult = 'Rock vs Paper! You lose!';
    }
    else if (choice =='rock' && cpuChoice == `scissors`){
        w++;
        cpuScissors();
        return winResult = `Rock vs Scissors! You win!`;
    }
//----------------------------------------------
    else if(choice ==`paper` && cpuChoice == `rock`){
        w++;
        cpuRock();
        return winResult = `Paper vs Rock! You win!`;
    }
    else if (choice ==`paper` && cpuChoice == `paper`){
        t++;
        cpuPaper();
        return tieResult = 'Paper vs Paper! You tied!';
    }
    else if (choice =='paper' && cpuChoice == `scissors`){
        l++;
        cpuScissors();
        return loseResult = `Paper vs Scissors! You lose!`;
    }
//----------------------------------------------
    else if(choice ==`scissors` && cpuChoice == `rock`){
        l++;
        cpuRock();
        return loseResult = `Scissors vs Rock! You lose!`;
    }
    else if (choice ==`scissors` && cpuChoice == `paper`){
        w++;
        cpuPaper();
        return winResult = 'Scissors vs Paper! You win!';
    }
    else if (choice =='scissors' && cpuChoice == `scissors`){
        t++;
        cpuScissors();
        return tieResult = `Scissors vs Scissors! You tied!`;
    }
    return;
}

function updateScore(){
    wins.textContent = `Wins: ` + w;
    ties.textContent = `Ties: ` + t;
    losses.textContent = `Losses: ` + l;
}

function game(){
    playerRock.addEventListener(`click`, () => {
        choice = `rock`;
        compare();
        result.innerText = compare();
        updateScore();
    });
    playerPaper.addEventListener(`click`, () => {
        choice = `paper`;
        compare();
        result.innerText = compare();
        updateScore();
    });
    playerScissors.addEventListener(`click`, () => {
        choice = `scissors`;
        compare();
        result.innerText = compare();
        updateScore();
    });
}

//adding hotkeys to the game
window.addEventListener(`keydown`, hotkeys);
function hotkeys(e){
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if (e.keyCode == `65`){
        choice = `rock`;
        compare();
        result.innerText = compare();
        updateScore();
    }
    else if(e.keyCode == `83`){
        choice = `paper`;
        compare();
        result.innerText = compare();
        updateScore();
    }
    else if(e.keyCode == `68`){
        choice = `scissors`;
        compare();
        result.innerText = compare();
        updateScore();
    }
    return;
}