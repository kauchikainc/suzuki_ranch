'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * 商品紹介セクションコンポーネント
 * 主要商品をカード形式で表示
 */

const products = [
  {
    id: 1,
    name: 'オーガニック牛乳',
    description: '毎朝搾りたて、新鮮そのもの。濃厚でクリーミーな味わいが特徴です。',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80',
    badge: 'オーガニック認証',
    badgeColor: 'bg-green-600',
  },
  {
    id: 2,
    name: 'ナチュラルチーズ',
    description: '職人が丁寧に熟成させた自家製チーズ。芳醇な香りと深い味わい。',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80',
    badge: '受賞商品',
    badgeColor: 'bg-yellow-600',
  },
  {
    id: 3,
    name: 'プレミアムヨーグルト',
    description: '生きた乳酸菌たっぷり。なめらかで濃厚な味わいのヨーグルトです。',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    badge: '限定商品',
    badgeColor: 'bg-red-600',
  },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-ranch-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ranch-primary mb-4">
            おすすめ商品
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            オーガニックにこだわった、自慢の乳製品をご紹介します。
          </p>
        </motion.div>

        {/* 商品カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* 商品画像 */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* バッジ */}
                  <div
                    className={`absolute top-4 right-4 ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {product.badge}
                  </div>
                </div>

                {/* 商品情報 */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-ranch-primary hover:text-ranch-light font-semibold transition-colors group/link"
                  >
                    詳しく見る
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 全商品を見るボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-block bg-ranch-primary hover:bg-ranch-light text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            全商品を見る
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
