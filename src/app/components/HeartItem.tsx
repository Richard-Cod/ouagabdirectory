import { isSocietyLiked, likeOrDislikeSociety, selectLikedSocietiesIds } from "app/redux/features/homepageSlice"
import { useAppDispatch, useAppSelector } from "app/redux/hooks"

const HeartItem = ({societyId,classNames} : {societyId:number,classNames:string}) => {
    const dispatch = useAppDispatch()
    const societiesLikedIds = useAppSelector(selectLikedSocietiesIds)
    const liked = isSocietyLiked(societiesLikedIds,societyId)
    const handleLike = () => {
        dispatch(likeOrDislikeSociety({societyId : societyId}))
    }


    return <svg onClick={() => handleLike() } xmlns="http://www.w3.org/2000/svg" fill={liked ? "red" : "#7F7F7F"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={classNames}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
}

export default HeartItem