function computerTurn(num)
{
    let randomNum = Math.floor(Math.random () * 3);
    console.log(randomNum);
    
    if (num>randomNum && num !=0)
    {
        document.getElementById('decision').innerHTML = "You Won!";
    }
    else if (num ==0 && randomNum ==2)
    {
        document.getElementById('decision').innerHTML = "You Won!";
    }
    else if (num == randomNum)
    {
        document.getElementById('decision').innerHTML = "You Tied!";
    }
    else{
        document.getElementById('decision').innerHTML = "You Lost!";
    } 
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
