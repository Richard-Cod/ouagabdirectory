import React from 'react'
import ItemCard from './ItemCard'

function ItemCardList() {
  return (
    <div className='p-6 space-y-8'>
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  )
}

export default ItemCardList