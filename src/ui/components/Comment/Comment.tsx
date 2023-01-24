import React from 'react'

import userPhoto from '../../../common/images/defaultUser.jpg'
import { CommentsDataType, PostDataType } from '../../../dal/profileAPI'

import { CommentEmail, CommentText, PostDiv } from './styled'

type CommentPropsType = {
   comments: CommentsDataType[]
   post: PostDataType
}
export const Comment = (props: CommentPropsType) => {
   return (
      <>
         {props.comments.map(comment => {
            if (props.post.id === comment.postId) {
               return (
                  <PostDiv key={comment.id}>
                     <img src={userPhoto} alt="post user photo" />
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
