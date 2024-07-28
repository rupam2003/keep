import { getServerSession } from 'next-auth'
import React, { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'
import Link from 'next/link'
import Card from './Components/Card'
import AddButton from './Components/AddButton'
import NotesContainer from './Components/NotesContainer'
import Loading from './Components/Loading'

const page = async () => {
  
  const session = await getServerSession(authOptions)
  if(!session)
  {
    redirect("/login")
  }
  const colors = ["#FFCF7D",
    "#BE9EFF",
    "#E7F19A",
    "#05D9FE",
    "#FEA57D"]

  const email = session.user.email
  const res = await fetch("https://keep-black-two.vercel.app/api/allNotes" , {
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
    
      email,
    }),
  })  

  const {notes} = await res.json()

  return (
    <>
    <Suspense fallback={<Loading/>}>
    <h1 className='my-20 text-5xl text-center font-bold mx-5'>Keep all your notes<br/> Organized.</h1>
    <div className='mx-2 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
    <NotesContainer notes = {notes}/>
      
    </div>
    <AddButton/>
    </Suspense>
    </>
  )
}

export default page
