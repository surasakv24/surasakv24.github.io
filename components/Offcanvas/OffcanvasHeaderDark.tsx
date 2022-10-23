import type { OffcanvasHeaderProps } from '@/components/types'
import { ButtonDismiss } from '@/components'
import { getHeaderClassName } from '@/libs/offcanvas'

export const OffcanvasHeaderDark = (props: OffcanvasHeaderProps) => {
  const { labelId, title, className } = props
  const classNames = getHeaderClassName(className)

  return (
    <div className={classNames}>
      <h5 className="offcanvas-title" id={labelId}>
        <strong>{title}</strong>
      </h5>
      <ButtonDismiss dismiss="offcanvas" className="btn-close-white" />
    </div>
  )
}

export default OffcanvasHeaderDark
