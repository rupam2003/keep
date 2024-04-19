
import { getServerSession } from 'next-auth'
import Note from '../Components/Note'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const page = async () => {


  const session = await getServerSession(authOptions)
  if(!session)
  {
    redirect("/login")
  }
  const email = session.user.email
  const title = ""  
  const note = ""
  return (
    <div>
      
      <Note endpoint={"createNote"} id={""} title = {title} email = {email} note = {note}/>
    </div>
        
    
    
  )
}

export default page