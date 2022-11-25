import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'logic/models/Category'
import { Society } from 'logic/models/Post'
import { boolean } from 'yup'
import { RootState } from '../store'

export interface HomePageState {
  categories: Category[] | null
  selectedCategory: Category | null
  societies : Society[] | null
  likedSocietiesIds: number[]
}

const initialState: HomePageState = {
  categories: null,
  selectedCategory: null,
  societies:null,
  likedSocietiesIds : [1]
}

interface likeOrDislikePayload {
  societyId : number,
}

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setCategories: (state , action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
    setSelectedCategory: (state , action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload
    },
    setSocieties: (state , action: PayloadAction<Society[]>) => {
      state.societies = action.payload
    },
    likeOrDislikeSociety: (state , action: PayloadAction<likeOrDislikePayload>) => {
      if(!state.societies) return
      
      const {societyId} = action.payload

      const findIndex = state.likedSocietiesIds.findIndex((v) => v === societyId)
      const cloneValue = [...state.likedSocietiesIds]
      const isLiked = findIndex > -1

      if(isLiked){
          cloneValue.splice(findIndex, 1)
          state.likedSocietiesIds = cloneValue
          return
      }
      state.likedSocietiesIds = [...state.likedSocietiesIds,societyId]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategories , setSelectedCategory , setSocieties,likeOrDislikeSociety } = homePageSlice.actions

export const selectCategories = (state: RootState) => state.homePageReducer.categories
export const selectSelectedCategory = (state: RootState) => state.homePageReducer.selectedCategory
export const selectSocieties = (state: RootState) => state.homePageReducer.societies
export const selectLikedSocietiesIds = (state: RootState) => state.homePageReducer.likedSocietiesIds



export const isSocietyLiked = (societiesIds: number[] |null , societyId:number) => {
  const found = societiesIds?.find((id) => id === societyId )
  console.log("found")
  console.log("societyId",societyId)
  console.log(found)
  console.log(societiesIds)
  return found !== undefined
}


export default homePageSlice.reducer