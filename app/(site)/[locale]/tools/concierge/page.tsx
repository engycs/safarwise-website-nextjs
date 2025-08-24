export const metadata = {{ title: 'AI Hotel Concierge — Safarwise' }}

export default function Page({ params }: {{ params: {{ locale: string }} }}) {{
  const isAr = params.locale === 'ar'
  return (
    <main className="section">
      <div className="container split">
        <div>
          <h1>AI Hotel Concierge</h1>
          <p className="lead">24/7 guest messaging for hotels in Makkah & Madinah.</p>
          <ul>
            <li>FAQ automation and service requests</li>
            <li>Arabic/English support out of the box</li>
            <li>Escalation to staff with context</li>
          </ul>
          <div style={{marginTop:'1rem',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
            <a className="btn btn-primary" href={`/${{params.locale}}/partners`}>Pilot with us</a>
            <a className="btn btn-ghost" href={`/${{params.locale}}`}>← Back</a>
          </div>
        </div>
        <aside className="card">
          <img src="/logos/concierge.svg" alt="AI Hotel Concierge" style={{height:48, width:'auto'}}/>
          <p style={{color:'#94a3b8', marginTop:'.5rem'}}>Delight guests while easing the load on front-desk teams.</p>
        </aside>
      </div>
    </main>
  )
}}
