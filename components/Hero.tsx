type Props = {
  dict: any
}
export default function Hero({dict}: Props){
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-media">
        <video className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <h1>{dict.tagline}</h1>
        <p className="lead">{dict.heroLead}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#ecosystem">{dict.ctaExplore}</a>
          <a className="btn btn-ghost" href="#story">{dict.ctaStory}</a>
        </div>
      </div>
    </section>
  );
}
