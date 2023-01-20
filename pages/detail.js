import ButtonStandard from '@/components/button/ButtonStandard'
import HeaderDetailComponent from '@/components/HeaderDetailComponent'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import chat from '../public/icon/chat.svg'
import { default as avatar, default as imgcr } from '../public/products/2.png'

const detail = () => {
  return (
    <>
      <HeaderDetailComponent/>

      <div className='relative'>
        <div className='w-full h-[40vh]'>
          <Image
            src={imgcr}
            className='h-full'
            alt="photo"
          />
        </div>
        <div className='absolute bottom-4 left-3 flex gap-1 mt-2.5'>
          <button className='w-2 h-2 bg-grey rounded-full'></button>
          <button className='w-2 h-2 bg-accent rounded-full'></button>
          <button className='w-2 h-2 bg-grey rounded-full'></button>
          <button className='w-2 h-2 bg-grey rounded-full'></button>
          <button className='w-2 h-2 bg-grey rounded-full'></button>
        </div>
      </div>

      <div className="my-2 sm:mx-14 md:mx-20 lg:mx-28 mx-3">
        <p className='font-bold text-xl'>Rp 185.999</p>
        <p className='font-normal text-base'>Harry Potter and the Prisoner of Azkaban</p>

        <div className='flex flex-col gap-6 mt-3 h-[500px]'>
          <div className="w-full">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white py-3 px-2 border shadow-lg">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#f7b0c338] px-4 py-2 text-left text-sm font-semibold text-accent hover:bg-[#e44a7338]">
                      <span>Deskripsi Produk</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-accent`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>


          <div className='shadow-lg p-4 flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <Image
                src={avatar}
                alt="photo"
                className="rounded-full h-[45px] w-[45px]"
              />
              <div className='leading-4 text-sm'>
                <p className='font-semibold'>nama tokonya disini</p>
                <small className='font-light text-xs'>Jakarta Selatan</small>
              </div>
            </div>
            <ButtonStandard href="/toko" textButton="Cek Toko" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[10%_auto_auto] gap-1 px-3 fixed bottom-0 items-center w-full py-4 rounded-t-lg bg-white shadow-[0_30px_30px_20px_rgba(0,0,0,1)] z-30">
        <Image
          src={chat}
          alt="photo"
        />
        <button type="" className='text-accent border-2 border-accent rounded-lg text-[10px] px-3 py-[5px] text-sm font-semibold'>Beli Sekarang</button>
        <button type="" className='bg-accent border-none text-white rounded-lg text-[10px] px-3 py-[5px] text-sm font-semibold'>+ Keranjang</button>
      </div>
    </>
  )
}

export default detail