import {
  NavbarDark,
  NavbarBrand,
  ButtonLinkDownload,
  OffcanvasDark,
  OffcanvasNavbarToggler,
  NavbarNav,
} from '@/components'
import type { NavigationBarProps } from '@/components/types'

export const NavigationBar = (props: NavigationBarProps) => {
  const { title, resume, links } = props
  const offcanvasId = 'offcanvasNavbar'
  const offcanvasLabel = offcanvasId + 'Label'

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
      <OffcanvasNavbarToggler
        target={`#${offcanvasId}`}
        labelledby={offcanvasLabel}
      />
      <OffcanvasDark
        title="Menu"
        id={offcanvasId}
        labelId={offcanvasLabel}
        placement="end"
      >
        <NavbarNav items={links} />
      </OffcanvasDark>
    </NavbarDark>
  )
}

export default NavigationBar
