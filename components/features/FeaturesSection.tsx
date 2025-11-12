'use client'

import { Leaf, Heart, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * 特徴セクションコンポーネント
 * 鈴木牧場の4つの特徴を表示
 */

const features = [
  {
    icon: Leaf,
    title: '100% オーガニック',
    description:
      '化学肥料や農薬を一切使わない、完全オーガニックの飼料で育てています。牛たちの健康を第一に考えた飼育方法です。',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Heart,
    title: '愛情込めた飼育',
    description:
      '一頭一頭に名前をつけ、愛情を持って育てています。ストレスフリーな環境で、のびのびと過ごす牛たちから生まれる高品質な乳製品です。',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Award,
    title: '受賞歴多数',
    description:
      '全国品評会で金賞を受賞。味わい、品質ともに高い評価をいただいています。職人の技術と情熱が詰まった自慢の製品です。',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Users,
    title: '地域との絆',
    description:
      '地域の皆様に支えられ、3代続く牧場です。地元の学校への食育活動や、牧場見学など、地域貢献にも力を入れています。',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ranch-primary mb-3 sm:mb-4">
            鈴木牧場の特徴
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            私たちは、安心・安全なオーガニック乳製品をお届けするため、
            こだわりを持って牧場を運営しています。
          </p>
        </motion.div>

        {/* 特徴カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* アイコン */}
                <div
                  className={`${feature.bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`${feature.color} w-7 h-7 sm:w-8 sm:h-8`} />
                </div>

                {/* タイトル */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                {/* 説明 */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
