

function run(){
    score()
}

function getCard(){
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)

    document.getElementById("userCard").insertAdjacentHTML("beforeend", `<image src = images/${r}${suitArray[randomSuit]}.jpg>`)
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

    return humScore.length
}

var compScore = []

function getCompCard(){
    do{
        var c = Math.floor(Math.random() * 10) + 1
        var suitArray = ["C", "D", "H", "S"]
        var randomSuit = Math.floor(Math.random() * 4)

        document.getElementById("compCard").insertAdjacentHTML("beforeend", `<image src = images/${c}${suitArray[randomSuit]}.jpg>`)

        for(var i = 1; i <= c; i++){
            compScore.push("w")
        }
    
    }while(compScore.length < 16)

    document.getElementById("compTotal").innerHTML = `The Computer total is ${compScore.length}.`

    return compScore.length
}



function reloadCard(){
    document.location.reload()
}
