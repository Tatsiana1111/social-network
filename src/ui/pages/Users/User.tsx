import React from 'react'

import styled from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'
import { followUserTC, unfollowUserTC } from '../../../bll/usersReducer'
import { UserItemsType } from '../../../dal/usersAPI'
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
         font-weight: bold;
         text-transform: capitalize;
         background-color: #447bba;
         border: none;
         border-radius: 10px;
      }

      button:hover {
         opacity: 0.88;
      }

      button:disabled {
         background-color: #f0f2f5;
         color: black;
         opacity: 0.6;
      }
   }
`

type UserType = {
   user: UserItemsType
}
export const User = (props: UserType) => {
   const dispatch = useAppDispatch()

   const followUserHandler = () => {
      dispatch(followUserTC(props.user.id))
   }
   const unfollowUserHandler = () => {
      dispatch(unfollowUserTC(props.user.id))
   }

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
            <button disabled={props.user.followed} onClick={followUserHandler}>
               follow
            </button>

            <button disabled={!props.user.followed} onClick={unfollowUserHandler}>
               unFollow
            </button>
         </div>
      </UserWrapper>
   )
}
