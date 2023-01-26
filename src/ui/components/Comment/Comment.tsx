import React from 'react'

import userPhoto from '../../../common/images/defaultUser.jpg'
import { CommentsDataType } from '../../../dal/profileAPI'

import { CommentEmail, CommentText, CommentWrapper } from './styled'

type CommentPropsType = {
   comment: CommentsDataType
}
export const Comment = (props: CommentPropsType) => {
   return (
      <CommentWrapper>
         <img src={userPhoto} alt="post user photo" />
         <div>
            <CommentEmail>{props.comment.name}</CommentEmail>
            <CommentText>{props.comment.body}</CommentText>
         </div>
      </CommentWrapper>
   )
}
