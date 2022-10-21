import { Button } from '@/components'
import type { ButtonTogglerProps } from '@/components/types'

export const ButtonToggler = (props: ButtonTogglerProps) => {
  const { className, children, toggle, target, ...buttonProps } = props
  return (
    <Button
      className={className}
      data-bs-toggle={toggle}
      data-bs-target={target}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

export default ButtonToggler
