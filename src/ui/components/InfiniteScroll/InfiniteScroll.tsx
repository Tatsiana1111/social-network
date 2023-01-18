import React, { ReactNode, useEffect } from 'react'

import { User } from '../../pages/Users/User'

type DefaultDivType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type InfiniteScrollType = DefaultDivType & {
   // children: ReactNode
   fetchData: () => void
   setFetching: () => void
   isFetching: boolean
   items: any[]
}

export const InfiniteScroll = (props: InfiniteScrollType) => {
   useEffect(() => {
      if (props.isFetching) {
         // dispatch(getUsersTC({ page: currentPage }))
         props.fetchData()
      }
   }, [props.isFetching])

   useEffect(() => {
      document.addEventListener('scroll', scrollHandler)

      return function () {
         document.removeEventListener('scroll', scrollHandler)
      }
   }, [])

   const scrollHandler = (e: any) => {
      //TODO need to fix any +  (&& users.length < totalCount)

      const scrollHeight = e.target.documentElement.scrollHeight
      const scrollTop = e.target.documentElement.scrollTop
      const innerHeight = window.innerHeight
      const condition = scrollHeight - (scrollTop + innerHeight) < 100

      if (condition) {
         // dispatch(setFetching({ isFetching: true }))
         props.setFetching()
      }
   }

   return (
      <div {...props}>
         {props.items.length &&
            props.items.map((user, index) => {
               return <User key={index} user={user} />
            })}
      </div>
   )
}
