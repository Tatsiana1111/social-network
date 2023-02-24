import React, { useEffect } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import { Navigate, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setModalOpenAC } from '../../../bll/appReducer'
import { getMorePostsTC, getPostsTC, getProfileData, getStatus } from '../../../bll/profileReducer'
import avatar from '../../../common/images/defaultUser.jpg'
import { Box } from '../../components/Box/Box'
import { CameraIcon } from '../../components/CameraIcon/CameraIcon'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { Loader } from '../../components/Loader/Loader'
import { LookingForAJobMask } from '../../components/lookingForAJob/lookingForAJobMask'
import { Post } from '../../components/Post/Post'
import { ProfileData } from '../../components/ProfileData/ProfileData'
import { PATH } from '../Pages'

import { WrapperDiv } from './styled'

export const ProfilePage = () => {
   const myProfileID = useAppSelector(state => state.app.profileID)
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const posts = useAppSelector(state => state.profile.posts)
   const fetch = useAppSelector(state => state.profile.fetch)

   const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (profileID && +profileID) {
         dispatch(getProfileData(+profileID))
         dispatch(getStatus(+profileID))
         dispatch(getPostsTC())
      }
   }, [profileID])

   const getPostsHandler = () => {
      dispatch(getMorePostsTC())
   }
   const handleModalOpen = () => {
      dispatch(setModalOpenAC({ value: 'addPostModal' }))
   }
   const showPostsHandler = () => {
      return posts.map((post, index) => {
         return <Post post={post} key={index} />
      })
   }

   if (profileID === '0') {
      return <Navigate to={`${PATH.profile}/${myProfileID}`} />
   }

   return (
      <WrapperDiv>
         <Box className={'profilePhoto'}>
            {lookingForAJob && <LookingForAJobMask />}
            {profileID ? myProfileID === +profileID && <CameraIcon /> : ''}
            <img
               alt="user avatar"
               className="userAvatar"
               src={userLargeAvatar ? userLargeAvatar : avatar}
            />
         </Box>
         <Box className={'profileData'}>
            <ProfileData />
         </Box>
         {profileID && myProfileID === +profileID && (
            <Box onClick={handleModalOpen} className={'profileButtonAddPost'}>
               <span>Add new post</span>
            </Box>
         )}
         <div className={'profilePosts'}>
            <InfiniteScroll
               dataLength={posts.length}
               next={getPostsHandler}
               hasMore={fetch}
               loader={<Loader />}
            >
               {showPostsHandler()}
            </InfiniteScroll>
            <GoToTopButton />
         </div>
      </WrapperDiv>
   )
}
