import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Bell } from 'lucide-react'
import { mockNews } from '@/data/mock-news'

/**
 * お知らせ一覧ページ（Premium機能）
 * ニュース・お知らせの一覧を表示
 */

const categoryLabels = {
  news: 'ニュース',
  event: 'イベント',
  notice: 'お知らせ',
}

const categoryColors = {
  news: 'bg-blue-600',
  event: 'bg-green-600',
  notice: 'bg-yellow-600',
}

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <section className="relative h-[400px] bg-ranch-primary">
        <Image
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80"
          alt="お知らせ"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">お知らせ</h1>
            <p className="text-xl">最新情報をお届けします</p>
          </div>
        </div>
      </section>

      {/* お知らせ一覧 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {mockNews.map((newsItem) => (
                <article
                  key={newsItem.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* 日付とカテゴリー */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={18} />
                        <time
                          dateTime={newsItem.publishedAt}
                          className="text-sm font-mono"
                        >
                          {new Date(newsItem.publishedAt).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          })}
                        </time>
                      </div>
                      <span
                        className={`${categoryColors[newsItem.category]} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {categoryLabels[newsItem.category]}
                      </span>
                    </div>

                    {/* タイトル */}
                    <div className="flex-1">
                      <Link
                        href={`/news/${newsItem.id}`}
                        className="text-lg font-bold text-gray-800 hover:text-ranch-primary transition-colors"
                      >
                        {newsItem.title}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* ページネーション（将来実装） */}
            <div className="mt-12 text-center">
              <p className="text-gray-500">全 {mockNews.length} 件のお知らせ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Bell className="w-16 h-16 text-ranch-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-ranch-primary mb-4">
              最新情報をお届け
            </h2>
            <p className="text-gray-700 mb-6">
              新商品やイベント情報など、最新のお知らせを随時更新しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
