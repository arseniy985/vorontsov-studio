import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { LogoIcon } from '@/components/brand/logo-icon';

type LogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  href?: string;
  priority?: 'header' | 'footer';
};

export function Logo({
  className,
  iconClassName,
  textClassName,
  href = '/',
  priority = 'header',
}: LogoProps) {
  const isFooter = priority === 'footer';

  return (
    <Link href={href} aria-label={siteConfig.brandName} className={className}>
      <LogoIcon className={iconClassName} />
      <span className={textClassName}>
        <span className="block text-current">{siteConfig.brandWordmark.primary}</span>
        <span className={isFooter ? 'mt-1 block text-accent' : 'block text-accent'}>{siteConfig.brandWordmark.secondary}</span>
      </span>
    </Link>
  );
}
