import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '鈴木牧場 | オーガニック牛乳とチーズ',
  description: '北海道の大自然で育てた牛から作るオーガニック牛乳とチーズ。安心・安全な乳製品をお届けします。',
  keywords: ['鈴木牧場', 'オーガニック', '牛乳', 'チーズ', '北海道', '牧場'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={notoSansJP.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
