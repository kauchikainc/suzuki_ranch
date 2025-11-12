import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

/**
 * フッターコンポーネント
 * サイト全体のフッター情報を表示
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ranch-primary text-white">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* 会社情報 */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">鈴木牧場</h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              北海道の大自然で育てた牛から作るオーガニック牛乳とチーズをお届けします。
            </p>
          </div>

          {/* リンク */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  商品紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  牧場について
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  お知らせ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">お問い合わせ</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 flex-shrink-0" />
                <span>〒000-0000<br />北海道○○郡○○町1-2-3</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>0123-45-6789</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 flex-shrink-0" />
                <span className="break-all">info@suzuki-ranch.example.com</span>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">SNS</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-200">
            © {currentYear} 鈴木牧場. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
