import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/redux/store'
import HomePageVM from 'logic/interfaces/viewmodels/HomePageVM'
import LoginPageVM from 'logic/interfaces/viewmodels/LoginPageVM'
import RegisterPageVM from 'logic/interfaces/viewmodels/RegisterPageVM'
import ForgetPasswordPageVM from 'logic/interfaces/viewmodels/ForgetPasswordPage/ForgetPasswordPageVM'
import ResetPasswordPageVM from 'logic/interfaces/viewmodels/ResetPasswordPageVM'
import ChangePasswordPageVM from 'logic/interfaces/viewmodels/ChangePasswordPageVM/ChangePasswordPageVM'


// Define a type for the slice state
interface ViewModelsState {
  homePageVM: HomePageVM,
  loginPageVM: LoginPageVM,
  registerPageVM : RegisterPageVM,

  forgetPasswordPageVM:ForgetPasswordPageVM,
  resetPasswordPageVM:ResetPasswordPageVM,
  changePasswordPageVM : ChangePasswordPageVM
}

// Define the initial state using that type
const initialState: ViewModelsState = {
  homePageVM: new HomePageVM(),
  loginPageVM: new LoginPageVM(),
  registerPageVM: new RegisterPageVM(),

  forgetPasswordPageVM : new ForgetPasswordPageVM(),
  resetPasswordPageVM : new ResetPasswordPageVM(),

  changePasswordPageVM : new ChangePasswordPageVM()
}

export const viewModelsSlice = createSlice({
  name: 'viewmodels',
  initialState,
  reducers: {
  },
})

export const { } = viewModelsSlice.actions

export const selectHomePageVM = (state: RootState) => state.viewModels.homePageVM
export const selectLoginPageVM = (state: RootState) => state.viewModels.loginPageVM
export const selectRegisterPageVM = (state: RootState) => state.viewModels.registerPageVM


export const selectForgetPasswordPageVM = (state: RootState) => state.viewModels.forgetPasswordPageVM
export const selectResetPasswordPageVM = (state: RootState) => state.viewModels.resetPasswordPageVM

export const selectChangePasswordPageVM = (state: RootState) => state.viewModels.changePasswordPageVM


export default viewModelsSlice.reducer