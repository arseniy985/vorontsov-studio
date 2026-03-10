export const siteConfig = {
  brandName: 'Vorontsov Labs',
  brandMark: 'VORONTSOV LABS',
  brandWordmark: {
    primary: 'VORONTSOV',
    secondary: 'LABS',
  },
  description: 'Сайты, интерфейсы и AI-автоматизация, которые помогают бизнесу получать больше заявок, быстрее запускаться и убирать ручную рутину.',
  contacts: {
    email: 'hello@vorontsovlabs.ru',
    emailHref: 'mailto:hello@vorontsovlabs.ru',
    phoneDisplay: '+7 999 666 6900',
    phoneHref: 'tel:+79996666900',
  },
  navigation: [
    { href: '/services', label: 'УСЛУГИ' },
    { href: '/cases', label: 'КЕЙСЫ' },
    { href: '/about', label: 'О НАС' },
    { href: '/contacts', label: 'КОНТАКТЫ' },
  ],
} as const;
