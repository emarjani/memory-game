import './App.css';
import React, {useState, useEffect} from "react";
import getCards from "./Picture.js";

import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";

//better name functions later
function App() {

  const [boardSize, setBoardSize] = useState(8);
  const [pickedCards, setPickedCards] = useState([]);
  const [allCards, setAllCards] = useState(getCards());
  const [board, setBoard] = useState([]);
  const [highScore, setHighScore] = useState(0);


  //WHEN APP IS FIRST MOUNTED, DO:
  useEffect(() => {
    randomizeCards();
  }, []);

  useEffect(() => {
    //update highscore
    if (pickedCards.length > highScore) {
      setHighScore(pickedCards.length);
    }
    //check win, else randomize board.
    if (pickedCards.length === allCards.length) {
      console.log("You win!");
    } else {
      randomizeCards();
    }
  }, [pickedCards]);


  function shuffle(array) {
    let temp = [...array];
    let currentIndex = temp.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = temp[currentIndex];
      temp[currentIndex] = temp[randomIndex];
      temp[randomIndex] = temporaryValue;
    }
    return temp;
  }

  //sets up board, after randomizing cards.
  const randomizeCards = () => {
    let temp = shuffle(allCards);
    
    let index = temp.findIndex((card) => !pickedCards.includes(card[1]));
    console.log(temp[index][1]);
    let new_board = [temp[index]];

    //starting index to add rest of grid
    let start = 0;
    while (new_board.length < boardSize) {
      if (start !== index) {
        new_board.push(temp[start]);
      }
      start += 1;
    };

    setBoard(shuffle(new_board));
  };

  const chosenCard = (name) => {
    let updated = (pickedCards.includes(name))? [] : pickedCards.concat(name);
    setPickedCards(updated);
  };

  const openTooltip = () => {
    document.getElementById("instructions").style.display = "block";
  };

  const closeTooltip = () => {
    document.getElementById("instructions").style.display = "none";
  }

  return (
    <div className="App">
      <img id="logo" src={require(`./imgs/community_logo.png`).default}/>

      <div id="content">
        <div id="subheader">
          <div id="tooltip">
            <img onMouseOver={openTooltip} onMouseOut={closeTooltip} src = {require("./imgs/icons8-help-48.png").default}/>
            <p id="instructions">
              This is a memory game. The objective is to click on as many <b>unique</b> characters as possible.
              Have fun!
            </p>
          </div>

          <Scoreboard
          highscore={highScore}
          score={pickedCards.length}
          />
        </div>
        
        <GameBoard 
        cards={board}
        pick = {chosenCard}
        />

      </div>
      
    </div>
  );
}

export default App;
