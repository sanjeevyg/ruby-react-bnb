import React from 'react'

export default function Filter({title, handleFilter}) {
  return (
    <div>
        <label htmlFor='search-by-title'>Search by Title</label>
        <input type="text" placeholder='Search by title!' value={title} onChange={ handleFilter }/>
    </div>
  )
}
