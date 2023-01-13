import AppButton from 'app/components/AppButton'
import { selectUser, setUser } from 'app/redux/features/userSlice'
import { selectHomePageVM } from 'app/redux/features/vms'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks'
import appConstants from 'constants/constants'
import { formatFullname } from 'logic/helper/formatFullname'
import { formatImageFromBackend } from 'logic/helper/getImageFromBackend'
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

  const ShowProfilCard = <div className='flex items-center border-2 border-gray-100 p-2 my-4'>
  <img className='w-14 h-14 rounded-full mr-4' 
  src={formatImageFromBackend(user.profile_pic)} />
  <div>
    <h1> {formatFullname(user)} </h1>
    <p className='text-gray-400 text-sm'> Afficher le profil </p>
  </div>
</div>

  return (
    <AppPageLayout>
        <div className='p-5 border-2 h-screen'>
          <h1 className='text-3xl font-semibold '>Profil</h1>
          {ShowProfilCard}
          <AppButton
            classNames='bg-red-900 text-white'
            onClick={() => handleLogout()}
            label={'Deconnexion'} 
          />
          <p className='text-gray-400 text-sm text-center'>
          © {appConstants.projectName}, Inc. Tous droits réservés.  </p>
        </div>
    </AppPageLayout>

  )
}

export default Profil