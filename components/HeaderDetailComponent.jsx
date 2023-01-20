import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Back from '../public/icon/back.svg'
import Bag from '../public/icon/bag-white.svg'
import Profile from '../public/icon/profile.svg'
import SearchBar from './SearchBar'

const HeaderDetailComponent = () => {
  return (
    <div className="bg-accent w-full h-[8vh] px-2 flex justify-end items-center gap-1">
        <Link href="/">
          <Image
            src={Back}
          />
        </Link>

        <SearchBar />

        <div className='flex gap-2 mx-2'>
          <Link href="/">
            <Image
              src={Bag}
            />
          </Link>
          <Link href="/">
            <Image
              src={Profile}
            />
          </Link>
        </div>
      </div>
  )
}

export default HeaderDetailComponent