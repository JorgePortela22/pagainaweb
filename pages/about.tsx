import React from 'react';
import Link from 'next/link';

const about = () => {
    return (
        <div className='bg-blue-400'>
           <p >Esta es la pagina de about </p> 
           <Link href='/'>
           <h1 > Ir pagina de index</h1>
           </Link>
        </div>
    );
};
export default about
