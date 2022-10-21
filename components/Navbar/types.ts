import { HTMLAttributes } from 'react'

export type NavbarProps = HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string
}

export type NavbarBrandProps = HTMLAttributes<HTMLElement> & {
  href: string
  title: string
}

export type NavItemProps = {
  href: string
  title: string
}

export type LinkItems = NavItemProps[]

export type NavbarNavProps = {
  items: LinkItems
}
