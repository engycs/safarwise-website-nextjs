export const metadata = {{ title: 'Labeeb AI — Safarwise' }}

export default function Page({ params }: {{ params: {{ locale: string }} }}) {{
  const isAr = params.locale === 'ar'
  return (
    <main className="section">
      <div className="container split">
        <div>
          <h1>Labeeb AI</h1>
          <p className="lead">AI Umrah Planner. From discovery to booked itinerary, in minutes.</p>
          <ul>
            <li>Conversational planning via WhatsApp or web</li>
            <li>Best-fit flights + hotels with transparent pricing</li>
            <li>Handover to human agent when needed</li>
          </ul>
          <div style={{marginTop:'1rem',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
            <a className="btn btn-primary" href={`/${{params.locale}}/partners`}>Become a partner</a>
            <a className="btn btn-ghost" href={`/${{params.locale}}`}>← Back</a>
          </div>
        </div>
        <aside className="card">
          <img src="/logos/labeeb.svg" alt="Labeeb AI" style={{height:48, width:'auto'}}/>
          <p style={{color:'#94a3b8', marginTop:'.5rem'}}>Personalized Umrah planning that respects preferences and budget.</p>
        </aside>
      </div>
    </main>
  )
}}
