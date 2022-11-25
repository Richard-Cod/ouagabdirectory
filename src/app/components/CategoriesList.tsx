

import { Category } from "logic/models/Category";
import { useState } from "react";

import foodlogo from 'app/foodlogo.svg'
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { selectCategories, selectSelectedCategory, setSelectedCategory } from "app/redux/features/homepageSlice";
const src = foodlogo
// const src ="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"
// active:text-[11px]

function CategoryItem({category} : {category:Category}) {
  const selectedCategory = useAppSelector(selectSelectedCategory)
  const selected= category.id === selectedCategory?.id
  
  return (
      <button onClick={() => {setSelectedCategory(category)}} 
      className={`biz text-[12px] group text-center pb-3 cursor-pointer  ${selected ? "border-b-2 border-black" : "hover:border-b-2 hover:border-[#EEEEEE] "}  `}>

        <div className="duration-300">
          <img src={src} className="h-6 w-6 mx-auto   " />
          <p className={`mt-2 whitespace-nowrap font-semibold  group-hover:text-black text-[#707171] ${selected && "text-black"}`}> {category.title} </p>
        </div>

      </button>
  )
}
CategoryItem.defaultProps = {
  selected : false
}
function CategoriesList() {
  const dispatch = useAppDispatch()

  const categories = useAppSelector(selectCategories)
  const selectCategory = (category : Category) => {
    dispatch(setSelectedCategory(category))
  }

  return (
    <div className="flex space-x-4 overflow-x-scroll noscrollbar">
    {categories?.map((v,i) => {
      return <CategoryItem key={i} category={v} />
    })}
  </div>
  )
}

export default CategoriesList