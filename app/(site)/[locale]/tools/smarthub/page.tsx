export const metadata = {{ title: 'Smart Hub — Safarwise' }}

export default function Page({ params }: {{ params: {{ locale: string }} }}) {{
  const isAr = params.locale === 'ar'
  return (
    <main className="section">
      <div className="container split">
        <div>
          <h1>Smart Hub</h1>
          <p className="lead">Unified supplier APIs for airlines, DMCs & services.</p>
          <ul>
            <li>One integration, consistent data model</li>
            <li>Caching & availability sanity checks</li>
            <li>Auditable logs and analytics</li>
          </ul>
          <div style={{marginTop:'1rem',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
            <a className="btn btn-primary" href={`/${{params.locale}}/partners`}>Integrate now</a>
            <a className="btn btn-ghost" href={`/${{params.locale}}`}>← Back</a>
          </div>
        </div>
        <aside className="card">
          <img src="/logos/smarthub.svg" alt="Smart Hub" style={{height:48, width:'auto'}}/>
          <p style={{color:'#94a3b8', marginTop:'.5rem'}}>Ship partnerships faster with a single source of truth.</p>
        </aside>
      </div>
    </main>
  )
}}
