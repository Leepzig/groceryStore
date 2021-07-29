import React, { useState } from 'react'
import ItemCard from "./ItemCard"

const Items = ({ groceries, addToCart, cart, removeFromCart }) => {

  const [sort, setSort] = useState("")

  const handleChange = e => {
    setSort(e.target.value)
  }


  const sortedAlphabetically = [...groceries].sort((a, b) => a.name > b.name ? -1 : 1)
  const sortedByPrice = [...groceries].sort((a, b) => a.price - b.price)

  console.log(sortedAlphabetically)
  console.log()
  const toDisplay = sort === "price"? sortedByPrice : sort === "aToZ" ? sortedAlphabetically : groceries

  return (
    <div style={{padding:"20px"}}>
      <label>Sort By Price</label>
      <input onChange={handleChange} type="radio" name="sort" value="price" checked={sort === "price"}/>
      <label>Sort Alphabetically</label>
      <input onChange={handleChange} type="radio" name="sort" value="aToZ" checked={sort === "aToZ"}/>
      {toDisplay.map( grocery => <ItemCard grocery={grocery} key={grocery.id} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>)}
    </div>
  )
}

export default Items
