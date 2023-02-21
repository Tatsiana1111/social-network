import React, { useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   getMorePostsTC,
   getPostsTC,
   getProfileData,
   getStatus,
   updateStatus,
} from '../../../bll/profileReducer'
import avatar from '../../../common/images/defaultUser.jpg'
import { Box } from '../../components/Box/Box'
import { CameraIcon } from '../../components/CameraIcon/CameraIcon'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { Loader } from '../../components/Loader/Loader'
import { LookingForAJob } from '../../components/lookingForAJob/lookingForAJob'
import { AddNewPostModal } from '../../components/Modal/AddNewPostModal/AddNewPostModal'
import { Post } from '../../components/Post/Post'
import { UpdateProfile } from '../../components/UpdateProfile/UpdateProfile'
import { UpdateProfileForm } from '../../components/UpdateProfileForm/UpdateProfileForm'

import { WrapperDiv } from './styled'

export const ProfilePage = () => {
   const myProfileID = useAppSelector(state => state.app.profileID)
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const posts = useAppSelector(state => state.profile.posts)
   const userStatus = useAppSelector(state => state.profile.status)

   const fetch = useAppSelector(state => state.profile.fetch)

   const [isModalOpen, setModalOpen] = useState(false)
   const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (profileID) {
         dispatch(getProfileData(+profileID))
         dispatch(getStatus(+profileID))
         dispatch(getPostsTC())
      }
   }, [profileID])

   const updateUserStatus = (status: string) => {
      dispatch(updateStatus(status))
   }

   const getPostsHandler = () => {
      dispatch(getMorePostsTC())
   }

   const handleModalOpen = () => {
      setModalOpen(true)
   }

   const handleModalClose = () => {
      setModalOpen(false)
   }
   const showPostsHandler = () => {
      return posts.map((post, index) => {
         return <Post post={post} key={index} />
      })
   }

   return (
      <WrapperDiv>
         <AnimatePresence>
            {isModalOpen && (
               <AddNewPostModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} />
            )}
         </AnimatePresence>
         <Box className={'profilePhoto'}>
            {lookingForAJob && <LookingForAJob />}
            {profileID ? myProfileID === +profileID && <CameraIcon /> : ''}
            <img
               alt="user avatar"
               className="userAvatar"
               src={userLargeAvatar ? userLargeAvatar : avatar}
            />
         </Box>
         <Box className={'profileData'}>
            {/*<UpdateProfileForm />*/}
            {/*<span className="span">*/}
            {/*   <EditableSpan text={userStatus} updateText={updateUserStatus} />*/}
            {/*</span>*/}
            <UpdateProfile />
         </Box>
         {profileID
            ? myProfileID === +profileID && (
                 <Box onClick={handleModalOpen} className={'profileButtonAddPost'}>
                    <span>Add new post</span>
                 </Box>
              )
            : ''}
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
