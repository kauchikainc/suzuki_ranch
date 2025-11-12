'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone } from 'lucide-react'

/**
 * CTAセクションコンポーネント
 * お問い合わせへの誘導
 */
export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-ranch-primary to-ranch-light relative overflow-hidden" ref={ref}>
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            お気軽にお問い合わせください
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            商品に関するご質問や、牧場見学のご相談など、
            何でもお気軽にお問い合わせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-ranch-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              メールでお問い合わせ
            </Link>
            <a
              href="tel:0123456789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2 border-white text-sm sm:text-base"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              0123-45-6789
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
