import Link from 'next/link'
import type { ButtonLinkProps } from '@/components/types'

export const ButtonLink = (props: ButtonLinkProps) => {
  const { href, className, children, ...linkProps } = props
  const classNames = ['btn', className ?? ''].join(' ').trim()

  return (
    <Link href={href}>
      <a className={classNames} role="button" {...linkProps}>
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
