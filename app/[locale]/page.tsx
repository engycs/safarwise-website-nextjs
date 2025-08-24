import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Story from '@/components/Story';
import { getDictionary } from '@/utils/getDictionary';

export default function Home({ params }:{ params:{ locale:'en'|'ar' } }){
  const dict = getDictionary(params.locale);
  return (
    <main className={params.locale === 'ar' ? 'rtl' : ''}>
      <Hero dict={dict} />
      <section className="vision">
        <div className="container split">
          <div>
            <h2>{dict.whyTitle}</h2>
            <p>{dict.whyP1}</p>
            <p>{dict.whyP2}</p>
          </div>
          <div className="card">
            <h3>{dict.missionTitle}</h3>
            <p>{dict.missionP}</p>
            <ul className="ticks">
              <li>{dict.missionBul1}</li>
              <li>{dict.missionBul2}</li>
              <li>{dict.missionBul3}</li>
            </ul>
          </div>
        </div>
      </section>
      <Ecosystem locale={params.locale} dict={dict} />
      <Story dict={dict} />
      <section id="contact" className="contact">
        <div className="container">
          <h2>{dict.navContact}</h2>
          <p className="section-intro">{dict.contactCTA}</p>
          <div style={{display:'flex', gap:'.75rem', flexWrap:'wrap'}}>
            <a className="btn btn-primary" href="mailto:amin@safarwise.com">{dict.contactEmail}</a>
            <a className="btn btn-ghost" href="https://wa.me/31617742209">{dict.contactWhatsApp}</a>
          </div>
        </div>
      </section>
    </main>
  )
}
