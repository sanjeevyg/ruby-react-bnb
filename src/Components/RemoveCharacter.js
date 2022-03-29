import React from 'react'

export default function RemoveCharacter({character, removeCharacter}) {

const handleDelete = (event) => {
      event.preventDefault()
      removeCharacter(character)
    }


  return (
    <div>
        <button onClick={handleDelete}>
            Delete
        </button>
    </div>
  )
}
