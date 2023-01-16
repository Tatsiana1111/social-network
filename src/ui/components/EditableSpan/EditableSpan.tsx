import React, { ChangeEvent, useEffect, useState } from 'react'

type EditableSpanPropsType = {
   text: string
   updateText: (args: any) => void
   id?: string
}
export const EditableSpan = (props: EditableSpanPropsType) => {
   const [editMode, setEditMode] = useState(false)
   const [text, setText] = useState(props.text)

   useEffect(() => {}, [props.text])
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

   return (
      <div>
         {!editMode && (
            <span id={props.id} onDoubleClick={activateEditMode}>
               {props.text || 'no status'}
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
