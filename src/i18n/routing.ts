import languineConfig from 'languine.json'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: [...languineConfig.locale.targets, languineConfig.locale.source],
  defaultLocale: languineConfig.locale.source,
  localePrefix: 'as-needed',
})
