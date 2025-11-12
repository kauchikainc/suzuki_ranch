'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * ヘッダーコンポーネント
 * ナビゲーションメニューとロゴを表示
 * スクロール時に背景色を変更するアニメーション付き
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'ホーム', href: '/' },
    { name: '商品紹介', href: '/products' },
    { name: '牧場について', href: '/about' },
    { name: 'お知らせ', href: '/news' },
    { name: 'ブログ', href: '/blog' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link
            href="/"
            className="text-2xl font-bold text-ranch-primary hover:text-ranch-light transition-colors"
          >
            <span className="text-ranch-primary">鈴木牧場</span>
          </Link>

          {/* デスクトップメニュー */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-ranch-primary font-medium transition-colors duration-200 hover:scale-105 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-ranch-primary hover:text-ranch-light transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-slide-up">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-ranch-primary font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
