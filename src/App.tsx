import { useState } from "react";
import words from "./wordList.json";
import { HangmanWord } from "./components/HangmanWord";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { Keyboard } from "./components/Keyboard";


function App() {
  //
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Lose Win
      </div>
      <HangmanDrawing/>
      <HangmanWord/>
      <div style={{alignSelf: "stretch"}}>
      <Keyboard/>
      </div>

    </div>
  );
}

export default App;
