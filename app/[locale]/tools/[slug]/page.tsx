import type { Metadata } from 'next';
import { getDictionary } from '@/utils/getDictionary';
import { BASE_URL } from '@/utils/metadata';

type Props = {
  params: { locale: 'en' | 'ar', slug: 'labeeb'|'travelycs'|'concierge'|'smarthub' }
};

export function generateMetadata({ params }: Props): Metadata {
  const dict = getDictionary(params.locale);
  const map: any = dict.tool;
  const t = map[params.slug];
  const title = `${t.title} — ${dict.brand}`;
  return {
    title,
    description: t.desc,
    alternates: {
      canonical: `${BASE_URL}/${params.locale}/tools/${params.slug}`
    },
    openGraph: {
      title, description: t.desc, url: `${BASE_URL}/${params.locale}/tools/${params.slug}`, type: 'article'
    }
  };
}

export default function ToolPage({ params }: Props){
  const dict = getDictionary(params.locale);
  const tool = dict.tool[params.slug];
  return (
    <main className={params.locale === 'ar' ? 'rtl' : ''}>
      <section className="container" style={{padding:'3rem 0'}}>
        <h1>{tool.title}</h1>
        <p className="lead">{tool.desc}</p>
        <div className="card" style={{marginTop:'1rem'}}>
          <h3>Highlights</h3>
          <ul>
            <li>Built for real-world agency workflows</li>
            <li>Privacy-first, data ownership respected</li>
            <li>Integrates with Smart Hub for live inventory</li>
          </ul>
        </div>
        <div style={{marginTop:'1.5rem', display:'flex', gap:'.75rem', flexWrap:'wrap'}}>
          <a className="btn btn-primary" href="mailto:amin@safarwise.com">Email</a>
          <a className="btn btn-ghost" href="https://wa.me/31617742209">WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
