import { EVENTS } from "./const";

export function navigate(href) {
  window.history.pushState({}, '', href) // cambia la URl de la barra de direcciones
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // crear un evento
  window.dispatchEvent(navigationEvent) //despachar el evento
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {


    const isMainEvent = event.button === 0 // primary click

    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey

    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) //navegación con SPA
    }


  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}