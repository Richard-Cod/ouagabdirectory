import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from 'logic/models/User'
import { RootState } from '../store'
export interface UserState {
  value: User | null
}

const initialState: UserState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state , action: PayloadAction<User>) => {
      const {email,gender,first_name,last_name,profile_pic,id} = action.payload
        const user : User = {
            email,
            gender,
            first_name,
            last_name,
            profile_pic,
            id,
            phoneNumber: '',
            address: ''
        }
      state.value = user 
    },
  },
})



// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions


export const selectUser = (state: RootState) => state.user


export default userSlice.reducer