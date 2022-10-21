import type { FooterProps } from '@/components/types'

export const FooterDark = (props: FooterProps) => {
  const { text, className } = props
  const classNames = ['container-fluid', 'text-bg-dark', className ?? '']
    .join(' ')
    .trim()

  return (
    <div className={classNames}>
      <div className="d-flex justify-content-center py-2">
        <span className="text-muted">{text}</span>
      </div>
    </div>
  )
}

export default FooterDark
