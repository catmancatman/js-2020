var numberOfBubbles = 50
for (let i = 0; i < numberOfBubbles; i++) {
    newBubble() 
}
function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    let delay = randomNumber(5000)
    bubble.style.left = x + "vw"
    bubble.style.animationDelay =delay + "ms"
    document.querySelectorAll("body").appendChild(bubble)
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

