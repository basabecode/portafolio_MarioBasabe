declare module 'react-scroll' {
  export interface LinkProps {
    to: string
    spy?: boolean
    smooth?: boolean
    offset?: number
    duration?: number
    delay?: number
    isDynamic?: boolean
    onSetActive?: (to: string) => void
    onSetInactive?: (to: string) => void
    ignoreCancelEvents?: boolean
    hashSpy?: boolean
    saveHashHistory?: boolean
    spyThrottle?: number
    containerId?: string
    activeClass?: string
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }

  export interface ElementProps {
    name: string
    id?: string
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }

  export interface ButtonProps {
    type: string
    element?: string
    offset?: number
    duration?: number
    delay?: number
    onSetActive?: (to: string) => void
    onSetInactive?: (to: string) => void
    ignoreCancelEvents?: boolean
    hashSpy?: boolean
    saveHashHistory?: boolean
    spyThrottle?: number
    containerId?: string
    activeClass?: string
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }

  export const Link: React.ComponentType<LinkProps>
  export const Button: React.ComponentType<ButtonProps>
  export const Element: React.ComponentType<ElementProps>
  export const Events: {
    scrollEvent: {
      register: (eventName: string, callback: () => void) => void
      remove: (eventName: string) => void
    }
  }
  export const scrollSpy: {
    update: () => void
  }
  export const animateScroll: {
    scrollToTop: (options?: {
      duration?: number
      delay?: number
      smooth?: string
    }) => void
    scrollToBottom: (options?: {
      duration?: number
      delay?: number
      smooth?: string
    }) => void
    scrollTo: (
      to: number,
      options?: { duration?: number; delay?: number; smooth?: string }
    ) => void
  }
  export const scroller: {
    scrollTo: (
      to: string,
      options?: {
        duration?: number
        delay?: number
        smooth?: string
        offset?: number
        containerId?: string
      }
    ) => void
  }
}
