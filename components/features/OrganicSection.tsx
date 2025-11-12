'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * オーガニックこだわりセクションコンポーネント
 * オーガニックへのこだわりを強調表示
 */

const commitments = [
  '化学肥料・農薬不使用の牧草',
  '遺伝子組み換え飼料は一切使用しません',
  'ストレスフリーな放牧環境',
  '定期的な健康チェックと徹底した衛生管理',
  '有機JAS認証取得済み',
  '自然のサイクルを大切にした循環型農業',
]

export default function OrganicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側: 画像 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80"
                alt="オーガニック牧場の風景"
                fill
                className="object-cover"
              />
            </div>
            {/* 装飾要素 */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ranch-light rounded-full opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-ranch-primary rounded-full opacity-20 -z-10" />
          </motion.div>

          {/* 右側: テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-ranch-primary/10 text-ranch-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              100% オーガニック
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ranch-primary mb-6">
              自然のめぐみを
              <br />
              そのままに
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              鈴木牧場は、創業以来オーガニックにこだわり続けています。
              化学肥料や農薬を使わず、自然のサイクルを大切にした循環型農業で、
              安心・安全な乳製品をお届けしています。
            </p>

            {/* こだわりリスト */}
            <ul className="space-y-4">
              {commitments.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-ranch-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTAボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <a
                href="/about"
                className="inline-block bg-ranch-primary hover:bg-ranch-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                牧場について詳しく
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
