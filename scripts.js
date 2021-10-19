let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
//creating a button to click to play tictactoe
let initializeBtn = document.createElement('button');
initializeBtn.innerText = "Play TicTacToe";
initializeBtn.addEventListener('click', (event) => (event.target.hidden = true));//if button is clicked, hide the button

// use the value stored in the nextPlayer variable to indicate who the next player is
let player = document.getElementById('next-lbl');
player.innerText = 'Player ' + nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   let cells = document.querySelectorAll('td'); //selecting all the cells in the table
   for(let i = 0; i <cells.length; i++){
       let addBtn = document.createElement('button');//creating a button element
       addBtn.innerHTML = '[ ]';//display [ ] on the button
       cells[i].appendChild(addBtn);//append the button to each cell
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = '[' + nextPlayer + ']';//replace the inner text of button clicked
    if (nextPlayer === 'X'){
        nextPlayer = 'O';
        player.innerText = 'Player ' + nextPlayer;
    }
    else{
        nextPlayer = 'X';
        player.innerText = 'Player ' + nextPlayer;
    }

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById('game-over-lbl');//getting the label with the id 
        let header = document.createElement('h1');
        header.innerText= 'Game Over';
        label.appendChild(header);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let counter = 0;
    for (let i = 0; i <btns.length; i++){
        if(btns[i].disabled === true){
            counter++;
        }
    }

    if (counter == btns.length){
        return true;
    }
    else{
        return false;
    }
   
}
