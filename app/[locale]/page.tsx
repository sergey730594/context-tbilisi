import { useTranslations } from 'next-intl';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // Тоже ждем params
  const { locale } = await params;
  const t = useTranslations('Index');
  
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{t('title')}</h1>
      <p style={{ fontSize: '1.2rem', color: '#00B8D9', marginBottom: '40px' }}>
        {t('description')} (Текущий язык: {locale})
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="/ka" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid #00B8D9' }}>ქართული</a>
        <a href="/en" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid #00B8D9' }}>English</a>
        <a href="/ru" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid #00B8D9' }}>Русский</a>
        <a href="/tr" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid #00B8D9' }}>Türkçe</a>
      </div>
    </main>
  );
}
