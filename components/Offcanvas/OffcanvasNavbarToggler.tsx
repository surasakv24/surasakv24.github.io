import { ButtonToggler } from '@/components'
import type { OffcanvasTogglerProps } from '@/components/types'

export const OffcanvasNavbarToggler = (props: OffcanvasTogglerProps) => {
  const { target, ...togglerProps } = props

  return (
    <ButtonToggler
      className="navbar-toggler"
      toggle="offcanvas"
      target={target}
      {...togglerProps}
    >
      <span className="navbar-toggler-icon"></span>
    </ButtonToggler>
  )
}

export default OffcanvasNavbarToggler
