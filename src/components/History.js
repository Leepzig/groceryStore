import React, { useState, useEffect } from 'react'

const History = () => {

  const [history, setHistory] = useState([])

  useEffect(() => {
    fetch("http://localhost:3002/carts")
    .then(resp => resp.json())
    .then(data => setHistory(data))
  },[])


  return (
    <div>
      <ul>
      {history.map(transaction => <li key={transaction.id}>Total:{transaction.total} | Items Purchased: {transaction.items.length}</li>)}
      </ul>
    </div>
  )
}

export default History
