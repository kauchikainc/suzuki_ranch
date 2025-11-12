import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import { mockBlogPosts } from '@/data/mock-blog'

/**
 * ブログ一覧ページ（Premium機能）
 * ブログ記事の一覧を表示
 */
export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <section className="relative h-[400px] bg-ranch-primary">
        <Image
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&q=80"
          alt="ブログ"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">ブログ</h1>
            <p className="text-xl">牧場の日々や商品情報をお届けします</p>
          </div>
        </div>
      </section>

      {/* ブログ一覧 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockBlogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* サムネイル画像 */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.thumbnail || '/images/default-blog.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-ranch-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>

                  {/* 記事情報 */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-ranch-primary bg-ranch-cream px-3 py-1 rounded-full"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block text-ranch-primary hover:text-ranch-light font-semibold transition-colors"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* ページネーション（将来実装） */}
            <div className="mt-12 text-center">
              <p className="text-gray-500">全 {mockBlogPosts.length} 件の記事</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
