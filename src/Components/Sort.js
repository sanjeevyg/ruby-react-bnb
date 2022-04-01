import React from 'react'

export default function Sort({order, handleOrder}) {
  return (
    <div>
        <label htmlFor='sort-by-order'>Sort by order!</label>
        <select name='order' id='sort-by-order' value={order} onChange={handleOrder} >
            <option value='ascending'>ascending</option>
            <option value='descending'>decending</option>
        </select>
    </div>
  )
}
