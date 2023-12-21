import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Providers from '@/util/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rentequip - Ferramenta de Gestão de Locação de Equipamentos',
  description: 'Maximize seu Potencial Financeiro: Renda Master - Sua Via para Lucrar Revendendo Produtos Digitais!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Renda Master" />
          <meta property="og:title" content="Renda Master" />
          <meta property="og:description" content="Maximize seu Potencial Financeiro: Renda Master - Sua Via para Lucrar Revendendo Produtos Digitais!" />
          <meta property="og:url" content="https://rendamaster.app" />
          <meta property="og:image" content="https://" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Renda Master " />
          <meta property="twitter:description" content="Maximize seu Potencial Financeiro: Renda Master - Sua Via para Lucrar Revendendo Produtos Digitais!" />
          <meta property="twitter:image" content="https://" />
        </head>
        <body>
        <Providers>
              {children}
          </Providers>
         
        </body>
      </html>
    </>
  )
}
