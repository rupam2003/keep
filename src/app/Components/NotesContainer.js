
import React from 'react'
import Card from './Card'

const NotesContainer = (props) => {
    const Notes= props.notes
    const colors = ["#FFCF7D",
    "#BE9EFF",
    "#E7F19A",
    "#05D9FE",
    "#FEA57D"]
    

  return (
    <>
        {Notes.map( (note) =>{
          return <Card color = {colors[ Math.floor(Math.random() * 4)]} key={note._id} id={note._id} title = {note.title} note = {note.note}/>
        }
        )
      }
    </>
  )
}

export default NotesContainer