function computerTurn()
{
    let randomNum = Math.floor(Math.random () * 3);
    console.log(randomNum);
}


function rock()
{
    document.getElementById("display").innerHTML = "You chose Rock. Cause you rock!";
    computerTurn();
}

function paper()
{
    document.getElementById("display").innerHTML = "You chose Paper. What a hater!";
}
 
function scissor()
{
    document.getElementById('display').innerHTML = "You chose Scissor. Don't Litter!"
}
