let pScore = 0;
let cScore = 0;

function gameOver(num1, num2)
{
    if (num1==5)
    {
        alert('Congrats! You Win!');
        
    }
    else if (num2==5)
        alert('Game Over! You Lost!');
}

function computerTurn(num)
{
    let randomNum = Math.floor(Math.random () * 3);
    console.log(randomNum);
    
    if (num==randomNum)
    {
        document.getElementById('decision').innerHTML = "You Tied!";
    }
    else if (num==2 && randomNum==1)
    {
        document.getElementById('decision').innerHTML = "You Won!";
        pScore++;
    }
    else if (num==1 && randomNum==0)
    {
        document.getElementById('decision').innerHTML = "You Won!";
        pScore++;
    }
    else if (num==0 && randomNum==2)
    {
        document.getElementById('decision').innerHTML = "You Won!";
        pScore++;
    }
    else{
        document.getElementById('decision').innerHTML = "You Lost!";
        cScore++;
    } 

    document.getElementById('playerScore').innerHTML = pScore;
    document.getElementById('computerScore').innerHTML = cScore;
    gameOver(pScore,cScore);
}

function rock()
{
    document.getElementById("display").innerHTML = "You chose Rock. Cause you rock!";
    computerTurn(0);
}

function paper()
{
    document.getElementById("display").innerHTML = "You chose Paper. What a hater!";
    computerTurn(1);
}
 
function scissor()
{
    document.getElementById('display').innerHTML = "You chose Scissor. Don't Litter!"
    computerTurn(2);
}
