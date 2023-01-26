import React from 'react'

import { useAppSelector } from '../../../app/hooks'
import defaultUser from '../../../common/images/defaultUser.jpg'
import { CommentsDataType } from '../../../dal/profileAPI'

import { CommentEmail, CommentText, CommentWrapper } from './styled'

type CommentPropsType = {
   comment: CommentsDataType
}
export const Comment = (props: CommentPropsType) => {
   const userPhoto = useAppSelector(state => state.profile.data.photos.large)
   const userName = useAppSelector(state => state.profile.data.fullName)

   return (
      <CommentWrapper>
         <img
            src={props.comment.name === userName ? userPhoto : defaultUser}
            alt="post user photo"
         />
         <div>
            <CommentEmail>{props.comment.name}</CommentEmail>
            <CommentText>{props.comment.body}</CommentText>
         </div>
      </CommentWrapper>
   )
}
