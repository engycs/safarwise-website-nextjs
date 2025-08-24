import type { Metadata } from 'next';
import { BASE_URL } from '@/utils/metadata';

export const metadata: Metadata = {
  title: 'Partners — Safarwise',
  description: 'We partner with agencies, hotels, and suppliers to unlock speed and trust in Muslim travel.',
  alternates: { canonical: `${BASE_URL}/en/partners` }
}

export default function PartnersPage({ params }:{ params:{ locale:'en'|'ar' } }){
  return (
    <main className={params.locale === 'ar' ? 'rtl' : ''}>
      <section className="container" style={{padding:'3rem 0'}}>
        <h1>Partners</h1>
        <p className="lead">We work with Umrah agencies, DMCs, airlines and hotels to deliver reliable operations and delightful traveler experiences.</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <h3>How we partner</h3>
          <ul>
            <li>Implementation of Travelycs Desk & Smart Hub</li>
            <li>AI concierge deployment for hotels in Makkah & Madinah</li>
            <li>Joint go‑to‑market and co‑branded pilots</li>
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
