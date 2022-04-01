import './App.css';
import { useEffect, useState } from 'react';
import Characters from './Components/Characters';
import Form from './Components/Form'
import { Routes, Route, Link } from 'react-router-dom'

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
    <Routes>
      <Route path="/" element={<Characters key= "key" characters={characters} removeCharacter={removeCharacter} />}/>
      <Route path="/cards" element={<Form />} />
    </Routes>
  );
}

export default App;
