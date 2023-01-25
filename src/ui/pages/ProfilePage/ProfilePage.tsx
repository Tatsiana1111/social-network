import React, { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   getPostsTC,
   getProfileData,
   getStatus,
   setFetchingAC,
   updateStatus,
} from '../../../bll/profileReducer'
import avatar from '../../../common/images/avatar.svg'
import { Box } from '../../components/Box/Box'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { Loader } from '../../components/Loader/Loader'
import { AddNewPostModal } from '../../components/Modal/AddNewPostModal/AddNewPostModal'
import { Post } from '../../components/Post/Post'

import { WrapperDiv } from './styled'

export const ProfilePage = () => {
   const profileID = useAppSelector(state => state.app.profileID)
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const posts = useAppSelector(state => state.profile.posts)
   const userStatus = useAppSelector(state => state.profile.status)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   const fetch = useAppSelector(state => state.profile.fetch)
   const [isModalOpen, setModalOpen] = useState(false)

   // const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getProfileData(profileID))
      dispatch(getStatus(profileID))
      getPostsHandler()
   }, [])

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
         return <Post post={post} key={post.id} />
      })
   }

   return (
      <WrapperDiv>
         <AddNewPostModal
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
         ></AddNewPostModal>
         <Box className={'profilePhoto'}>
            <img alt="user avatar" src={userLargeAvatar ? userLargeAvatar : avatar} />
         </Box>
         <Box className={'profileData'}>
            <span>{profileName}</span>
            <EditableSpan text={userStatus} updateText={updateUserStatus} />
            <span>{userAboutMeInfo}</span>
         </Box>
         <Box className={'profileButtonAddPost'}>
            <button onClick={handleModalOpen}>Add new post</button>
         </Box>
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
