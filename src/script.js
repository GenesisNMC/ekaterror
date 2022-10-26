console.clear();

//ghost repository
let ghosts = [
  "https://images.unsplash.com/photo-1635442022449-a1a21310158c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE0MjA&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1584351829933-d0bbb3ae1f5a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE0MjA&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1601496319406-21021f4f60bd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1521159961201-a60d22ec2011?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1633380224917-74094d8d3dcf?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1604005938644-af0e58cc81e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-1.2.1&q=80",
  "https://images.unsplash.com/photo-1525930304537-d98366262d77?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE3ODQ&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1604013527955-f310df076541?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE4Njg&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1634840647398-1aa05f9be788?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE4Njg&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1635928060878-b8dff10902ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1627927682372-d0096993ae20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdob3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1465416532510-98090cdedec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1634779837059-2a40ff00a947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdob3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635525420846-373149f637e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGdob3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602595079369-ef139d49acb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxnaG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602595079369-ef139d49acb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1603388074096-41a3ae655f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80",
  "https://images.unsplash.com/photo-1619447019169-746572a5df47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1635442022449-a1a21310158c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE0MjA&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1584351829933-d0bbb3ae1f5a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE0MjA&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1601496319406-21021f4f60bd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1521159961201-a60d22ec2011?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1633380224917-74094d8d3dcf?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1604005938644-af0e58cc81e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE2NTU&ixlib=rb-1.2.1&q=80",
  "https://images.unsplash.com/photo-1525930304537-d98366262d77?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE3ODQ&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1604013527955-f310df076541?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE4Njg&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1634840647398-1aa05f9be788?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxOTE4Njg&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1635928060878-b8dff10902ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1627927682372-d0096993ae20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdob3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1465416532510-98090cdedec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1634779837059-2a40ff00a947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdob3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635525420846-373149f637e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGdob3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602595079369-ef139d49acb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxnaG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602595079369-ef139d49acb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1603388074096-41a3ae655f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80",
  "https://images.unsplash.com/photo-1619447019169-746572a5df47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
];



//variables
let tableCells = [];
let guesses = [];
let correctGuesses = []; //because removing event listeners wasn't working send help

//functions

//shuffle function: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

function setTable() {
  //removes previous table if there's any
  if (document.getElementsByTagName("table")[0] !== undefined) {
    document.getElementsByTagName("table")[0].remove();
  }

  //get tableContainer element to place table
  let parentElement = document.getElementsByClassName("tableContainer")[0];

  let rows = 6;
  let cols = 6;

  //checks for invalid initial values
  if (rows < 1 || cols < 1) {
    return;
  }
  //set nodes
  let tableDataCellNode, tableRowNode;
  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    tableRowNode = document.createElement("tr"); //new table row
    for (let j = 0; j < cols; j++) {
      tableDataCellNode = document.createElement("td");
      tableCells.push(tableDataCellNode);
      tableRowNode.appendChild(tableDataCellNode);
    }
    table.appendChild(tableRowNode); //append current tableRowNode to table
  }

  for (let i = 0; i < tableCells.length; i++) {
    //set listener
    tableCells[i].addEventListener("click", (event) => {
      guess(i);
    });
  }

  parentElement.appendChild(table); //append table to the page
  console.log(tableCells.length);
  return;
}

function guess(num) {
  function validateGuess(){
    flip(num);
    guesses.push(num);
  }
  
  if (correctGuesses.indexOf(num) != -1){ //checks if you clicked a revealed cell
    return;
  }
  
  console.log(num);
  if (guesses.length === 0) {
    //handles first guess
    validateGuess()
  } else if (guesses.length === 1 && guesses.indexOf(num) === -1){ 
    //handles second guess, preventing repeats
    validateGuess()
    checkGuess();
  } 
  
  
}

function flip(num) {
  if (!tableCells[num].hasChildNodes()) {
    let image = new Image();
    image.src = ghosts[num];
    image.innerHTML = ghosts[num];
    tableCells[num].append(image);
  } else {
    tableCells[num].removeChild(tableCells[num].firstChild);
  }
}

function checkGuess(){
  let currentGuess = [...guesses]; //store current guesses
  guesses = []; //clear guess array
  if (ghosts[currentGuess[0]] === ghosts[currentGuess[1]]){ 
    correctGuesses.push(currentGuess[0]);
    correctGuesses.push(currentGuess[1]);
  } else {
    setTimeout( ()=>{ //flips guesses back
      flip(currentGuess[0]);
      flip(currentGuess[1]);
    }, 2000)

  }
}

function start() {
  function flipAll(){
    for (let i = 0; i < 36; i++) {
      flip(i);
    }
  }
  tableCells = [];
  correctGuesses=[];
  ghosts = shuffle(ghosts);
  setTable(); 
}

window.onLoad = start();

