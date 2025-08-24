export const metadata = {{ title: 'Travelycs Desk — Safarwise' }}

export default function Page({ params }: {{ params: {{ locale: string }} }}) {{
  const isAr = params.locale === 'ar'
  return (
    <main className="section">
      <div className="container split">
        <div>
          <h1>Travelycs Desk</h1>
          <p className="lead">Backoffice CRM for Umrah & Muslim-centric agencies.</p>
          <ul>
            <li>Leads → quotes → bookings in one flow</li>
            <li>Multi-currency, visa-aware pricing rules</li>
            <li>Printable vouchers & manifests</li>
          </ul>
          <div style={{marginTop:'1rem',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
            <a className="btn btn-primary" href={`/${{params.locale}}/partners`}>Request access</a>
            <a className="btn btn-ghost" href={`/${{params.locale}}`}>← Back</a>
          </div>
        </div>
        <aside className="card">
          <img src="/logos/travelycs.svg" alt="Travelycs Desk" style={{height:48, width:'auto'}}/>
          <p style={{color:'#94a3b8', marginTop:'.5rem'}}>Operational clarity and speed for everyday agency work.</p>
        </aside>
      </div>
    </main>
  )
}}
