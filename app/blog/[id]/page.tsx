import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { mockBlogPosts } from '@/data/mock-blog'
import { notFound } from 'next/navigation'

/**
 * ブログ詳細ページ（Premium機能）
 */
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = mockBlogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* 戻るリンク */}
      <div className="bg-ranch-cream py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ranch-primary hover:text-ranch-light transition-colors"
          >
            <ArrowLeft size={20} />
            ブログ一覧に戻る
          </Link>
        </div>
      </div>

      {/* 記事本文 */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* カテゴリー */}
            <div className="mb-4">
              <span className="inline-block bg-ranch-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            {/* タイトル */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>

            {/* メタ情報 */}
            <div className="flex items-center gap-4 text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>

            {/* サムネイル画像 */}
            {post.thumbnail && (
              <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* 本文 */}
            <div className="prose prose-lg max-w-none mb-8">
              {post.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>

            {/* タグ */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-sm text-ranch-primary bg-ranch-cream px-4 py-2 rounded-full"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 関連記事 */}
      <section className="py-12 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-ranch-primary mb-8">
              関連記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockBlogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.thumbnail || '/images/default-blog.jpg'}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-ranch-primary mb-2">
                        {relatedPost.category}
                      </p>
                      <h3 className="font-bold text-gray-800 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
