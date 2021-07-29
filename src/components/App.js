import React, {useEffect, useState} from "react"
import NavBar from "./NavBar"
import Items from "./Items"
import Checkout from "./Checkout"
import History from "./History"

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  const [groceries, setGroceries] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  
  const updateTotal = () => {
    setTotal(cart.reduce((acc, cv) => {
      return acc + cv.price}, 0))
  }

  useEffect(updateTotal, [cart])

  useEffect(() => {
    fetch("http://localhost:3002/items")
    .then(resp => resp.json())
    .then(data => setGroceries(data))
  }, [])

  const addToCart = item => {
    setCart([...cart, item])
  }

  const emptyCart = () => {
    setCart([])
  }

  const removeFromCart = item => {
    setCart(cart.filter(grocery => grocery.id !== item.id))

  }

  return (
    <Router>

    
    <div className="App">
      <h1>Hank's Grocery Store</h1>
      <NavBar/>
      <Switch >
      <Route exact path="/">
      <h2>Your Total: {total}</h2>
      <h2>Merchandise</h2>
        <Items groceries={groceries} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>
      </Route>
      <Route exact path="/checkout">
        <Checkout cart={cart} total={total} emptyCart={emptyCart}/>
      </Route>
      <Route exact path="/history">
        <History/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
