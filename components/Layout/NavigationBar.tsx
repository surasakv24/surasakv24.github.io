import { NavbarDark, NavbarBrand, ButtonLinkDownload } from '@/components'
import type { NavigationBarProps } from '@/components/types'

export const NavigationBar = (props: NavigationBarProps) => {
  const { title, resume } = props
  return (
    <NavbarDark className="navbar-expand-lg">
      <NavbarBrand href="/" title={title} />
      <ButtonLinkDownload
        href={resume}
        target="_blank"
        download="resume"
        title="download cv"
        className="btn-outline-light order-lg-2"
      />
    </NavbarDark>
  )
}

export default NavigationBar
