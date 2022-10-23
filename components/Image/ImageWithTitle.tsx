import Image from 'next/image'
import type { ImageWithTitleProps } from '@/components/types'

export const ImageWithTitle = (props: ImageWithTitleProps) => {
  const { image, title, containerClassName } = props
  const { src, alt, ...imageProps } = image
  const classNames = ['d-flex', containerClassName ?? ''].join(' ').trim()

  return (
    <div className={classNames}>
      <Image src={src} alt={alt} {...imageProps} objectFit="scale-down" />
      <span>{title}</span>
    </div>
  )
}

export default ImageWithTitle
