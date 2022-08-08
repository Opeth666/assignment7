const playForm = document.querySelector("#playForm");
const score = document.querySelector("#score");
const winorlose = document.querySelector("#winorlose");
const riddler = document.querySelector("img");
const chance = document.querySelector("#chance")
const button = document.querySelector("#button")

const guessNumberForm = document.querySelector("#guessNumber")
const guessNumber = guessNumberForm.value


// 랜덤값 생성 함수
function random() {
    const maxNumber = parseInt(document.querySelector("#maxNumber").value)
    return Math.floor(Math.random() * maxNumber + 0.5);
}

function playBtn(event) {
    event.preventDefault();
    const randomNumber = random()
    const guessNumber = guessNumberForm.value

    score.innerText = `You chose ${guessNumber}. I chose ${randomNumber}.`
    if(randomNumber == guessNumber) {
        winorlose.innerText = `You win!`;
        riddler.classList.add("playerwin")
    } else {
        winorlose.innerText = `You lose!`
        riddler.classList.remove("playerwin");
        riddler.classList.remove("playerlose");
        void riddler.offsetWidth;
        riddler.classList.add("playerlose")
    }

}
// guessNumber의 최대값 제한
function checkMax(){
    const maxNumber = parseInt(document.querySelector("#maxNumber").value)
    guessNumberForm.setAttribute("max", maxNumber); 
   
    const winningChance = parseInt((1 / (maxNumber+1)) * 100);
    chance.innerText = `Hint : Do you know your winning chance is ${winningChance}%?`

    if(winningChance === 100) {
        button.classList.add("none")
    } else {
        button.classList.remove("none")
    }

}
playForm.addEventListener("change", checkMax)

// 게임플레이
playForm.addEventListener("submit", playBtn)