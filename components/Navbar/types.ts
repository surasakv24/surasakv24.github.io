import { HTMLAttributes } from 'react'

export type NavbarProps = HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string
}

export type NavbarBrandProps = HTMLAttributes<HTMLElement> & {
  href: string
  title: string
}
