// プランの種類
export type Plan = 'standard' | 'premium'

// ブログ記事の型定義（Premium機能）
export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  publishedAt: string
  thumbnail?: string
  category: string
  tags: string[]
}

// ニュース・お知らせの型定義（Premium機能）
export interface News {
  id: string
  title: string
  content: string
  publishedAt: string
  category: 'news' | 'event' | 'notice'
}

// 商品の型定義
export interface Product {
  id: string
  name: string
  description: string
  price?: number
  image: string
  category: 'milk' | 'cheese' | 'other'
  isOrganic: boolean
  features: string[]
}

// お問い合わせフォームの型定義
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}
