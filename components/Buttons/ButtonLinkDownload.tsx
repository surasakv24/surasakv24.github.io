import { ButtonLink } from '@/components'
import type { ButtonLinkDownloadProps } from '@/components/types'

export const ButtonLinkDownload = (props: ButtonLinkDownloadProps) => {
  const { href, title, target, download, ...linkDownloadProps } = props
  return (
    <ButtonLink
      href={href}
      target={target}
      download={download}
      {...linkDownloadProps}
    >
      {title}
    </ButtonLink>
  )
}

export default ButtonLinkDownload
