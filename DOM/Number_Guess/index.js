let randomNum = Math.floor(Math.random()*100)+1
console.log(randomNum);

let guessed = 0;
let remChances = 10 - guessed;
document.querySelector("#guessed").innerText =guessed;
document.querySelector("#remChances").innerText = remChances;

function reset(){
    location.reload()
}


function guessNum(){
    document.querySelector("#result").innerHTML = "";
    
    let userGuessed = document.querySelector("#inputNum");
    if(userGuessed.value==""){
        alert("Enter the number")
        return
    }

    ++guessed;
    --remChances;  
    
    if(randomNum == userGuessed.value){
        let rightGuessed = document.createElement("h1")
        rightGuessed.innerHTML = "You guessed it right ✅ 🚀"
        document.querySelector("#result").appendChild(rightGuessed)

        guessed = 0
        remChances = 10
        document.querySelector("#guessed").innerHTML = guessed;
        document.querySelector("#remChances").innerHTML = remChances;
    }

    else{
        let wrongGuessed = document.createElement("h1");
        wrongGuessed.innerHTML = "Wrong guessed ☹️😞"
        document.querySelector("#result").appendChild(wrongGuessed);
        
        document.querySelector("#guessed").innerHTML = guessed;
        document.querySelector("#remChances").innerHTML = remChances;
    }

    if (remChances <= 0) {
        let chanceExceed = document.createElement("h1");
        chanceExceed.innerHTML = "Chances are over ";
        
        let tryAgain = document.createElement("button");
        tryAgain.innerText = "Try Again";
        tryAgain.setAttribute("onclick", "reset()");
        
        document.querySelector("#result").appendChild(chanceExceed);
        document.querySelector("#result").appendChild(tryAgain);

        document.querySelector("#guessed").innerHTML = 0;
        document.querySelector("#remChances").innerHTML = 10;
        return;
    }

}
