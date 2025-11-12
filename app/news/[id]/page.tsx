import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { mockNews } from '@/data/mock-news'
import { notFound } from 'next/navigation'

/**
 * お知らせ詳細ページ（Premium機能）
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const newsItem = mockNews.find((n) => n.id === id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* 戻るリンク */}
      <div className="bg-ranch-cream py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-ranch-primary hover:text-ranch-light transition-colors"
          >
            <ArrowLeft size={20} />
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>

      {/* お知らせ本文 */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* カテゴリー */}
            <div className="mb-4">
              <span
                className={`inline-block ${categoryColors[newsItem.category]} text-white px-4 py-2 rounded-full text-sm font-semibold`}
              >
                {categoryLabels[newsItem.category]}
              </span>
            </div>

            {/* タイトル */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {newsItem.title}
            </h1>

            {/* 公開日 */}
            <div className="flex items-center gap-2 text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <Calendar size={18} />
              <time dateTime={newsItem.publishedAt}>
                {new Date(newsItem.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* 本文 */}
            <div className="prose prose-lg max-w-none">
              {newsItem.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* 最新のお知らせ */}
      <section className="py-12 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-ranch-primary mb-6">
              最新のお知らせ
            </h2>
            <div className="space-y-4">
              {mockNews
                .filter((n) => n.id !== newsItem.id)
                .slice(0, 3)
                .map((relatedNews) => (
                  <Link
                    key={relatedNews.id}
                    href={`/news/${relatedNews.id}`}
                    className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <time
                        dateTime={relatedNews.publishedAt}
                        className="text-sm text-gray-500 font-mono"
                      >
                        {new Date(relatedNews.publishedAt).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })}
                      </time>
                      <span
                        className={`${categoryColors[relatedNews.category]} text-white px-2 py-1 rounded text-xs font-semibold`}
                      >
                        {categoryLabels[relatedNews.category]}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 hover:text-ranch-primary transition-colors">
                      {relatedNews.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
