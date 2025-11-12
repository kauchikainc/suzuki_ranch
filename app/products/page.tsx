import Image from 'next/image'
import { Leaf, Award, Heart } from 'lucide-react'

/**
 * 商品紹介ページ
 * 全商品を一覧表示
 */

const products = [
  {
    id: 1,
    name: 'オーガニック牛乳',
    category: '牛乳',
    description: '毎朝搾りたて、新鮮そのもの。濃厚でクリーミーな味わいが特徴の牛乳です。化学肥料や農薬を一切使わないオーガニック飼料で育てた牛から作られています。',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80',
    features: ['有機JAS認証', '無添加', '低温殺菌'],
    badge: 'オーガニック',
    badgeColor: 'bg-green-600',
  },
  {
    id: 2,
    name: 'ナチュラルチーズ（ハード）',
    category: 'チーズ',
    description: '職人が丁寧に熟成させた自家製チーズ。6ヶ月以上熟成させることで、芳醇な香りと深い味わいが生まれます。そのまま食べても、料理に使っても美味しくお召し上がりいただけます。',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80',
    features: ['6ヶ月熟成', '無添加', '職人手作り'],
    badge: '金賞受賞',
    badgeColor: 'bg-yellow-600',
  },
  {
    id: 3,
    name: 'プレミアムヨーグルト',
    category: 'ヨーグルト',
    description: '生きた乳酸菌がたっぷり含まれた、なめらかで濃厚な味わいのヨーグルト。砂糖不使用で、牛乳本来の自然な甘みを感じられます。',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    features: ['乳酸菌10億個', '砂糖不使用', '無添加'],
    badge: '人気商品',
    badgeColor: 'bg-red-600',
  },
  {
    id: 4,
    name: 'フレッシュチーズ（モッツァレラ）',
    category: 'チーズ',
    description: '作りたてのモッツァレラチーズ。ミルキーでまろやかな味わいが特徴です。サラダやピザ、カプレーゼなど様々な料理にお使いいただけます。',
    image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=600&q=80',
    features: ['作りたて', 'ミルキー', '無添加'],
    badge: 'オーガニック',
    badgeColor: 'bg-green-600',
  },
  {
    id: 5,
    name: 'バター',
    category: 'バター',
    description: '新鮮な生乳から作る自家製バター。風味豊かで、パンに塗るだけで贅沢な味わいが楽しめます。お菓子作りにも最適です。',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80',
    features: ['無添加', '無塩・有塩', '風味豊か'],
    badge: 'オーガニック',
    badgeColor: 'bg-green-600',
  },
  {
    id: 6,
    name: 'アイスクリーム',
    category: 'アイス',
    description: '濃厚なミルクの味わいが楽しめる自家製アイスクリーム。バニラ、いちご、抹茶など季節限定フレーバーもご用意しています。',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80',
    features: ['濃厚ミルク', '季節限定', '無添加'],
    badge: '季節限定',
    badgeColor: 'bg-blue-600',
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <section className="relative h-[400px] bg-ranch-primary">
        <Image
          src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1920&q=80"
          alt="商品紹介"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">商品紹介</h1>
            <p className="text-xl">オーガニックにこだわった、自慢の乳製品</p>
          </div>
        </div>
      </section>

      {/* こだわりポイント */}
      <section className="py-12 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold">100% オーガニック</p>
                <p className="text-sm text-gray-600">有機JAS認証取得</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-semibold">愛情込めた製造</p>
                <p className="text-sm text-gray-600">職人の手作り</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="font-semibold">受賞歴多数</p>
                <p className="text-sm text-gray-600">品質へのこだわり</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品一覧 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
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
                  <div className="text-sm text-ranch-primary font-semibold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* 特徴タグ */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-ranch-cream text-ranch-primary px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 購入方法 */}
      <section className="py-20 bg-ranch-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-ranch-primary mb-6">
              ご購入方法
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              鈴木牧場の商品は、以下の方法でご購入いただけます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ranch-primary mb-3">
                  直売所でのご購入
                </h3>
                <p className="text-gray-600 mb-4">
                  牧場内の直売所で、新鮮な商品を直接お買い求めいただけます。
                </p>
                <p className="text-sm text-gray-500">
                  営業時間: 9:00 - 17:00<br />
                  定休日: 水曜日
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ranch-primary mb-3">
                  お問い合わせ
                </h3>
                <p className="text-gray-600 mb-4">
                  配送や卸売りに関しては、お気軽にお問い合わせください。
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-ranch-primary hover:bg-ranch-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
