import { NextIntlClientProvider } from 'next-intl';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Загружаем переводы для текущего языка
  const messages = (await import(`../../messages/${params.locale}.json`)).default;

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
