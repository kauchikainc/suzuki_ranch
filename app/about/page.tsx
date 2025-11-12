import Image from 'next/image'
import { MapPin, Users, Calendar, Award } from 'lucide-react'

/**
 * 会社概要ページ
 * 牧場の歴史、代表挨拶、会社情報を表示
 */
export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <section className="relative h-[400px] bg-ranch-primary">
        <Image
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80"
          alt="鈴木牧場について"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">牧場について</h1>
            <p className="text-xl">三代続く、オーガニックへのこだわり</p>
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-ranch-primary mb-8 text-center">
              代表挨拶
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                    alt="代表 鈴木太郎"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center mt-4 font-semibold">
                  代表取締役<br />鈴木 太郎
                </p>
              </div>
              <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  鈴木牧場のホームページをご覧いただき、誠にありがとうございます。
                  代表の鈴木太郎と申します。
                </p>
                <p>
                  当牧場は、祖父の代から三代にわたり、この北海道の大地で牧場を営んでまいりました。
                  創業当初から一貫して大切にしてきたのは、「自然と共生し、牛たちの健康を第一に考える」という理念です。
                </p>
                <p>
                  化学肥料や農薬を使わないオーガニック飼育にこだわり、
                  牛たちがストレスなく、のびのびと過ごせる環境づくりに注力しています。
                  そうして育てた牛から生まれる牛乳やチーズは、濃厚でありながら優しい味わいが特徴です。
                </p>
                <p>
                  これからも、安心・安全な乳製品をお届けすることで、
                  皆様の豊かな食生活に貢献できるよう、スタッフ一同精進してまいります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 牧場の歴史 */}
      <section className="py-20 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ranch-primary mb-12 text-center">
            牧場の歴史
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-ranch-primary text-xl">
                1965年
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">創業</h3>
                <p className="text-gray-700">
                  初代・鈴木一郎が北海道○○町に牧場を開設。当初は5頭の乳牛からスタート。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-ranch-primary text-xl">
                1985年
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">二代目継承</h3>
                <p className="text-gray-700">
                  二代目・鈴木次郎が継承。オーガニック飼育への転換を決断し、有機JAS認証を取得。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-ranch-primary text-xl">
                2005年
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">チーズ製造開始</h3>
                <p className="text-gray-700">
                  自家製チーズの製造を開始。地元の特産品として人気を博す。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-ranch-primary text-xl">
                2015年
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">三代目継承・受賞</h3>
                <p className="text-gray-700">
                  三代目・鈴木太郎が継承。全国品評会で金賞を受賞し、品質の高さが評価される。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-ranch-primary text-xl">
                2020年
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">規模拡大</h3>
                <p className="text-gray-700">
                  牧場を拡張し、現在は約50頭の乳牛を飼育。地域との連携も強化。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ranch-primary mb-12 text-center">
            会社概要
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-ranch-cream p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-ranch-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-ranch-primary mb-1">60</div>
                <div className="text-gray-600">年の歴史</div>
              </div>
              <div className="bg-ranch-cream p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-ranch-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-ranch-primary mb-1">50</div>
                <div className="text-gray-600">頭の乳牛</div>
              </div>
              <div className="bg-ranch-cream p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-ranch-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-ranch-primary mb-1">15</div>
                <div className="text-gray-600">受賞歴</div>
              </div>
              <div className="bg-ranch-cream p-6 rounded-lg text-center">
                <MapPin className="w-12 h-12 text-ranch-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-ranch-primary mb-1">100%</div>
                <div className="text-gray-600">オーガニック</div>
              </div>
            </div>

            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream w-1/3">会社名</th>
                  <td className="py-4 px-4">株式会社 鈴木牧場</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream">代表者</th>
                  <td className="py-4 px-4">代表取締役 鈴木 太郎</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream">創業</th>
                  <td className="py-4 px-4">1965年</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream">所在地</th>
                  <td className="py-4 px-4">〒000-0000 北海道○○郡○○町1-2-3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream">電話番号</th>
                  <td className="py-4 px-4">0123-45-6789</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream">事業内容</th>
                  <td className="py-4 px-4">
                    オーガニック牛乳の生産・販売<br />
                    ナチュラルチーズの製造・販売<br />
                    乳製品の製造・販売
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 bg-ranch-cream">認証</th>
                  <td className="py-4 px-4">有機JAS認証取得</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-20 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ranch-primary mb-12 text-center">
            アクセス
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Google Map（実装時に追加）</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-ranch-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">住所</p>
                    <p className="text-gray-700">〒000-0000 北海道○○郡○○町1-2-3</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">アクセス方法</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>JR○○駅から車で約20分</li>
                    <li>○○空港から車で約40分</li>
                    <li>国道○○号線沿い</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
