// src/lib/blog.ts

import { createClient } from '@/utils/supabase/server'

export interface BlogSection {
  type: string;
  [key: string]: any;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content?: string[]; // Legacy field
  content_metadata?: BlogSection[];
  page_metadata?: {
    seo_title?: string;
    seo_description?: string;
    canonical_url?: string;
    og_image?: string;
    keywords?: string[];
    [key: string]: any; // Additional SEO and page metadata
  };
  featured_image: string;
  author: string;
  published_at: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  reading_time: number;
  locale: string;
  call_to_action_metadata?: {
    title: string;
    description?: string;
    body: string;
    href: string;
    variant?: string;
  }
}

export interface BlogListResponse {
  posts: BlogPost[];
  total: number;
}

export async function getBlogPosts(
  locale: string = 'en',
  page: number = 1,
  pageSize: number = 9,
  category?: string
): Promise<BlogListResponse> {
  const supabase = await createClient();
  
  // Calculate pagination
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  
  // Start the query
  let query = supabase
    .from('blog_posts')
    .select('*', { count: 'exact' })
    .eq('status', 'published')
    .eq('locale', locale)
    .order('published_at', { ascending: false })
    .range(from, to);
  
  // Add category filter if provided
  if (category) {
    query = query.eq('category', category);
  }
  
  const { data, error, count } = await query;
  
  if (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], total: 0 };
  }
  
  return {
    posts: data as BlogPost[],
    total: count || 0
  };
}

export async function getFeaturedBlogPosts(locale: string = 'en', limit: number = 3): Promise<BlogPost[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('locale', locale)
    .order('published_at', { ascending: false })
    .limit(limit);
  
  if (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
  
  return data as BlogPost[];
}

export async function getBlogCategories(locale: string = 'en'): Promise<string[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('category')
    .eq('status', 'published')
    .eq('locale', locale)
    .order('category', { ascending: true });
  
  if (error || !data) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
  
  // Extract unique categories
  const categories = [...new Set(data.map(post => post.category))];
  return categories;
}

export async function getBlogPostBySlug(slug: string, locale: string = 'en'): Promise<BlogPost | null> {
  const supabase = await createClient();
  
  // Select all fields including new JSON metadata fields
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('locale', locale)
    .single();
  
  if (error || !data) {
    console.error('Error fetching blog article by slug:', error);
    return null;
  }
  
  // Transform the data for consistency
  const transformedData = {
    ...data,
    // Ensure page_metadata exists
    page_metadata: data.page_metadata || {},
    
    // For content, handle different formats:
    // 1. If content_metadata exists, use it
    // 2. If legacy content array exists, transform it to plainHtml sections
    // 3. If neither exists, initialize as empty array
    content_metadata: data.content_metadata || 
      (Array.isArray(data.content) 
        ? data.content.map((html: string) => ({ type: 'plainHtml', content: html }))
        : [])
  };
  
  return transformedData as BlogPost;
}

export async function getRelatedBlogPosts(
  currentPostId: number,
  category: string,
  locale: string = 'en',
  limit: number = 3
): Promise<BlogPost[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('locale', locale)
    .eq('category', category)
    .neq('id', currentPostId)
    .order('published_at', { ascending: false })
    .limit(limit);
  
  if (error || !data) {
    console.error('Error fetching related blog posts:', error);
    return [];
  }
  
  return data as BlogPost[];
}