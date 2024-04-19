"use client"

import Link from 'next/link'
import React from 'react'
import { IoMdAdd } from "react-icons/io";

const AddButton = () => {
  return (
    <Link
    href={"/create"}
     className='bg-black text-white rounded-full my-5 '>
      <IoMdAdd className='text-[2.5rem] p-2' />
    </Link>
  )
}

export default AddButton