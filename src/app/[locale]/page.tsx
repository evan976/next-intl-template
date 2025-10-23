import { useTranslations } from 'next-intl'
import { ChangeLanguage } from '@/components/change-language'

export default function Home() {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">{t('welcome')}</h1>
      <p className="text-base text-muted-foreground">
        {t(
          'price',
          { price: 32000.99 },
          {
            number: {
              currency: {
                style: 'currency',
                currency: 'USD',
              },
            },
          },
        )}
      </p>
      <p className="text-base text-muted-foreground">
        {t('ordered', { orderDate: new Date() })}
      </p>
      <ChangeLanguage />
    </div>
  )
}
