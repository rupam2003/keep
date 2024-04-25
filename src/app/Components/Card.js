
import React from 'react'
import Link from 'next/link'
const Card = (props) => {


  
  return (
    <div style={{background:props.color}} className= {` note-card text-black rounded-lg  m-2 p-5 border-white transition-all shadow-lg hover:scale-105 hover:shadow-2xl`}>
        
        <Link href={`/note/${props.id}`}> 
            <h1 className='line-clamp-1 font-semibold text-2xl' >{props.title}</h1>
            <h1 className='h-[140px] text-lg line-clamp-5 font-medium '>{props.note}</h1>
        </Link>
        
    </div>
  )
}

export default Card
