export const OPEN_SELECTOR = '.offcanvas.show'
export const EVENT_HIDE = 'action.offcanvas.hide'

export const makeOffcanvasByDataSelector = () => {
  return require('bootstrap/js/dist/offcanvas')
}

export const dispatchEventHide = () => {
  document.dispatchEvent(new Event(EVENT_HIDE))
}

export const getPlacement = (placement: string): string => {
  return placement ? `offcanvas-${placement}` : ''
}

export const getClassNames = (className: string, placement: string): string => {
  return ['offcanvas', getPlacement(placement), className].join(' ').trim()
}

export const getBodyClassNames = (bodyClassName?: string): string => {
  return ['offcanvas-body', bodyClassName ?? 'justify-content-center']
    .join(' ')
    .trim()
}

export const getHeaderClassName = (className?: string): string => {
  return ['offcanvas-header', className ?? ''].join(' ').trim()
}

export const initOffcanvas = () => {
  const Offcanvas = makeOffcanvasByDataSelector()
  const hideOffcanvas = () => {
    const alreadyOpen = document.querySelector(OPEN_SELECTOR) as Element
    Offcanvas.getInstance(alreadyOpen)?.hide()
  }

  document.addEventListener(EVENT_HIDE, hideOffcanvas)
  return () => {
    document.removeEventListener(EVENT_HIDE, hideOffcanvas)
  }
}
