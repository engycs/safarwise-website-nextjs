import Link from 'next/link';
type Props = { locale: 'en' | 'ar', dict: any }
export default function Ecosystem({locale, dict}: Props){
  const tools = [
    { slug: 'labeeb', data: dict.tool.labeeb },
    { slug: 'travelycs', data: dict.tool.travelycs },
    { slug: 'concierge', data: dict.tool.concierge },
    { slug: 'smarthub', data: dict.tool.smarthub },
  ];
  return (
    <section id="ecosystem" className="ecosystem" aria-labelledby="ecosystem-title">
      <div className="container">
        <h2 id="ecosystem-title">{dict.ecoTitle}</h2>
        <p className="section-intro">{dict.ecoIntro}</p>
        <div className="grid-tools">
          {tools.map(t => (
            <article className="tool-card" key={t.slug}>
              <h3>{t.data.title}</h3>
              <p>{t.data.desc}</p>
              <Link href={`/${locale}/tools/${t.slug}`} className="tool-link" aria-label={t.data.title}>{dict.moreInfo}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
