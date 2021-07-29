import React from 'react'

const ItemCard = ( {grocery, addToCart, cart, removeFromCart}) => {

  const inCart = cart.find(el => el.id === grocery.id)

  return (
    <div>
      <h4>{grocery.name}</h4>
      <p>{grocery.price}</p>
      {inCart ? <button onClick={() => removeFromCart(grocery)}>Remove From Cart</button> : <button onClick={() => addToCart(grocery)}>Add to Cart</button>}
      
    </div>
  )
}

export default ItemCard
