
import Link from 'next/link'
import React from 'react'

const HOME = () => {
return (
    <div >
    <h1 className='bg-green-500'> Helloo amor </h1>
    <Link href='/about'>
           <h1 > Ir pagina de about</h1>
           </Link>
    </div>
)
}
export default HOME
