import "../styles/CardGrid.css";
import React, { useState } from "react";
import countryList from "../countries.json";
import Scoreboard from "./Scoreboard";
import Card from "./Card";

// The CardGrid component will hold all of the game logic and pass information
// to the card and scoreboard components

const CardGrid = (props) => {
  console.log("CardGrid");

  const allCountryIDs = countryList.map((item) => item.id);

  const [idList, setIdList] = useState(allCountryIDs);
  const [currentScore, setCurrentScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  const getRandomIDs = (allIdList) => {
    console.log("in randNum");

    let id1 = allIdList[Math.floor(Math.random() * allIdList.length)];

    // Generate new list to get second number, so no duplicates
    let tempList = allIdList.filter((id) => id1 !== id);
    let id2 = tempList[Math.floor(Math.random() * tempList.length)];

    while (!idList.includes(id1) && !idList.includes(id2) && currentScore < allCountryIDs.length) {
      id1 = allIdList[Math.floor(Math.random() * allIdList.length)];
      id2 = tempList[Math.floor(Math.random() * tempList.length)];
    }

    return [id1, id2];
  };

  const handleClick = (clickedId) => {

    if (idList.includes(clickedId)) {
      // Logic for need to increase score by 1 and update the cards
      let updatedIdList = idList.filter((id) => id !== clickedId);
      setIdList(updatedIdList)

      let newScore = currentScore + 1;
      setCurrentScore(newScore);

      if (currentScore === allCountryIDs.length - 1) {
        console.log('----------- CONGRATS U MADE IT TO THE END ------------')
        setIdList(allCountryIDs);
        setCurrentScore(0);
        setHiScore(currentScore + 1);
      }
    } else {
      // Logic for need to put score to 0, update hiscore, update cards
      setIdList(allCountryIDs);

      if (currentScore > hiScore) {
        setHiScore(currentScore);
      }
      setCurrentScore(0);
    }
  };

  let randomIDs = getRandomIDs(allCountryIDs);

  return (
    <div>
      <Scoreboard score={currentScore} hiScore={hiScore} />
      <div className="card-grid">
        <Card country={countryList[randomIDs[0]]} handleClick={handleClick} />
        <Card country={countryList[randomIDs[1]]} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default CardGrid;
