import Image from 'next/image'
import React from 'react'
import checkbox from '../../public/icon/checkbox.svg'
import ProdukKeranjang from './ProdukKeranjang'


const KeranjangItem = () => {
    return (
        // jadikan compoenent terpisah
        // button checkoutnya blm ada
        <div>
            <div className="m-3 p-3 shadow-md">
                <div className="flex gap-2 mb-3">
                    <Image
                        alt="photo"
                        src={checkbox}
                    />
                    <div className='leading-4 text-sm'>
                        <p className='font-semibold'>nama tokonya disini</p>
                        <small className='font-light text-xs'>Jakarta Selatan</small>
                    </div>
                </div>
                <ProdukKeranjang/>
                <ProdukKeranjang/>
            </div>
            <div className="m-3 p-3 shadow-md">
                <div className="flex gap-2 mb-3">
                    <Image
                        alt="photo"
                        src={checkbox}
                    />
                    <div className='leading-4 text-sm'>
                        <p className='font-semibold'>nama tokonya disini</p>
                        <small className='font-light text-xs'>Jakarta Selatan</small>
                    </div>
                </div>
                <ProdukKeranjang/>
                <ProdukKeranjang/>
                <ProdukKeranjang/>
                <ProdukKeranjang/>
            </div>
        </div>
    )
}

export default KeranjangItem