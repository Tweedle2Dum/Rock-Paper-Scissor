function removeimage(choice) {
    if (choice == "p") {
        const card = document.querySelector(".usercard")
        if (document.querySelector(".userimage") === null) {
            return

        }
        const img = document.querySelector(".userimage")
        card.removeChild(img);
    }
    else if (choice=="c"){
        const card = document.querySelector(".computercard")
        if (document.querySelector(".computerimage") === null) {
            return

        }
        const img = document.querySelector(".computerimage")
        card.removeChild(img);

    }
}

function userchoice(Event) {
    round++;
    if (Event.target.textContent == "Rock") {
        const card = document.querySelector(".usercard");
        const img = document.createElement("img")
        removeimage("p")
        img.classList.add("userimage");
        img.src = './rock.svg';
        img.height = "400";
        img.width = "200";
        card.appendChild(img)
        victory("rock", computerchoice())
    } else if (Event.target.textContent == "Paper") {
        const card = document.querySelector(".usercard");
        const img = document.createElement("img")
        removeimage("p")
        img.classList.add("userimage");
        img.src = './paper.svg';
        img.height = "400";
        img.width = "200";
        card.appendChild(img)
        victory("paper", computerchoice())
    } else if (Event.target.textContent == "Scissor") {
        const card = document.querySelector(".usercard");
        const img = document.createElement("img")
        removeimage("p")
        img.classList.add("userimage");
        img.src = './scissor.svg';
        img.height = "400";
        img.width = "200";
        card.appendChild(img)
        victory("scissor", computerchoice())

    }


}

function computerchoice() {
    const index = Math.floor(Math.random() * 3);
    if (choicearray[index] == "rock") {
        const card = document.querySelector(".computercard");
        const img = document.createElement("img")
        removeimage("c")
        img.classList.add("computerimage");
        img.src = './rock.svg';
        img.height = "400";
        img.width = "200";
        card.appendChild(img)

    } else if (choicearray[index] == "paper") {
        const card = document.querySelector(".computercard");
        const img = document.createElement("img")
        removeimage("c")
        img.classList.add("computerimage");
        img.src = './paper.svg';
        img.height = "400";
        img.width = "200";
        card.appendChild(img)

    } else if (choicearray[index] == "scissor") {
        const card = document.querySelector(".computercard");
        const img = document.createElement("img")
        removeimage("c")
        img.classList.add("computerimage");
        img.src = './scissor.svg';
        img.height = "400";
        img.width = "200";
        card.appendChild(img)

    }

    return(choicearray[index]);
}

function victory(user, computer) {

    if (user === computer) {

        return "Its a draw!!";

    } else if (user === "rock") {

        if (computer === "paper") {
            counterc++;

            return "Computer Wins!!";
        } else {

            counterp++;
            return "Player Wins!!"
        }
    } else if (user === "paper") {

        if (computer === "scissor") {
            counterc++;

            return "Computer Wins!!";
        } else {
            counterp++;

            return "Player Wins!!"
        }

    } else if (user === "scissor") {

        if (computer === "rock") {
            counterc++;
            return("Computer Wins!!");
        } else {
            counterp++;
            return("Player Wins!!")
        }

    }
}

const choicearray = ["rock", "paper", "scissor"]
let counterp = 0;
let counterc = 0;
let round = 0;

const buttons = document.querySelectorAll(".btn");
console.log(buttons)
for (const button of buttons) {
    button.addEventListener("click", userchoice);

}

if (round == 5) {
    if (counterp > counterc) {
        console.log("PLAYER WINS");
    } else {
        console.log("COMPUTER WINS");
    }
}
