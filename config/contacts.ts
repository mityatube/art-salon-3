export interface SocialLink {
  name: string
  href: string
  icon: string
  tooltip: string
  isSvg?: boolean
}

export interface ScheduleItem {
  days: string
  hours: string
}

export const contactInfo = {
  address: 'Киров, ул. Никитская, 99А',
  phone: '+7 (8332) 65-13-40',
  phoneHref: 'tel:+78332651340',
  email: 'mail@art-vyatka.ru',
  emailHref: 'mailto:mail@art-vyatka.ru',
  schedule: [
    { days: 'Пн – Пт', hours: '10:00 – 18:00' },
    { days: 'Сб – Вс', hours: '11:00 – 16:00' }
  ] as ScheduleItem[],
  socials: [
    { name: 'vk', href: 'https://vk.com/hudsalonkirov', icon: 'mdi-vk', tooltip: 'ВКонтакте' },
    { name: 'telegram', href: 'https://t.me/artshopkirov', icon: 'mdi-telegram', tooltip: 'Телеграм' },
    { name: 'yandex-maps', href: 'https://yandex.com/maps/org/khudozhestvenny_salon/1104185169/', icon: 'yandex-maps-svgrepo-com.svg', tooltip: 'Яндекс Карты', isSvg: true },
    { name: '2gis', href: 'https://2gis.ru/kirov/firm/8163302605593105', icon: '2gis-svgrepo-com.svg', tooltip: '2ГИС', isSvg: true }
  ] as SocialLink[],
  mapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A829e9cc93cc3215f1f8630e8e2d1050650fe98177820ebfa629e6588aaef3803&source=constructor'
}
