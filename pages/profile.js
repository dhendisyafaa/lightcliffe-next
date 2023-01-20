import CardSetting from "@/components/CardSetting";
import Image from "next/image";
import { Component } from "react";
import photoProfil from '../public/products/2.png'
import Gear from '../public/icon/setting.svg'
import Link from "next/link";

export default class profile extends Component {
  render() {
    return (
      <>
        <div className='h-full'>
          <div className="flex justify-end mt-3 mr-3">
            <Link href="/" className=' rounded-full text-accent px-2 py-0.5 hover:bg-accent hover:text-white ease-in duration-300'>X</Link>
          </div>
          <div className="px-6 py-4 mt-4">
            <div className="flex justify-between items-center border-b-2 pb-6">
              <div className="flex items-center gap-3">
                <Image src={photoProfil} alt="photoprofil" className='h-14 w-14 rounded-full' />
                <div className="">
                  <p className='font-semibold text-sm leading-4'>Dhendi Syafa Athallah Putra</p>
                  <p className='font-light text-xs mb-1'>dhensganteng@gmail.com</p>
                  <p className='font-extralight text-xs'>089123456789</p>
                </div>
              </div>
              <div className="">
                <Image src={Gear} alt="editProfile" />
              </div>
            </div>
          </div>
          <div className="px-5">
            <p className='font-bold text-sm mb-5'>Pengaturan lainnya</p>
            <div className="flex flex-col gap-5">
              <CardSetting
                nameSetting="Pengaturan Alamat" />
              <CardSetting
                nameSetting="Keamanan Akun" />
              <CardSetting
                nameSetting="Notifikasi" />
              <CardSetting
                nameSetting="Tema Aplikasi" />
            </div>

          </div>
        </div>
      </>
    )
  }
}
