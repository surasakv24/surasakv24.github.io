import { ActiveLink } from '@/components'
import type { NavItemProps } from '@/components/types'

export const NavItem = (props: NavItemProps) => {
  const { href, title } = props

  return (
    <li className="nav-item">
      <ActiveLink href={href} activeClassName="active">
        <a className="nav-link">{title}</a>
      </ActiveLink>
    </li>
  )
}

export default NavItem
