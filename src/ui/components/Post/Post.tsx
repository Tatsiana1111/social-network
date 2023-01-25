import React, { ChangeEvent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addCommentsTC, getCommentsTC } from '../../../bll/commentsReducer'
import miniAvatar from '../../../common/images/miniAvatar.svg'
import { CommentsDataType, PostDataType } from '../../../dal/profileAPI'
import { Box } from '../Box/Box'
import { Comment } from '../Comment/Comment'

import sendIcon from './../../../common/icons/send.png'
import { PostWrapper } from './styled'

type PostPropsType = {
   post: PostDataType
}
export const Post = (props: PostPropsType) => {
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const stateComments = useAppSelector(state => state.comments)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)
   const dispatch = useAppDispatch()

   const [comment, setComment] = useState('')

   const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.currentTarget.value)
   }
   const AddNewCommentHandler = () => {
      const data: CommentsDataType = {
         postId: props.post.id,
         body: comment,
         name: profileName,
      }

      dispatch(addCommentsTC(data))
   }

   useEffect(() => {
      dispatch(getCommentsTC(props.post.id))
   }, [])

   return (
      <Box>
         <PostWrapper>
            <div className={'PostHeader'}>
               <img src={userSmallAvatar ? userSmallAvatar : miniAvatar} alt="user mini-avatar" />
               <span>{profileName}</span>
            </div>
            <p style={{ fontWeight: 'bold' }}>{props.post.title}</p>
            <p>{props.post.body}</p>
            {Object.values(stateComments).map((comments, index) => {
               return <Comment post={props.post} key={index} comments={comments} />
            })}
            <div className={'comment'}>
               <img src={userSmallAvatar ? userSmallAvatar : miniAvatar} alt="user mini-avatar" />
               <div>
                  <textarea
                     placeholder="Write your comment"
                     onChange={handleCommentChange}
                     value={comment}
                  />
                  <img
                     className="sendIcon"
                     onClick={AddNewCommentHandler}
                     src={sendIcon}
                     alt="sendIcon"
                  />
               </div>
            </div>
         </PostWrapper>
      </Box>
   )
}
