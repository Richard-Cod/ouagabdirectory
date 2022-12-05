import { selectSocieties } from 'app/redux/features/homepageSlice'
import { useAppSelector } from 'app/redux/hooks'
import { Society } from 'logic/models/Society'
import React from 'react'
import ItemCard from './ItemCard'

function ItemCardList({societies} : {societies : Society[]}) {
  return (
    <div className='p-6 space-y-8'>
      {societies?.map((v,i) => {
        return <ItemCard key={i} society={v} />
      })}
    </div>
  )
}

export default ItemCardList