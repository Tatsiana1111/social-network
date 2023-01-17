import React from 'react'

import styled from 'styled-components'

import { UserItemsType } from '../../../api/usersAPI'
import { Box } from '../../components/Box/Box'

const UserWrapper = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   :hover {
      transform: scale(1.01);
   }
   img {
      max-width: 250px;
      min-width: 200px;
   }
   div {
      display: flex;
      gap: 10px;
      button {
         cursor: pointer;
         padding: 7px 13px;
         color: white;
         text-transform: capitalize;
         background-color: #447bba;
         border: none;
         border-radius: 10px;
      }
      button:hover {
         opacity: 0.88;
      }
      button:disabled {
         cursor: not-allowed;
         opacity: 0.7;
      }
   }
`

type UserType = {
   user: UserItemsType
}
export const User = (props: UserType) => {
   return (
      <UserWrapper>
         <img
            src={
               props.user.photos.small
                  ? props.user.photos.small
                  : 'https://via.placeholder.com/150px'
            }
            alt="userPhoto"
         />
         <span>{props.user.name}</span>
         <div>
            <button>follow</button>
            <button disabled>unFollow</button>
         </div>
      </UserWrapper>
   )
}
