let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)

// cand este apasata o tasta apelam fucia pressKey
window.addEventListener("keydown", pressKey)

function pressKey (event) {
    let letter = event.key.toUpperCase()
    // gasim primul div care are clasa titerei apasate
    let div = document.querySelector("." + letter)
    // facem div-ul sa dispara
      //  let divs = document.querySelectorAll("." + letter) 
      //  divs.forEach(div => div.remove()) pentru a disparea toate literele de accelasi fel la o apasare de tasta
    div.remove()
}

function startGame() {
    // ascunde butonul
    startButton.classList.add("hidden")
    // intervalul este de o secunda (1000ms)
    let interval = 3000
    //cream o noua litera la fieare secunda
    setInterval(createNewLetter, interval);
}

// genereaza un numar aleatoriu intre 0 si max (inclusiv)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// genereaza o litera aleatorie mare intre A si Z
function randomLetter() {
    // generam un cod ascii aleatoriu intre 65 si 90
    let codeOfA = "A".charCodeAt(0)
    let codeOfZ = "Z".charCodeAt(0)
    let randomCode = randomNumber(codeOfA, codeOfZ)
    // convertim codul ascii in caracterul asociat lui
    return String.fromCharCode(randomCode)
}

// genereaza o culoare aleatorie
function randomColor() {
    let red = randomNumber(0, 255)
    let green = randomNumber(0, 255)
    let blue = randomNumber(0, 255)
    return `rgb(${red},${green},${blue})`
}

// genereaza o pozitie aleatorie intre 0% si 90%
function randomPosition() {
    let position = randomNumber(0, 90)
    return `${position}%`
}

// creaza un nou elemnet div cu o literea aleatorie si 
// adauga elemntul in html
function createNewLetter() {
    let letter = randomLetter()
    let color = randomColor()
    let top = randomPosition()
    let right = randomPosition()
    //cream un nou element div (initial gol si nu are stil)
    let div = document.createElement("div")
    //adaugam clasa "letter" elementul nostru
    div.classList.add("letter")
    // setam textul din interiorul div-ului sa fie litera aleatorie
    div.innerText = letter
    // setam culoarea css
    div.style.backgroundColor = color
    // setam top si right in css
    div.style.top = top
    div.style.right = right
    // setam o clasa cu valoarea literei aleatorii
    div.classList.add(letter)
    // adaugam elemtnul div in body
    document.querySelector("body").appendChild(div)
}
