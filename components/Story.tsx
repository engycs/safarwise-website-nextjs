type Props = { dict: any }
export default function Story({dict}: Props){
  return (
    <section id="story" className="story">
      <div className="container split">
        <div>
          <h2>{dict.storyTitle}</h2>
          <p>{dict.storyP1}</p>
          <p>{dict.storyP2}</p>
        </div>
        <aside className="quote card">
          <blockquote>“{dict.quote}”</blockquote>
          <cite>— Safarwise</cite>
        </aside>
      </div>
    </section>
  )
}
