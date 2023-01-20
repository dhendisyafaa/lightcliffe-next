import React, { Component } from 'react'
import product1 from '../../public/products/2.png'
import author from '../../public/icon/author.svg'
import release from '../../public/icon/release.svg'
import Image from 'next/image'

export default class PromoCard extends Component {
  render() {
    const {promoPercent, nameProduct, priceProduct, releaseDate, authorName} = this.props
    return (
      <div className='rounded-lg w-full overflow-hidden shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]'>
        <div className="relative">
          <Image
           src={product1}
          />
          <div className="absolute top-0 z-30 text-white rounded-br-lg bg-accent font-semibold text-xs px-2 py-1">{promoPercent}</div>
        </div>
        <div className="m-2 flex flex-col gap-2">
            <p className='font-normal text-xs leading-4'>{nameProduct}</p>
            <p className='text-xs font-semibold'>Rp. {priceProduct}</p>
            <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                    <Image
                     src={release}
                     />
                    <p className='text-[8px]'>{releaseDate}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <Image
                     src={author}
                    />
                    <p className='text-[8px]'>{authorName}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
