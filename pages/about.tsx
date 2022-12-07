import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const about = () => {
    return (
        <div className='bg-blue-400'>
            <Head>
                <title> Pagina About </title>
            </Head>
           <p >Esta es la pagina de about </p> 
           <Link href='/'>
           <h1 > Ir pagina de index</h1>
           </Link>
        </div>
    );
};
export default about
