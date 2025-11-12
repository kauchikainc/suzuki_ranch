import HeroSlider from '@/components/features/HeroSlider'
import FeaturesSection from '@/components/features/FeaturesSection'
import ProductsSection from '@/components/features/ProductsSection'
import OrganicSection from '@/components/features/OrganicSection'
import CTASection from '@/components/features/CTASection'

/**
 * トップページ
 * ヒーロースライダー、特徴、商品紹介、オーガニックこだわり、CTAを表示
 */
export default function Home() {
  return (
    <div>
      {/* ヒーローセクション */}
      <HeroSlider />

      {/* 特徴セクション */}
      <FeaturesSection />

      {/* オーガニックこだわりセクション */}
      <OrganicSection />

      {/* 商品紹介セクション */}
      <ProductsSection />

      {/* CTAセクション */}
      <CTASection />
    </div>
  )
}
