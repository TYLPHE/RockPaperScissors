const playerRock = document.querySelector(`#rock`);
const playerPaper = document.querySelector(`#paper`);
const playerScissors = document.querySelector(`#scissors`);
const cpuBoard = document.querySelector(`.computer-selection`);
const resultData = document.querySelector(`.result-data`);
const weaponData = document.querySelector(`.weapon-data`);
const scoreData = document.querySelector(`.score-data`);
const computerData = document.querySelector(`.computer-data`);
const wins = document.querySelector(`.wins`);
const ties = document.querySelector(`.ties`);
const losses = document.querySelector(`.losses`);
const result = document.querySelector(`.result`);
const sfxRock = new Audio(`./sfxRock.wav`);
const sfxPaper = new Audio(`./sfxPaper.mp3`);
const sfxScissors = new Audio(`./sfxScissors.mp3`);
const sfxSelect = new Audio(`./sfxSelect.mp3`);
const sfxHover = new Audio(`./sfxHover.mp3`);
const sfxWin = new Audio(`./sfxWin.mp3`);
const sfxLose = new Audio(`./sfxLose.mp3`);
let t = 0;
let l = 0;
let w = 0;
let choice;
let interval;

game();

//runs the game by clicks
function game(){
    playerRock.addEventListener(`click`, () => {
        choice = `rock`;
        compare();
        updateScore();
    });
    playerPaper.addEventListener(`click`, () => {
        choice = `paper`;
        compare();

        updateScore();
    });
    playerScissors.addEventListener(`click`, () => {
        choice = `scissors`;
        compare();

        updateScore();
    });
}
//add flashing and sounds on selection
const selection = Array.from(document.querySelectorAll(`.selection`));
selection.forEach(element => {
    element.addEventListener(`mousedown`, () => {
        element.classList.add(`flashing`);
        sfxSelect.load();
        sfxSelect.play();
        element.addEventListener(`animationend`, () => {
            element.classList.remove(`flashing`);
            weaponData.classList.add(`hidden`);
            resultData.classList.remove(`hidden`);
            setTimeout(() => {
                weaponData.classList.remove(`hidden`);
                resultData.classList.add(`hidden`);
                if(result.includes(`win`)){
                    sfxWin.play();
                }
                else if(result.includes(`lose`)){
                    sfxLose.play();
                }
            }, 3000);

        });
    });
});

//add border and sounds on hover
selection.forEach(element => {
    element.addEventListener(`mouseover`, () => {
        element.classList.add(`hover`);
        sfxHover.load();
        sfxHover.play();
        element.addEventListener(`mouseout`, () => {
            element.classList.remove(`hover`);
            sfxHover.load();
        });
    });
});

//adding hotkeys to the game
window.addEventListener(`keydown`, hotkeys);
function hotkeys(e){
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if (e.keyCode == `65`){
        choice = `rock`;
        result.innerText = compare();
        updateScore();
    }
    else if(e.keyCode == `83`){
        choice = `paper`;
        result.innerText = compare();
        updateScore();
    }
    else if(e.keyCode == `68`){
        choice = `scissors`;
        result.innerText = compare();
        updateScore();
    }
    return;
}

//add images
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
}

function cpuPaper(){
    cpuBoard.innerText = ``;
    const imgCPUPaper = document.createElement(`img`);
    imgCPUPaper.src = `https://d35sutnyz9pbcz.cloudfront.net/media/catalog/product/cache/049f23e7a734b208ff5986153bfabf8d/j/s/js-ttr400_04.png`;
    imgCPUPaper.style.height = `100%`;
    cpuBoard.appendChild(imgCPUPaper);
}

function cpuScissors(){
    cpuBoard.innerText = ``;
    const imgCPUScissors = document.createElement(`img`);
    imgCPUScissors.src = `https://s27329.pcdn.co/wp-content/uploads/KLH0857-1-e1543585176382.png`;
    imgCPUScissors.style.height = `100%`;
    cpuBoard.appendChild(imgCPUScissors);
}

function compare(){
    let cpuChoice = computerPlay();
    if(choice ==`rock` && cpuChoice == `rock`){
        t++;
        cpuRock();
        result.innerText = `Rock vs Rock! You tied!`
        return;
    }
    else if (choice ==`rock` && cpuChoice == `paper`){
        l++;
        cpuPaper();
        result.innerText = 'Rock vs Paper! You lose!'
        return ;
    }
    else if (choice =='rock' && cpuChoice == `scissors`){
        w++;
        cpuScissors();
        result.innerText = `Rock vs Scissors! You win!`
        return ;
    }
//----------------------------------------------
    else if(choice ==`paper` && cpuChoice == `rock`){
        w++;
        cpuRock();
        result.innerText = `Paper vs Rock! You win!`
        return;
    }
    else if (choice ==`paper` && cpuChoice == `paper`){
        t++;
        cpuPaper();
        result.innerText = 'Paper vs Paper! You tied!'
        return;
    }
    else if (choice =='paper' && cpuChoice == `scissors`){
        l++;
        cpuScissors();
        result.innerText = `Paper vs Scissors! You lose!`
        return;
    }
//----------------------------------------------
    else if(choice ==`scissors` && cpuChoice == `rock`){
        l++;
        cpuRock();
        result.innerText = `Scissors vs Rock! You lose!`
        return;
    }
    else if (choice ==`scissors` && cpuChoice == `paper`){
        w++;
        cpuPaper();
        result.innerText = 'Scissors vs Paper! You win!'
        return;
    }
    else if (choice =='scissors' && cpuChoice == `scissors`){
        t++;
        cpuScissors();
        result.innerText = `Scissors vs Scissors! You tied!`
        return;
    }
    return;
}

function updateScore(){
    wins.textContent = `Wins: ` + w;
    ties.textContent = `Ties: ` + t;
    losses.textContent = `Losses: ` + l;
}