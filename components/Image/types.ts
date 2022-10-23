import { ImageProps } from 'next/image'
import { LinkProps } from 'next/link'
import { HTMLAttributes } from 'react'

export type ImageLinkProps = {
  image: ImageProps
  link: LinkProps
  a?: HTMLAttributes<HTMLAnchorElement>
}
