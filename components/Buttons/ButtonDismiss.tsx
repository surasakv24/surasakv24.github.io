import { Button } from '@/components'
import { ButtonDismissProps } from './types'

export const ButtonDismiss = (props: ButtonDismissProps) => {
  const { dismiss, className } = props
  const classNames = ['btn-close', className ?? ''].join(' ').trim()

  return (
    <Button
      className={classNames}
      data-bs-dismiss={dismiss}
      aria-label="Close"
    />
  )
}

export default ButtonDismiss
