import { Button, Text, TurboModuleRegistry, View } from 'react-native';

import { useState } from 'react';

const options = ["Rock", "Paper", "Scissors"];

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const determineWinner = (playerChoice, computerChoice) => {
  //rock beats scissors
  //scissors beats paper
  //paper beats rock
  let result = "Computer";
  if (playerChoice === computerChoice) {
    result = "Draw"
  }
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    result = "Player";
  }
  if (playerChoice === "Paper" && computerChoice === "Rock") {
    result = "Player";
  }
  if (playerChoice === "Scissors" && computerChoice === "Paper") {
    result = "Player";
  }
  return result;
}

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [record, setRecord] = useState({wins: 0, losses: 0, draws: 0});
  

  const makeMoves = (choice) => {
    const computerChoiceMove = getRandomArrayElement(options);
    setComputerChoice(computerChoiceMove);
    setPlayerChoice(choice);
    updateRecord(determineWinner(choice, computerChoiceMove));
  }

  

  const updateRecord = (result) => {
    let update = {};
    if (result === "Player") {
      update.wins = record.wins + 1;
    }
    if (result === "Computer") {
      update.loses = record.losses + 1;
    }
    if (result === "Draw") {
      update.draws = record.draws + 1;
    }
    setRecord(record => ({
      ...record,
      ...update
    }))
  }


  return (
    <View>
      {playerChoice == null ? (
        <View>
          <Text>Rock / Paper / Scissors</Text>
          <Button title="Rock" onPress={() => makeMoves("Rock")} />
          <Button title="Paper" onPress={() => makeMoves("Paper")} />
          <Button title="Scissors" onPress={() => makeMoves("Scissors")} />
        </View>
      ) : (
        <View>
          <Text>You picked {playerChoice}. Computer picked {computerChoice}</Text>
          <Text>Wins {record.wins} Losses {record.losses} Draws {record.draws}</Text>
          <Button title="Reset" onPress={() => setPlayerChoice(null)} />
        </View>
      )}
    </View>
  );
}