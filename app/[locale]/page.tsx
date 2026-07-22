import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#050816', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{t('title')}</h1>
      <p style={{ fontSize: '1.2rem', color: '#00B8D9' }}>{t('description')}</p>
      <div style={{ marginTop: '40px' }}>
        <a href="/ka" style={{ margin: '0 10px', color: 'white' }}>ქართული</a>
        <a href="/en" style={{ margin: '0 10px', color: 'white' }}>English</a>
        <a href="/ru" style={{ margin: '0 10px', color: 'white' }}>Русский</a>
        <a href="/tr" style={{ margin: '0 10px', color: 'white' }}>Türkçe</a>
      </div>
    </main>
  );
}
