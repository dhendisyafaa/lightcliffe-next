import { useRouter } from "next/router"
import Beranda from '../../public/icon/beranda.svg'
import Chat from '../../public/icon/chat.svg'
import Order from '../../public/icon/order.svg'
import Promo from '../../public/icon/promo.svg'
import NavbarIconComponent from "./NavbarIconComponent"

const NavbarComponent = () => {

    const router = useRouter();

    return (
        <div className="navbar grid grid-cols-4 fixed bottom-0 items-center w-full py-2.5 rounded-t-xl bg-white shadow-[0_30px_30px_20px_rgba(0,0,0,1)] z-30">
            <NavbarIconComponent navbarName={'Beranda'} href={'/'} iconNav={Beranda} selected={router.pathname === '/' ? true : false} />
            <NavbarIconComponent navbarName={'Promo'} href={'/promo'} iconNav={Promo} selected={router.pathname === '/promo' ? true : false} />
            <NavbarIconComponent navbarName={'Order'} href={'/order'} iconNav={Order} selected={router.pathname === '/order' ? true : false} />
            <NavbarIconComponent navbarName={'Chat'} href={'/chat'} iconNav={Chat} selected={router.pathname === '/chat' ? true : false} />
        </div>
    )
}

export default NavbarComponent