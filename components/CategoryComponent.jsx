import { Component } from 'react'
import NavbarIconComponent from '../components/navbar/NavbarIconComponent'
import BebasBaca from '../public/icon/bebas-baca.png'
import Novel from '../public/icon/novel.png'
import Komik from '../public/icon/komik.png'
import Majalah from '../public/icon/majalah.png'

export default class CategoryComponent extends Component {

  render() {
    return (
      <div className="grid grid-cols-[auto_auto_auto_auto]">
        <NavbarIconComponent
          iconNav={BebasBaca} width={35} height={35} navbarName="Bebas Baca" href="/viewall"
        />
        <NavbarIconComponent
          iconNav={Novel} width={35} height={35} navbarName="Novel" href="/viewall"
        />
        <NavbarIconComponent
          iconNav={Komik} width={35} height={35} navbarName="Komik" href="/viewall"
        />
        <NavbarIconComponent
          iconNav={Majalah} width={35} height={35} navbarName="Majalah" href="/viewall"
        />
      </div>
    )
  }
}