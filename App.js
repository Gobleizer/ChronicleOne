import { Button, Text, TurboModuleRegistry, View } from 'react-native';

import { useState } from 'react';

const options = ["Rock", "Paper", "Scissors"];

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  

  const makeMoves = (choice) => {
    setComputerChoice(getRandomArrayElement(options));
    setPlayerChoice(choice);
  }

  const isPlayerWinner = () => {
    //rock beats scissors
    //scissors beats paper
    //paper beats rock
    let result = false;
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
      result = true;
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
      result = true;
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
      result = true;
    }
    return result;
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
          <Button title="Reset" onPress={() => setPlayerChoice(null)} />
        </View>
      )}
    </View>
  );
}