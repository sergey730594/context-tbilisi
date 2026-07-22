import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./app/i18n.ts');
export default withNextIntl({});
