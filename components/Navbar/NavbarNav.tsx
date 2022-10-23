import { NavItem } from '@/components'
import type { NavbarNavProps } from '@/components/types'

export const NavbarNav = (props: NavbarNavProps) => {
  const { items } = props

  return (
    <>
      {items.length > 0 && (
        <ul className="navbar-nav">
          {items.map((item) => (
            <NavItem key={item.title} href={item.href} title={item.title} />
          ))}
        </ul>
      )}
    </>
  )
}

export default NavbarNav
