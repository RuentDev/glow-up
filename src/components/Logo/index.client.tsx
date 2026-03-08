import { Media } from '@/components/Media'
import { Logo } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'

type Props = {
  logo: Logo
}
const LogoClient = ({ logo }: Props) => {
  const { logoType, logoText, logoImage, link } = logo

  if (logoType === 'image' && typeof logoImage === 'object' && logoImage !== null) {
    return (
      <Link className={cn('block max-h-[40px]')} href={link || '/'}>
        <Media resource={logoImage} imgClassName="h-full w-auto object-contain" />
      </Link>
    )
  }

  return (
    <Link className={cn('text-2xl font-bold')} href={link || '/'}>
      {logoText && <div dangerouslySetInnerHTML={{ __html: logoText! }} />}
    </Link>
  )
}

export default LogoClient
