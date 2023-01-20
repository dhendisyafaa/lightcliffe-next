import React from 'react'
import checkbox from '../../public/icon/checkbox.svg'
import produk from '../../public/products/2.png'
import min from '../../public/icon/min.svg'
import plus from '../../public/icon/plus.svg'
import Image from 'next/image'

const ProdukKeranjang = () => {
    return (
        <>
            <div className="flex gap-2">
                <Image
                    src={checkbox}
                />
                <Image
                    src={produk}
                    className="w-[75px] h-[75px] rounded-lg ml-2"
                />
                <div className="leading-5">
                    <p className='font-normal text-base leading-4'>Harry Potter and the Prisoner of Azkaban</p>
                    <p className='font-bold text-md'>Rp 185.999</p>
                </div>
            </div>
            <div className="flex justify-end gap-3">
                <Image
                    src={min}
                />
                <p>1</p>
                <Image
                    src={plus}
                />
            </div>
        </>
    )
}

export default ProdukKeranjang