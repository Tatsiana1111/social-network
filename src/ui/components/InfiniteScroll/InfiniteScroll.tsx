import React, { ReactNode, useEffect, useState } from 'react'

type InfiniteScrollType = {
   children: ReactNode
}

export const InfiniteScroll = (props: InfiniteScrollType) => {
   return <div>{props.children}</div>
}
