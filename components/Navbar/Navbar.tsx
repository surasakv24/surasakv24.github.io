import type { NavbarProps } from '@/components/types'

export const Navbar = (props: NavbarProps) => {
  const { children, className, containerClassName } = props
  const classNames = ['navbar', className ?? ''].join(' ').trim()
  const containerClassNames =
    containerClassName ?? 'container-fluid justify-content-between'

  return (
    <nav className={classNames}>
      <div className={containerClassNames}>{children}</div>
    </nav>
  )
}

export default Navbar
