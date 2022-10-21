import Link from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, useEffect, useState } from 'react'
import type { ActiveLinkProps } from '@/components/types'

export const ActiveLink = (props: ActiveLinkProps) => {
  const { children, activeClassName, href, ...linkProps } = props
  const childrenClass = children.props.className || ''
  const { asPath } = useRouter()
  const [className, setClassName] = useState(childrenClass)

  useEffect(() => {
    const activeLinkClass =
      asPath === href ? `${childrenClass} ${activeClassName}` : childrenClass
    setClassName(activeLinkClass)
  }, [asPath, href, activeClassName, childrenClass])

  return (
    <Link href={href} {...linkProps}>
      {cloneElement(children, { className })}
    </Link>
  )
}
