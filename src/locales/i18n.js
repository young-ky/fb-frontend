import { createI18n } from 'vue-i18n'

import landingPageId from './landing/landing_page_id.json'
import landingPageEn from './landing/landing_page_en.json'

const messages = {
  id: {
    landing: landingPageId
  },
  en: {
    landing: landingPageEn
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'id',
  messages
})

export default i18n