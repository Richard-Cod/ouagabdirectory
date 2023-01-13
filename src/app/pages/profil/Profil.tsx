import { selectUser, setUser } from 'app/redux/features/userSlice'
import { selectHomePageVM } from 'app/redux/features/vms'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks'
import { useNavigate } from 'react-router-dom'
import AppPageLayout from '../appPageLayout/AppPageLayout'

function Profil() {
    const navigate = useNavigate()
  
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const homePageVM = useAppSelector(selectHomePageVM)
  const handleLogout = () => {
    homePageVM.logout()
    dispatch(setUser(null))
    navigate("/")

  }


  if(!user) return null

  return (
    <AppPageLayout>
          <button
        onClick={() => handleLogout()}
        >Deconnexion
        </button>
    </AppPageLayout>

  )
}

export default Profil