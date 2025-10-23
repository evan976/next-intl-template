'use client'

import { useParams } from 'next/navigation'
import { type Locale, useLocale } from 'next-intl'
import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usePathname, useRouter } from '@/i18n/navigation'

const locales = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: '日本語', value: 'ja' },
  { label: '简体中文', value: 'zh' },
]

export function ChangeLanguage() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }
  return (
    <Select disabled={isPending} value={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
