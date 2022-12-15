import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { selectHomePageVM } from 'app/redux/features/vms';

import { ChangePasswordPage, ForgetPasswordPage, LoginPage, RegisterPage, ResetPasswordPage } from './pages';
import appConstants, { ROUTES } from 'constants/constants';

import { LocalDataRepository } from 'logic/interfaces/LocalDataRepository';


import {User} from "logic/models/User"
import { setUser } from 'app/redux/features/userSlice';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { setCategories, setSelectedCategory, setSocieties } from './redux/features/homepageSlice';
import SocietyDetailPage from './pages/societyDetailPage/SocietyDetailPage';
import FavoritePage from './pages/favoritePage/FavoritePage';
import AuthNav from './pages/authNav/AuthNav';
import ExplorePage from './pages/explore/ExplorePage';
import onUserScrollTopOrEnd from 'logic/helper/onUserScrollTopOrEnd';

function App() {
  const dispatch = useAppDispatch()
  const homePageVM = useAppSelector(selectHomePageVM)

  const loadCurrentUser = async () => {
    const user = await homePageVM.getLoggedInUser()
    if(user)dispatch(setUser(user))
  }

  const loadSocieties = async () => {
    const result = await homePageVM.getSocieties()
    if(result)dispatch(setSocieties(result))
  }


  const loadCategories = async () => {
    const result = await homePageVM.getCategories()
    if(result){
      dispatch(setCategories(result))
      if(result.length > 0) dispatch(setSelectedCategory(result[0]))
    }
  }

  const run = () => {
    loadCurrentUser()
    loadCategories()
    loadSocieties()
  }

  useEffect(() => {
    run()
  }, [])
  

  // useEffect(() => {
  //   const asyncFunc = async() =>{
  //   const token = await new LocalDataRepository().get(appConstants.ACCESS_TOKEN_KEY);
  //     if(token){
  //       // const decoded = jwt_decode(token);
  //       const user = await homePageVM.getLoggedInUser()
  //       if(user)
  //       dispatch(setUser(user))
  //     }
  //   }
  //   asyncFunc()
  // }, [])





  return (
    <Router>
        <Routes>
          <Route path={ROUTES.home} element={<ExplorePage />} />
          <Route path={ROUTES.favorite} element={<FavoritePage />} />
          <Route path={ROUTES.auth} element={<AuthNav />} />
          

          <Route path={ROUTES.societyDetails} element={<SocietyDetailPage />} />







          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />
          
          <Route path={ROUTES.changePassword} element={<ChangePasswordPage />} />
          <Route path={ROUTES.forgetPassword} element={<ForgetPasswordPage />} />
          <Route path={ROUTES.resetPassword} element={<ResetPasswordPage />} />



        </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;