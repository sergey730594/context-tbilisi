import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // <-- Next.js 15 требует Promise
}) {
  // Мы должны "дождаться" (await) получения params
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050816', color: '#F7F9FC', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
