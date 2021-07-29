import React from 'react'
import { useHistory } from "react-router-dom"

const Checkout = ( { cart, total, emptyCart }) => {

  const history = useHistory()

  const handleCheckout = () => {
    fetch("http://localhost:3002/carts/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({items:cart, total:total})
    })
    .then(resp => resp.json())
    .then(data => (data))
    emptyCart()
    history.push("/")
  }

  

  return (
    <div>
      <h2>You Cart</h2>
      <h3>{total}</h3>
      <ul>
        {cart.map(item => <li key={item.id}>{item.name}: {item.price}</li>)}
      </ul>
   
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default Checkout
