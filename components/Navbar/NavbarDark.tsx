import { Navbar } from '@/components'
import type { NavbarProps } from '@/components/types'

export const NavbarDark = (props: NavbarProps) => {
  const { children, className, ...navbarProps } = props
  const classNames = ['navbar-dark bg-dark', className ?? ''].join(' ').trim()

  return (
    <Navbar className={classNames} {...navbarProps}>
      {children}
    </Navbar>
  )
}

export default NavbarDark
