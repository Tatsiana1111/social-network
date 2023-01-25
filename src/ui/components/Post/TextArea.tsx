import React, { ChangeEvent, useState } from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addCommentsTC } from '../../../bll/commentsReducer'
import sendIcon from '../../../common/icons/send.png'
import miniAvatar from '../../../common/images/miniAvatar.svg'
import { CommentsDataType } from '../../../dal/profileAPI'

const TextAreaWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   .sendIcon {
      cursor: pointer;
      width: 30px;
      height: 30px;
   }
   textarea {
      width: 100%;
      min-width: 100px;

      resize: none;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid skyblue;
      background-color: ${props => props.theme.colors.backGroundColor};
      color: ${props => props.theme.colors.primary};
   }
`

type PropsType = {
   postId: number
}
export const TextArea = (props: PropsType) => {
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)
   const dispatch = useAppDispatch()
   const [comment, setComment] = useState('')

   const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.currentTarget.value)
   }
   const AddNewCommentHandler = () => {
      if (comment.trim()) {
         const data: CommentsDataType = {
            postId: props.postId,
            body: comment,
            name: profileName,
         }

         dispatch(addCommentsTC(data))
         setComment('')
      }
   }

   return (
      <TextAreaWrapper>
         <img src={userSmallAvatar ? userSmallAvatar : miniAvatar} alt="user-avatar" />
         <textarea
            placeholder="Write your comment"
            onChange={handleCommentChange}
            value={comment}
         />
         <img className={'sendIcon'} onClick={AddNewCommentHandler} src={sendIcon} alt="sendIcon" />
      </TextAreaWrapper>
   )
}
