import type { FieldAccess } from 'payload'

import { checkRole } from '@/access/utilities'

export const adminOrEditorFieldAccess: FieldAccess = ({ req: { user } }) => {
  if (user) return checkRole(['admin', 'editor'], user)

  return false
}
