import type { User } from '@/payload-types'
import type { FieldHook } from 'payload'

export const protectRoles: FieldHook<{ id: string } & User> = ({ req, data }) => {
  const isAdmin: boolean | undefined = req.user?.roles?.includes('admin')

  if (!isAdmin) {
    return ['customer']
  }

  const userRoles = new Set(data?.roles || [])
  userRoles.add('customer')
  return [...userRoles.values()]
}
