import React from 'react'

import { useAppDispatch } from '../../../app/hooks'
import { followUserTC, unFollowUserTC } from '../../../bll/usersReducer'
import { UserItemsType } from '../../../dal/usersAPI'

import { UserWrapper } from './styled-User'

type UserType = {
   user: UserItemsType
}
export const User = (props: UserType) => {
   const dispatch = useAppDispatch()

   const followUserHandler = () => {
      dispatch(followUserTC(props.user.id))
   }
   const unfollowUserHandler = () => {
      dispatch(unFollowUserTC(props.user.id))
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
