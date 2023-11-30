import { Button, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const makeMoves = (choice) => {
    setComputerChoice("Rock");
    setPlayerChoice(choice);
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