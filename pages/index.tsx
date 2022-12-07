
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const HOME = () => {
return (
    <div >
        <Head>
        <title>My page title</title>
        </Head>
    <h1 className='bg-green-300'> Helloo amor </h1>
    <Link href='/about'>
           <h1 > Ir pagina de about</h1>
           </Link>
           <div>
            <i className='fas fa-home'/>
           </div>
    </div>
)
}
export default HOME
