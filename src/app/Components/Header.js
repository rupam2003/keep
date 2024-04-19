'use client'
import React from 'react'
import { LiaSignOutAltSolid } from "react-icons/lia";

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import AddButton from './AddButton';
const Header = () => {

    const {status} = useSession()
  return (

    
    <header className='fixed top-0 bottom-0 w-20 border-r-black border-[1px] flex flex-col items-center '>
        <Link href={'/'}  className='flex font-medium logo mt-2  text-2xl'>
          keep.
        </Link>
        <AddButton/>
        <button className='' onClick={() => signOut()}><LiaSignOutAltSolid className= 'p-2 rounded-full text-white  bg-black text-[2.5rem]'/></button>
    </header>
  )
}

export default Header