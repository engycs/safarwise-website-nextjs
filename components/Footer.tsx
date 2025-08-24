import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Safarwise — built with care for the journey.</p>
        <nav aria-label="Footer">
          <Link href="#top">Back to top ↑</Link>
        </nav>
      </div>
    </footer>
  );
}