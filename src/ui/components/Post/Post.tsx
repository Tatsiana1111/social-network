import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getCommentsTC } from '../../../bll/commentsReducer'
import miniAvatar from '../../../common/images/defaultUser.jpg'
import { PostDataType } from '../../../dal/profileAPI'
import { Box } from '../Box/Box'
import { Comment } from '../Comment/Comment'

import { PostWrapper } from './styled'
import { TextArea } from './TextArea'

type PostPropsType = {
   post: PostDataType
}
export const Post = (props: PostPropsType) => {
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const stateComments = useAppSelector(state => state.comments)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getCommentsTC(props.post.id))
   }, [])

   return (
      <PostWrapper>
         <Box>
            <div className={'postInner'}>
               <div className={'PostHeader'}>
                  <img
                     src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                     alt="user mini-avatar"
                  />
                  <span>{profileName}</span>
               </div>
               <h2>{props.post.title}</h2>
               <p>{props.post.body}</p>
               {stateComments[props.post.id] &&
                  stateComments[props.post.id].map((comment, index) => {
                     return <Comment key={index} comment={comment} />
                  })}
            </div>
            <TextArea postId={props.post.id} />
         </Box>
      </PostWrapper>
   )
}
