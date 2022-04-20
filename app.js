

function run(){
    score()
}

function getCard(){
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)

    document.getElementById("card").insertAdjacentHTML("beforeend", `<image src = images/${r}${suitArray[randomSuit]}.jpg>`)
    return r
}

var humScore = []

function score(){
    var num = getCard()
    var x = document.getElementById("humTotal");

    for(var i = 1; i <= num; i++){
        humScore.push("w")
    }

    x.innerHTML = `Human total is ${humScore.length}.`
}

function noMore(){
    var num = getCard()
}

function reloadCard(){
    document.location.reload()
}
