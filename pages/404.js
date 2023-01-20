import Image from 'next/image'
import React, { useEffect } from 'react'
import icon from '../public/logo.svg'
import leafLeft from '../public/leaf left.svg'
import leafRight from '../public/leaf right.svg'
import reading from '../public/reading.svg'
import { useRouter } from 'next/router'

const NotFound = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen relative overflow-x-hidden'>
        <Image
          alt="photo"
          src={icon}
        />
        <p className='text-accent text-4xl font-medium'>404</p>
        <p className='text-accent text-2xl font-medium'>PAGE NOT FOUND</p>
        <div className='absolute left-0'>
          <Image
            alt="photo"
            src={leafLeft}
          />
        </div>
        <div className='absolute right-0'>
          <Image
            alt="photo"
            src={leafRight}
          />
        </div>
        <div className='absolute bottom-0 right-0 lg:right-4 lg:scale-x-110'>
          <Image
            alt="photo"
            src={reading}
          />
        </div>
    </div>
  )
}

export default NotFound