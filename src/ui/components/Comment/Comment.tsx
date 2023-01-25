import React from 'react'

import { useAppSelector } from '../../../app/hooks'
import userPhoto from '../../../common/images/defaultUser.jpg'
import { CommentsDataType, PostDataType } from '../../../dal/profileAPI'

import { CommentEmail, CommentText, PostDiv } from './styled'

type CommentPropsType = {
   comments: CommentsDataType[]
   post: PostDataType
}
export const Comment = (props: CommentPropsType) => {
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)

   return (
      <>
         {props.comments.map(comment => {
            if (props.post.id === comment.postId) {
               return (
                  <PostDiv key={comment.id}>
                     <img
                        src={profileName === comment.email ? userLargeAvatar : userPhoto}
                        alt="post user photo"
                     />
                     <div>
                        <CommentEmail>{comment.email}</CommentEmail>
                        <CommentText key={comment.id}>{comment.body}</CommentText>
                     </div>
                  </PostDiv>
               )
            }
         })}
      </>
   )
}
