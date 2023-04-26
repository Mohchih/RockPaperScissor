let pScore = 0;
let cScore = 0;

function gameOver(num1, num2)
{
    if (num1==5)
    {
        confirm('Congrats! You Win! Play again?');
        location.reload();
    }
    else if (num2==5)
    {
        confirm('Game Over! You Lost! Play again?');
        location.reload();
    }
    else
    {
        return null;
    }
}

function computerTurn(num)
{
    let randomNum = Math.floor(Math.random () * 3);
    console.log(randomNum);

    if (num==randomNum)
    {
        document.getElementById('decision').innerHTML = "You Tied! Both sides chose the same";
    }
    else if (num==2 && randomNum==1)
    {
        document.getElementById('decision').innerHTML = "Computer chose Paper. You Won!";
        pScore++;
    }
    else if (num==2 && randomNum==0)
    {
        document.getElementById('decision').innerHTML = "Computer chose Rock. You Lost!";
        cScore++;
    }
    else if (num==1 && randomNum==0)
    {
        document.getElementById('decision').innerHTML = "Computer chose Rock. You Won!";
        pScore++;
    }
    else if (num==1 && randomNum==2)
    {
        document.getElementById('decision').innerHTML = "Computer chose Scissor. You Lost!";
        cScore++;
    }
    else if (num==0 && randomNum==2)
    {
        document.getElementById('decision').innerHTML = "Computer chose Scissor. You Won!";
        pScore++;
    }
    else if (num==0 && randomNum==1)
    {
        document.getElementById('decision').innerHTML = "Computer chose Paper. You Lost!";
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
