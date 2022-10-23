import Image from 'next/image'
import Link from 'next/link'
import type { ImageLinkProps } from '@/components/types'

export const ImageLink = (props: ImageLinkProps) => {
  const { image, link, a } = props
  const { src, alt, ...imageProps } = image
  const { href, ...linkProps } = link
  return (
    <Link href={href} {...linkProps}>
      <a {...a}>
        <Image src={src} alt={alt} {...imageProps} objectFit="scale-down" />
      </a>
    </Link>
  )
}

export default ImageLink
