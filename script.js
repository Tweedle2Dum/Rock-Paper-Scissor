function userchoice(){
    const playerselection = prompt("Enter your choice peasant!!!").toLowerCase();
    return playerselection;

}

function computerchoice(){
    const index = Math.floor(Math.random()*3);
    return (choicearray[index]); 
}

function victory(user,computer){
    
    if(user===computer)
    {
        
       return "Its a draw!!";
       
    }
    else if (user==="rock")
    {
        
        if(computer==="paper"){
            counterc++;
            
            return "Computer Wins!!";
        }
        else
        {
            
            counterp++;
            return"Player Wins!!"
        }
    }
    else if (user==="paper"){
        
        if(computer==="scissor"){
            counterc++;
            
            return "Computer Wins!!";
        }
        else
        {
            counterp++;
            
            return "Player Wins!!"
        }

    }
    else if (user==="scissor")
    {
        
        if(computer==="rock"){
            counterc++;
            return ("Computer Wins!!");
        }
        else
        {
            counterp++;
            return("Player Wins!!")
        }

    }
}

const choicearray= ["rock","paper","scissor"]
let counterp=0;
let counterc=0;
while(counterc!=5 && counterp!=5)
{
   const round = victory(userchoice(),computerchoice());
   console.log(round);
   
}
if(counterc==5)
{
    console.log("THE COMPUTER WINS!!");
}
else
{
    console.log("THE PLAYER WINS!!");
}

