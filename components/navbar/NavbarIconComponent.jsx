import Image from "next/image"
import Link from "next/link"

const NavbarIconComponent = ({ href, iconNav, navbarName, selected, width, height }) => {
    return (
        <Link href={href} className={`items-center flex flex-col ${selected ? 'text-accent' : ''}`}>
            <Image
                src={iconNav}
                alt={navbarName}
                width={width}
                height={height}
            />
            <p className='text-xs'>
                {navbarName}
            </p>
        </Link>
    )
}

export default NavbarIconComponent