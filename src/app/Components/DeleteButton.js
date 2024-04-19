"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDeleteOutline } from "react-icons/md";




const DeleteButton = (props) => {
    const router = useRouter()
    const email = props.email
    const note_id = props.id
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch(`http://keep-black-two.vercel.app/api/deleteNote` , {
          method: "DELETE",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            
            email,
            note_id,
          }),
        })
        console.log(res);
        router.push("/")
        router.refresh()
        
      }
  return (
    <button onClick={handleSubmit} className='fixed flex border-2 border-black bottom-10 right-36 rounded-full transition-all text-white bg-black hover:text-black hover:bg-white '><MdDeleteOutline className=' p-2 text-[2.5rem]'/><span className='my-auto text-xl pr-3'>Delete</span></button>

  )
}

export default DeleteButton
