import React, { ChangeEvent, useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   getPostsTC,
   getProfileData,
   getStatus,
   updatePhoto,
   updateStatus,
} from '../../../bll/profileReducer'
import avatar from '../../../common/images/defaultUser.jpg'
import { Box } from '../../components/Box/Box'
import { CameraIcon } from '../../components/CameraIcon/CameraIcon'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { Loader } from '../../components/Loader/Loader'
import { AddNewPostModal } from '../../components/Modal/AddNewPostModal/AddNewPostModal'
import { Post } from '../../components/Post/Post'

import { WrapperDiv } from './styled'

export const ProfilePage = () => {
   const myProfileID = useAppSelector(state => state.app.profileID)
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const posts = useAppSelector(state => state.profile.posts)
   const userStatus = useAppSelector(state => state.profile.status)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   const fetch = useAppSelector(state => state.profile.fetch)
   const [isModalOpen, setModalOpen] = useState(false)

   const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (profileID) {
         dispatch(getProfileData(+profileID))
         dispatch(getStatus(+profileID))
         getPostsHandler()
      }
   }, [profileID])

   const updateUserStatus = (status: string) => {
      dispatch(updateStatus(status))
   }
   // const updateProfileHandler = (profile: ProfileDataType) => {
   //    dispatch(updateProfile(profile))
   // }
   const getPostsHandler = () => {
      dispatch(getPostsTC())
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
   const updatePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
         const file = e.target.files[0]

         dispatch(updatePhoto(file))
      }
   }

   return (
      <WrapperDiv>
         <AddNewPostModal
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
         ></AddNewPostModal>
         <Box className={'profilePhoto'}>
            {
               // @ts-ignore
               myProfileID === +profileID && (
                  <CameraIcon className="icon">
                     <input className="input" type="file" onChange={updatePhotoHandler} />
                  </CameraIcon>
               )
            }
            <img
               alt="user avatar"
               className="userAvatar"
               src={userLargeAvatar ? userLargeAvatar : avatar}
            />
         </Box>
         <Box className={'profileData'}>
            <span>{profileName}</span>
            <EditableSpan text={userStatus} updateText={updateUserStatus} />
            <span>{userAboutMeInfo}</span>
         </Box>
         {
            // @ts-ignore
            myProfileID === +profileID && (
               <Box onClick={handleModalOpen} className={'profileButtonAddPost'}>
                  <span>Add new post</span>
               </Box>
            )
         }
         <div className={'profilePosts'}>
            <InfiniteScroll
               className="post"
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
