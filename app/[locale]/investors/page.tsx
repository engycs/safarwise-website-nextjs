import type { Metadata } from 'next';
import { getDictionary } from '@/utils/getDictionary';
import { BASE_URL } from '@/utils/metadata';

export const metadata: Metadata = {
  title: 'Investors — Safarwise',
  description: 'Thesis, traction, and how we scale Safarwise as the Travel OS for the Muslim journey.',
  alternates: { canonical: `${BASE_URL}/en/investors` }
}

export default function InvestorsPage({ params }:{ params:{ locale:'en'|'ar' } }){
  const dict = getDictionary(params.locale);
  return (
    <main className={params.locale === 'ar' ? 'rtl' : ''}>
      <section className="container" style={{padding:'3rem 0'}}>
        <h1>{dict.investors}</h1>
        <p className="lead">We’re building category-defining infrastructure for Muslim travel — software that turns fragmented processes into an operating system.</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <h3>Highlights</h3>
          <ul>
            <li>Clear wedge: Umrah-first, agency workflow automation</li>
            <li>Modular tools that compound into a defensible OS</li>
            <li>Distribution via agencies, hotels, and B2B partners</li>
          </ul>
        </div>
        <div style={{marginTop:'1.5rem', display:'flex', gap:'.75rem', flexWrap:'wrap'}}>
          <a className="btn btn-primary" href="mailto:amin@safarwise.com">Email</a>
          <a className="btn btn-ghost" href="https://wa.me/31617742209">WhatsApp</a>
        </div>
      </section>
    </main>
  )
}
