import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDictionary } from '@/utils/getDictionary';

export const dynamic = 'force-static';

export async function generateMetadata({ params }: { params: { locale: 'en'|'ar' } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  const title = `${dict.brand} — ${dict.tagline}`;
  return {
    title,
    description: dict.heroLead,
    openGraph: { title, description: dict.heroLead, type: 'website' }
  };
}

export default function LocaleLayout({children, params}:{children: React.ReactNode, params: {locale:'en'|'ar'}}){
  const dict = getDictionary(params.locale);
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={params.locale === 'ar' ? 'rtl' : ''}>
        <Navbar locale={params.locale} dict={dict} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
