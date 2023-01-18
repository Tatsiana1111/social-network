import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import miniAvatar from '../../../common/images/miniAvatar.svg'
import { Box } from '../Box/Box'

import sendIcon from './../../../common/icons/send.png'

const PostWrapper = styled.div`
   display: flex;
   flex-direction: column;
   min-width: 100%;

   img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
   }

   .PostHeader {
      display: flex;
      gap: 10px;
      align-items: center;
   }

   p {
      margin: 10px 0;
   }

   .comment {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 10px;

      .sendIcon {
         max-width: 30px;
         max-height: 30px;
         padding: 3px;
      }

      .sendIcon:hover {
         transform: scale(1.1);
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
   }
`

export const Post = () => {
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)

   return (
      <Box>
         <PostWrapper>
            <div className={'PostHeader'}>
               <img src={userSmallAvatar ? userSmallAvatar : miniAvatar} alt="user mini-avatar" />
               <span>{profileName}</span>
            </div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem
               consectetur cum cupiditate delectus deserunt dolor dolores earum eveniet harum labore
               minima molestias nesciunt repellendus, reprehenderit tenetur totam voluptatibus.
            </p>
            <div className={'comment'}>
               <img src={userSmallAvatar ? userSmallAvatar : miniAvatar} alt="user mini-avatar" />
               <textarea placeholder="Write your comment" />
               <img className={'sendIcon'} src={sendIcon} alt="sendIcon" />
            </div>
         </PostWrapper>
      </Box>
   )
}
