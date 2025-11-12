'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

/**
 * お問い合わせページ
 * お問い合わせフォームと連絡先情報を表示（Standard機能）
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: 実際の送信処理（メール送信APIなど）
    // 現在はモック処理
    setTimeout(() => {
      console.log('フォーム送信:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <section className="relative h-[400px] bg-ranch-primary">
        <Image
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&q=80"
          alt="お問い合わせ"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-xl">お気軽にご連絡ください</p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* 連絡先情報 */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-ranch-primary mb-6">
                連絡先情報
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ranch-cream p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-ranch-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">住所</h3>
                    <p className="text-gray-600">
                      〒000-0000<br />
                      北海道○○郡○○町1-2-3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ranch-cream p-3 rounded-full">
                    <Phone className="w-6 h-6 text-ranch-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">電話番号</h3>
                    <p className="text-gray-600">0123-45-6789</p>
                    <p className="text-sm text-gray-500 mt-1">
                      受付時間: 9:00 - 17:00<br />
                      定休日: 水曜日
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ranch-cream p-3 rounded-full">
                    <Mail className="w-6 h-6 text-ranch-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">メールアドレス</h3>
                    <p className="text-gray-600 break-all">
                      info@suzuki-ranch.example.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-ranch-cream rounded-lg">
                <h3 className="font-semibold mb-2">営業時間</h3>
                <p className="text-gray-700">
                  平日・土日祝: 9:00 - 17:00<br />
                  定休日: 水曜日
                </p>
              </div>
            </div>

            {/* お問い合わせフォーム */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-ranch-primary mb-6">
                お問い合わせフォーム
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                  送信中にエラーが発生しました。お手数ですが、もう一度お試しください。
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">
                    お名前 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ranch-primary"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    メールアドレス <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ranch-primary"
                    placeholder="example@email.com"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ranch-primary"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* お問い合わせ種類 */}
                <div>
                  <label htmlFor="subject" className="block font-semibold mb-2">
                    お問い合わせ種類 <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ranch-primary"
                  >
                    <option value="">選択してください</option>
                    <option value="product">商品について</option>
                    <option value="visit">牧場見学について</option>
                    <option value="wholesale">卸売りについて</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label htmlFor="message" className="block font-semibold mb-2">
                    お問い合わせ内容 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ranch-primary resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                {/* 送信ボタン */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ranch-primary hover:bg-ranch-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>送信中...</>
                  ) : (
                    <>
                      <Send size={20} />
                      送信する
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  ※ 送信いただいた情報は、お問い合わせへの対応のみに使用し、
                  適切に管理いたします。
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
