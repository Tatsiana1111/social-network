import React, { ReactNode, useEffect } from 'react'

type DefaultDivType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type InfiniteScrollType = DefaultDivType & {
   children: ReactNode
   fetchData: () => void
   setFetching: () => void
   isFetching: boolean
}

export const InfiniteScroll = (props: InfiniteScrollType) => {
   useEffect(() => {
      if (props.isFetching) {
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
         props.setFetching()
      }
   }
   const { fetchData, setFetching, isFetching, ...rest } = props

   // line above is for fix problem below
   // Warning: React does not recognize the X prop on a DOM element
   // https://stackoverflow.com/questions/66176412/warning-react-does-not-recognize-the-x-prop-on-a-dom-element
   return <div {...rest}>{props.children}</div>
}
//https://www.npmjs.com/package/react-infinite-scroll-component   <-- how this component can be improved
