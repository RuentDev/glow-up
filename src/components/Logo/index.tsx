import { getCachedGlobal } from '@/utilities/getGlobals'
import LogoClient from './index.client'

export async function Logo() {
  const logo = await getCachedGlobal('logo', 1)()

  return <LogoClient logo={logo} />
}
