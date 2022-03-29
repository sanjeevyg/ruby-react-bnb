import './App.css';
import { useEffect, useState } from 'react';
import Characters from './Components/Characters';

function App() {

  const [characters, setCharacters] = useState([])

  const getCharacter = () => {
    fetch('https://rickandmortyapi.com/api/character/?page=9')
    .then(response => response.json())
    .then(({results}) => setCharacters(results))
  }

  useEffect(getCharacter, [])

  const removeCharacter = (characterD) => {
    const newCharacters = characters.filter(character => character !== characterD)
    setCharacters(newCharacters)
  }

  return (
    <div className="App">
      <Characters key= "key" characters={characters} removeCharacter={removeCharacter}/>
    </div>
  );
}

export default App;
