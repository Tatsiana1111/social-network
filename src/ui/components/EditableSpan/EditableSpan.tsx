import React, { ChangeEvent, useEffect, useState } from 'react'

type EditableSpanPropsType = {
   text: string
   updateText: (text: string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
   const [editMode, setEditMode] = useState(false)
   const [text, setText] = useState(props.text)

   const activateEditMode = () => {
      setEditMode(true)
   }
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateText(text)
   }
   const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
      return setText(event.currentTarget.value)
   }

   useEffect(() => {}, [props.text])

   return (
      <div>
         {!editMode && (
            <span>
               <span onDoubleClick={activateEditMode}>{props.text || 'no status'}</span>
            </span>
         )}
         {editMode && (
            <div>
               <input
                  value={text}
                  onChange={onStatusChange}
                  autoFocus={true}
                  onBlur={deactivateEditMode}
               />
            </div>
         )}
      </div>
   )
}
