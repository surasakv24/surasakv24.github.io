import type { ButtonProps } from '@/components/types'

export const Button = (props: ButtonProps) => {
  const { className, children, ...buttonProps } = props

  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
