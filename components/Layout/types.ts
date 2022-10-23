import { HTMLAttributes } from 'react'

export type LayoutProps = HTMLAttributes<HTMLDivElement>

type Link = {
  href: string
  title: string
}

export type NavigationBarProps = {
  title: string
  resume: string
  links: Link[]
}

export type FooterProps = HTMLAttributes<HTMLDivElement> & {
  text: string
}
