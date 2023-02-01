import React from 'react'

import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../../app/hooks'
import { followUserTC, unFollowUserTC } from '../../../bll/usersReducer'
import defaultUserImage from '../../../common/images/defaultUser.jpg'
import { UserItemsType } from '../../../dal/usersAPI'
import { PATH } from '../Pages'

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
         <Link to={`${PATH.profile}/${props.user.id}`}>
            <img
               src={props.user.photos.small ? props.user.photos.small : defaultUserImage}
               alt="userPhoto"
            />
         </Link>
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
