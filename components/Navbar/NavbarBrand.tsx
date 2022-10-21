import Link from 'next/link'
import type { NavbarBrandProps } from '@/components/types'

export const NavbarBrand = (props: NavbarBrandProps) => {
  const { href, title, className } = props

  return (
    <Link href={href}>
      <a className={`navbar-brand ${className}`}>
        <strong>{title}</strong>
      </a>
    </Link>
  )
}

export default NavbarBrand
