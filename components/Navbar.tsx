'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  locale: 'en' | 'ar',
  dict: any
}

export default function Navbar({ locale, dict }: Props){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const other = locale === 'en' ? 'ar' : 'en';
  const switchHref = `/${other}${pathname?.replace(/^\/[^/]+/, '') || ''}`;

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <div className="brand">
          <Link href={`/${locale}`} prefetch={false}>
            <span>{dict.brand}</span>
          </Link>
        </div>
        <nav className="nav" aria-label="Main">
          <Link href={`/${locale}#ecosystem`}>{dict.navEcosystem}</Link>
          <Link href={`/${locale}#story`}>{dict.navStory}</Link>
          <Link href={`/${locale}/investors`}>{dict.navInvestors}</Link>
          <Link href={`/${locale}/partners`}>{dict.navPartners}</Link>
          <span className="lang-switch badge">
            <Link href={switchHref}>{other.toUpperCase()}</Link>
          </span>
          <Link className="cta" href="mailto:amin@safarwise.com">Email</Link>
          <Link className="cta" href="https://wa.me/31617742209">WhatsApp</Link>
        </nav>
        <button className="nav-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" onClick={()=>setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu">
          <Link href={`/${locale}#ecosystem`} onClick={()=>setOpen(false)}>{dict.navEcosystem}</Link>
          <Link href={`/${locale}#story`} onClick={()=>setOpen(false)}>{dict.navStory}</Link>
          <Link href={`/${locale}/investors`} onClick={()=>setOpen(false)}>{dict.navInvestors}</Link>
          <Link href={`/${locale}/partners`} onClick={()=>setOpen(false)}>{dict.navPartners}</Link>
          <span className="lang-switch badge">
            <Link href={switchHref} onClick={()=>setOpen(false)}>{other.toUpperCase()}</Link>
          </span>
          <Link className="cta" href="mailto:amin@safarwise.com">Email</Link>
          <Link className="cta" href="https://wa.me/31617742209">WhatsApp</Link>
        </nav>
      )}
    </header>
  );
}
