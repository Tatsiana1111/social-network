import React from 'react'

import { useParams } from 'react-router-dom'

export const Album = () => {
   const { albumId } = useParams()

   return (
      <div>
         <h2>Album: {albumId}</h2>
      </div>
   )
}
