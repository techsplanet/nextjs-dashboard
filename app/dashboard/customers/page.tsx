import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
  title:'Customers',
}

const page = () => {
  return (
    <div className='flex justify-center items-center bg-black text-white text-3xl font-bold'><p>Customers Page</p></div>
  )
}

export default page