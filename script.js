window.onload = function(){ 
    let your_score=0;
    let cpu_score=0;
    
    let mybutton1 = document.querySelector(".button1");
    let mybutton2 = document.querySelector(".button2");
    let mybutton3 = document.querySelector(".button3");
    let mybutton4 = document.querySelector(".button4");
    let mybutton5 = document.querySelector(".button5");
    let mybutton6 = document.querySelector(".button6");

 
    

    mybutton1.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "greenyellow";

    })


    mybutton1.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightgreen";
    })

    mybutton2.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "greenyellow";
    })


    mybutton2.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightgreen";
    })

    mybutton3.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "greenyellow";
    })


    mybutton3.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightgreen";
    })

  

    function getComputerChoice() {
        options = ["rock", "paper", "scissors"]
        let num = Math.floor(Math.random() * 3)
        return options[num]
    
    }

    function game(your_choice, cpu_choice, your_score, cpu_score) {
        if (your_choice == "rock") {
            if (cpu_choice == "paper") {
                mybutton5.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton5.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked paper, you loose"
                cpu_score+=1
                if (cpu_score == 5) {
                    console.log("game over cpu wins")
                    return "lost"
                } else {
                    return "lost";
                }
            } else if (cpu_choice == "rock") {
                mybutton4.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton4.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked rock, its a tie"
                return "tie"
            } else {
                mybutton6.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton6.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked scissors, you win"
                console.log("cpu picked scissors, you win")
                your_score+=1
                if (your_score == 5) {
                    console.log("game over you win")
                    return "won"
                } else {
                    return "won";
                }
            }
            
        } else if (your_choice == "paper") {
            if (cpu_choice == "scissors") {
                mybutton6.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton6.style.backgroundColor = "lightgreen";
                }, 1000);
                cpu_score+=1
                if (cpu_score == 5) {
                    console.log("game over cpu wins")
                    return "lost"
                } else {
                    return "lost";
                }
            } else if (cpu_choice == "paper") {
                mybutton5.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton5.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked paper, its a tie"
                return "tie"
            } else {
                mybutton4.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton4.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked rock, you win"
                your_score+=1
                if (your_score == 5) {
                    console.log("game over you win")
                    return "won"
                } else {
                    return "won";
                }
            }
        } else if (your_choice == "scissors") {
            if (cpu_choice == "rock") {
                mybutton4.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton4.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked rock, you loose"
                cpu_score+=1
                if (cpu_score == 5) {
                    console.log("game over cpu wins")
                    return "lost"
                } else {
                    return "lost";
                }
            } else if (cpu_choice == "scissors") {
                mybutton6.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton6.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked scissors, its a tie"
                return "tie"
            } else {
                mybutton5.style.backgroundColor = "white";
                setTimeout(function(){
                    mybutton5.style.backgroundColor = "lightgreen";
                }, 1000);
                document.getElementById("displayer").innerHTML = "cpu picked paper, you win"
                your_score+=1
                if (your_score == 5) {
                    console.log("game over you win")
                    return "won"
                } else {
                    return "won";
                }
            }

        }
    }
    
    mybutton1.addEventListener("click", event => {
        event.target.style.backgroundColor = "greenyellow";
        your_choice = "rock"
        cpu_choice = getComputerChoice();
        console.log(cpu_choice)
        winner = game(your_choice, cpu_choice, your_score, cpu_score)
        if (winner == "won") {
            your_score+=1;
        } else if (winner == "lost") {
            cpu_score+=1;
        }
        document.getElementById("us").innerHTML = your_score;
        document.getElementById("cs").innerHTML = cpu_score;


    })

    mybutton2.addEventListener("click", event => {
        event.target.style.backgroundColor = "greenyellow";
        your_choice = "paper"
        cpu_choice = getComputerChoice();
        console.log(cpu_choice)
        winner = game(your_choice, cpu_choice, your_score, cpu_score)
        if (winner == "won") {
            your_score+=1;
        } else if (winner == "lost") {
            cpu_score+=1;
        }
        document.getElementById("us").innerHTML = your_score;
        document.getElementById("cs").innerHTML = cpu_score;


    })

    mybutton3.addEventListener("click", event => {
        event.target.style.backgroundColor = "greenyellow";
        your_choice = "scissors"
        cpu_choice = getComputerChoice();
        console.log(cpu_choice)
        winner = game(your_choice, cpu_choice, your_score, cpu_score)
        if (winner == "won") {
            your_score+=1;
        } else if (winner == "lost") {
            cpu_score+=1;
        }
        document.getElementById("us").innerHTML = your_score;
        document.getElementById("cs").innerHTML = cpu_score;


    })


    
    
}




