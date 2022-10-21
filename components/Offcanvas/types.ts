import { HTMLAttributes } from 'react'

export type OffcanvasProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  placement: 'start' | 'end' | 'top' | 'bottom'
  title?: string
  labelId?: string
  bodyClassName?: string
}

export type OffcanvasHeaderProps = {
  labelId?: string
  title?: string
  className?: string
}

export type OffcanvasTogglerProps = {
  target: string
  labelledby?: string
}
