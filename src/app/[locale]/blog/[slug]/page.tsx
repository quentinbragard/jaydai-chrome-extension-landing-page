import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/blog'
import { getTranslations } from 'next-intl/server'
import BlogCard from '@/sections/blog/BlogCard'

// Generate metadata for the blog post
export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' })
  const post = await getBlogPostBySlug(slug, locale)
  
  if (!post) {
    return {
      title: t('post.notFound'),
    }
  }

  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      locale: locale,
      url: `https://jayd.ai/${locale}/blog/${slug}`,
      images: [
        {
          url: post.featured_image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string }
}) {
  const t = await getTranslations({ locale, namespace: 'blog' })
  
  // Fetch blog post
  const post = await getBlogPostBySlug(slug, locale)
  
  // If post not found, redirect to the blog index page with the correct locale
  if (!post) {
    redirect(`/${locale}/blog`)
  }
  
  // Format date for display
  const dateLocale = locale === 'fr' ? fr : enUS
  const formattedDate = format(new Date(post.published_at), 'MMMM d, yyyy', { locale: dateLocale })
  
  // Get related posts
  const relatedPosts = await getRelatedBlogPosts(post.id, post.category, locale, 3)
  
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" />
            {t('post.backToBlog')}
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm mb-4">
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-foreground/70 mb-6">
              {post.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.reading_time} min {t('post.readTime')}</span>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={tag}>
                        {tag}{index < post.tags.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative aspect-[16/9] mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.featured_image || '/images/blog-placeholder.jpg'}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Article Content */}
          <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-16">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-16">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-secondary/10 text-foreground/80 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">{t('post.relatedPosts')}</h2>
              <div className="w-24 h-1 bg-primary/30 mt-3"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard 
                  key={relatedPost.id} 
                  post={relatedPost} 
                  index={index} 
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center text-primary hover:underline"
              >
                {t('post.exploreBlog')}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}