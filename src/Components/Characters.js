import React, { useState } from 'react';
import {BsFillHandThumbsUpFill} from 'react-icons/bs'
import RemoveCharacter from './RemoveCharacter.js'

export default function Characters(props) {

    const [likeCount, setLike] = useState(0)

     const handleLike = () => {
      setLike(likeCount + 1)
    }
    
    const handleDislike = () => {
      setLike(likeCount - 1)
    }

    const renderCharacters = () => props.characters.map(character => {
  
    return (
    <>
      <h1>{character.name}</h1>
      <img src={character.image} width="300"/>
      <div>
        <button onClick={handleLike}>Like <BsFillHandThumbsUpFill size={25}/></button>
        {likeCount}
        <button onClick={handleDislike}>Dislike <BsFillHandThumbsUpFill size={25}/></button>
          <RemoveCharacter key={character.id} character={character} removeCharacter={props.removeCharacter}/>
      </div>
    </>)
  })
   
  return (
    <div className="cards">
      {renderCharacters()}
      <button>Like</button>
    </div>
  )
}