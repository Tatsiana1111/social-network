import React from 'react'

import { CommentsDataType, PostDataType } from '../../../dal/profileAPI'

type CommentPropsType = {
   comments: CommentsDataType[]
   post: PostDataType
}
export const Comment = (props: CommentPropsType) => {
   return (
      <div>
         {props.comments.map(comment => {
            if (props.post.id === comment.postId) {
               return <div key={comment.id}>{comment.body}</div>
            }
         })}
      </div>
   )
}
