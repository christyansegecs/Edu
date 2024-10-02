
import Link from 'next/link'
import { FaLinkedinIn, FaInstagram, } from 'react-icons/fa'

    const socials = [
        {icon: <FaInstagram />, path: 'https://www.instagram.com/edudarobotica/'},
        {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/eduardo-de-almeida-8b1b925b/'},
    ]

export function Socials({ containerStyles, iconStyles }) {

    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}