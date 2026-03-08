import type { Theme } from './types'

export const themeLocalStorageKey = 'payload-theme'

export const defaultTheme: Theme = 'light' // 'light' | 'dark' — fallback when no OS preference or saved preference

export const getImplicitPreference = (): Theme | null => {
  const mediaQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(mediaQuery)
  const hasImplicitPreference = typeof mql.matches === 'boolean'

  if (hasImplicitPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return null
}
