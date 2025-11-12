'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ヒーロースライダーコンポーネント
 * 複数の画像を自動的にフェードイン・アウトで切り替える
 */

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80',
    title: 'オーガニックな牧場生活',
    subtitle: '北海道の大自然で育てる、安心・安全な牛たち',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1920&q=80',
    title: '新鮮なオーガニック牛乳',
    subtitle: '毎朝搾りたての牛乳を皆様の食卓へ',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1920&q=80',
    title: '自家製チーズの製造',
    subtitle: '職人が丁寧に作る、こだわりのチーズ',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // 自動スライド
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5秒ごとに切り替え

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full overflow-hidden">
      {/* スライド画像 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* テキストコンテンツ */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg px-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-md px-4">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4">
                <a
                  href="/products"
                  className="bg-ranch-primary hover:bg-ranch-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center text-sm sm:text-base"
                >
                  商品を見る
                </a>
                <a
                  href="/about"
                  className="bg-white/90 hover:bg-white text-ranch-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center text-sm sm:text-base"
                >
                  牧場について
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ナビゲーションボタン */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="前のスライド"
      >
        <ChevronLeft size={24} className="sm:w-8 sm:h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="次のスライド"
      >
        <ChevronRight size={24} className="sm:w-8 sm:h-8 text-white" />
      </button>

      {/* インジケーター */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`スライド ${index + 1} へ`}
          />
        ))}
      </div>
    </div>
  )
}
