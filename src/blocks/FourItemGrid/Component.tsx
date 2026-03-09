import type { FourItemGridBlock as FourItemGridBlockProps } from '@/payload-types';
import type { DefaultDocumentIDType } from 'payload';
import { FourItemGrid } from './Component.client';

export const FourItemGridBlock = async (
  props: FourItemGridBlockProps & { id: DefaultDocumentIDType; className: string },
) => {
  return <FourItemGrid {...props} />
}
