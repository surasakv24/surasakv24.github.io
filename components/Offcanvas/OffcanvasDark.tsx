import { useEffect } from 'react'
import { OffcanvasHeaderDark } from '@/components'
import type { OffcanvasProps } from '@/components/types'
import { useRouter } from 'next/router'
import {
  initOffcanvas,
  getClassNames,
  getBodyClassNames,
  dispatchEventHide,
} from '@/libs/offcanvas'

export const OffcanvasDark = (props: OffcanvasProps) => {
  const { id, children, title, labelId, placement, className, bodyClassName } =
    props
  const classNames = [getClassNames(className ?? '', placement), 'text-bg-dark']
    .join(' ')
    .trim()
  const bodyClassNames = getBodyClassNames(bodyClassName)
  const { asPath } = useRouter()

  useEffect(initOffcanvas, [id])
  useEffect(dispatchEventHide, [asPath])

  return (
    <div className={classNames} id={id}>
      <OffcanvasHeaderDark
        labelId={labelId}
        title={title}
        className="bg-dark-gunmetal"
      />
      <div className={bodyClassNames}>{children}</div>
    </div>
  )
}

export default OffcanvasDark
