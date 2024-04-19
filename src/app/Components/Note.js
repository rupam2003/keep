"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { GrDocumentUpdate } from "react-icons/gr";
import { useState } from 'react'

const Note = (props) => {
    const router = useRouter() 
    const [title, settitle] = useState(props.title)
    const [note, setnote] = useState(props.note)
    const [email, setemail] = useState(props.email)
    const [id, setid] = useState(props.id)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch(`http://keep-black-two.vercel.app/api/${props.endpoint}` , {
          method: "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            
            email,
            title,
            note,
            id,
          }),
        })
        console.log(res);
        router.push("/")
        router.refresh()
        
      }
  return (
    <div className=' mx-4 h-screen'>
        
       
        <form onSubmit={handleSubmit} className='flex flex-col'>
            
            <input onChange={(e)=>{settitle(e.target.value)}} className='bg-transparent outline-none p-1.5 text-3xl font-semibold rounded-md  my-2 bg-gray-300' type='text' placeholder='title' value={title} />
            <textarea rows={15} onChange={(e)=>{setnote(e.target.value)}} className='text-xl  bg-transparent outline-none resize-none p-1.5  rounded-md  my-2 bg-gray-300' type='text' placeholder='note' value={note}/>
            <button onClick={handleSubmit} className= 'text-white  bg-black rounded-full transition-all fixed bottom-10 right-10 flex border-2 border-black  hover:bg-white hover:text-black'><GrDocumentUpdate className='text-[2.5rem] p-2' /><span className='my-auto text-xl pr-3'>Save</span></button>

        </form>
        
      
    </div>
  )
}

export default Note
