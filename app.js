function run(){
    getCard()
}

function getCard(){
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)

    document.getElementById("card").insertAdjacentHTML("beforeend", `<image src = images/${r}${suitArray[randomSuit]}.jpg>`)
}