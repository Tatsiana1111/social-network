import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addPostTC } from '../../../bll/profileReducer'
import miniAvatar from '../../../common/images/miniAvatar.svg'
import { PostDataType } from '../../../dal/profileAPI'
import { Box } from '../Box/Box'

import sendIcon from './../../../common/icons/send.png'
import { BoxWrapper, PostWrapper, WrapperDiv } from './styled'

type PostPropsType = {
   post: PostDataType
}
type Textarea = {
   post: string
}
export const Post = (props: PostPropsType) => {
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userId = useAppSelector(state => state.profile.data.userId)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)
   const dispatch = useAppDispatch()

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Textarea>()

   const onSubmit: SubmitHandler<Textarea> = data => {
      dispatch(addPostTC({ userId: userId, body: data.post, id: userId, title: data.post }))
      reset()
   }

   return (
      <BoxWrapper>
         <Box>
            <PostWrapper>
               <div className={'PostHeader'}>
                  <img
                     src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                     alt="user mini-avatar"
                  />
                  <span>{profileName}</span>
               </div>
               <p style={{ fontWeight: 'bold' }}>{props.post.title}</p>
               <p>{props.post.body}</p>
               <div className={'comment'}>
                  <img
                     src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                     alt="user mini-avatar"
                  />
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <WrapperDiv>
                        <textarea
                           placeholder="Write your comment"
                           {...register('post', { required: true })}
                        />
                        <button>
                           <img className="sendIcon" src={sendIcon} alt="sendIcon" />
                        </button>
                     </WrapperDiv>
                  </form>
               </div>
            </PostWrapper>
         </Box>
      </BoxWrapper>
   )
}
