import { LinkProps } from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

export type ButtonProps = HTMLAttributes<HTMLButtonElement>

export type ButtonLinkProps = LinkProps & {
  href: string
  className?: string
  children: ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top'
  download?: string
}

export type ButtonLinkDownloadProps = Omit<ButtonLinkProps, 'children'> & {
  download: string
  title: string
}
