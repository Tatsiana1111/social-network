import React, { useEffect, useState } from 'react'

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
import { InfiniteScroll } from '../../components/InfiniteScroll/InfiniteScroll'
import { Post } from '../../components/Post/Post'

import { WrapperDiv } from './styled'

export const ProfilePage = () => {
   const profileID = useAppSelector(state => state.app.profileID)
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const posts = useAppSelector(state => state.profile.posts)
   const userStatus = useAppSelector(state => state.profile.status)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   const contacts = useAppSelector(state => state.profile.data.contacts)
   const currentPage = useAppSelector(state => state.profile.currentPage)
   const fetch = useAppSelector(state => state.profile.fetch)
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)
   // const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getProfileData(profileID))
      dispatch(getStatus(profileID))
   }, [])

   const updateUserStatus = (status: string) => {
      dispatch(updateStatus(status))
   }
   // const updateProfileHandler = (profile: ProfileDataType) => {
   //    dispatch(updateProfile(profile))
   // }
   const getPostsPortionHandler = () => {
      dispatch(getPostsTC({ _page: currentPage, _limit: 10 }))
   }
   const setFetchingHandler = () => {
      dispatch(setFetchingAC({ fetch: true }))
   }

   return (
      <WrapperDiv>
         <Box className={'profilePhoto'}>
            <img alt="user avatar" src={userLargeAvatar ? userLargeAvatar : avatar} />
         </Box>
         <Box className={'profileData'}>
            <span>{profileName}</span>
            <EditableSpan text={userStatus} updateText={updateUserStatus} />
            <span>{userAboutMeInfo}</span>
         </Box>
         <div className={'profilePosts'}>
            <InfiniteScroll
               className="post"
               fetchData={getPostsPortionHandler}
               setFetching={setFetchingHandler}
               isFetching={fetch}
            >
               {posts.map((post, index) => {
                  return <Post post={post} key={index}></Post>
               })}
            </InfiniteScroll>
            <GoToTopButton />
         </div>
      </WrapperDiv>
   )
}
