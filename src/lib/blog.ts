// src/lib/blog.ts
import { createClient } from '@/utils/supabase/server'

export interface BlogPost {
  id: number
  title: string
  slug: string
  summary: string
  content: string
  featured_image: string
  author: string
  published_at: string
  category: string
  tags: string[]
  status: 'draft' | 'published'
  reading_time: number
  locale: string
}

export interface BlogListResponse {
  posts: BlogPost[]
  total: number
}

export async function getBlogPosts(
  locale: string = 'en',
  page: number = 1,
  pageSize: number = 9,
  category?: string
): Promise<BlogListResponse> {
  const supabase = await createClient()
  
  // Calculate pagination
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  
  // Start the query
  let query = supabase
    .from('blog_posts')
    .select('*', { count: 'exact' })
    .eq('status', 'published')
    .eq('locale', locale)
    .order('published_at', { ascending: false })
    .range(from, to)
  
  // Add category filter if provided
  if (category) {
    query = query.eq('category', category)
  }
  
  const { data, error, count } = await query
  
  if (error) {
    console.error('Error fetching blog posts:', error)
    return { posts: [], total: 0 }
  }
  
  return {
    posts: data as BlogPost[],
    total: count || 0
  }
}

export async function getFeaturedBlogPosts(locale: string = 'en', limit: number = 3): Promise<BlogPost[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('locale', locale)
    .order('published_at', { ascending: false })
    .limit(limit)
  
  if (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }
  
  return data as BlogPost[]
}

export async function getBlogCategories(locale: string = 'en'): Promise<string[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('category')
    .eq('status', 'published')
    .eq('locale', locale)
    .order('category', { ascending: true })
  
  if (error || !data) {
    console.error('Error fetching blog categories:', error)
    return []
  }
  
  // Extract unique categories
  const categories = [...new Set(data.map(post => post.category))]
  return categories
}

export async function getBlogPostBySlug(slug: string, locale: string = 'en'): Promise<BlogPost | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('locale', locale)
    .single()
  
  if (error || !data) {
    console.error('Error fetching blog article by slug:', error)
    return null
  }
  
  return data as BlogPost
}

export async function getRelatedBlogPosts(
  currentPostId: number,
  category: string,
  locale: string = 'en',
  limit: number = 3
): Promise<BlogPost[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('locale', locale)
    .eq('category', category)
    .neq('id', currentPostId)
    .order('published_at', { ascending: false })
    .limit(limit)
  
  if (error || !data) {
    console.error('Error fetching related blog posts:', error)
    return []
  }
  
  return data as BlogPost[]
}