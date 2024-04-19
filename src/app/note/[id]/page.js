import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Note from '@/app/Components/Note'


import Link from 'next/link'
import DeleteButton from '@/app/Components/DeleteButton'
const page = async ({params}) => {

    const session = await getServerSession(authOptions)
    if(!session)
    {
      redirect("/login")
    }
    const id = params.id
  const email = session.user.email
  const res = await fetch("http://keep-black-two.vercel.app/api/getNote" , {
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
    
      email,
      id,
    }),
  })  

  const {note} = await res.json()

  return (

    
    
    <div>
        {
            note
            ?
            <div>
                <Note endpoint={"updateNote"} id={params.id} title = {note.title} email = {email} note = {note.note}/>
                <DeleteButton id={params.id} email={email} />
            </div>
            :<div>no note found</div>
        }
        
        
    </div>
    

  )
}

export default page
