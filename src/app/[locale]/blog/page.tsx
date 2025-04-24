import { Metadata } from 'next'
import { getBlogPosts, getFeaturedBlogPosts, getBlogCategories } from '@/lib/blog'
import BlogHeader from '@/sections/blog/BlogHeader'
import BlogFeatured from '@/sections/blog/BlogFeatured'
import BlogGrid from '@/sections/blog/BlogGrid'
import BlogCategoryFilter from '@/sections/blog/BlogCategoryFilter'
import BlogPagination from '@/sections/blog/BlogPagination'
import { getTranslations } from 'next-intl/server'

// Define posts per page
const POSTS_PER_PAGE = 9

// Generate metadata for the blog page
export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  // Await the params object before accessing properties
  const paramsObj = await params;
  const locale = paramsObj.locale;
  const t = await getTranslations({ locale, namespace: 'blog' })
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      type: 'website',
      locale: locale,
      url: `https://jayd.ai/${locale}/blog`,
    },
  }
}

export default async function BlogPage({
  params,
  searchParams
}: {
  params: { locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Await both params and searchParams objects
  const paramsObj = await params;
  const searchParamsObj = await searchParams;
  
  // Access properties from the awaited objects
  const locale = paramsObj.locale;
  
  const currentPage = typeof searchParamsObj.page === 'string' 
    ? parseInt(searchParamsObj.page) 
    : 1;
  
  const selectedCategory = typeof searchParamsObj.category === 'string'
    ? searchParamsObj.category
    : null;
  
  // Fetch blog posts with pagination and category filter
  const { posts, total } = await getBlogPosts(
    locale,
    currentPage,
    POSTS_PER_PAGE,
    selectedCategory || undefined
  )
  
  // Calculate total pages
  const totalPages = Math.ceil(total / POSTS_PER_PAGE)
  
  // Get featured post (only on first page and when no category filter)
  let featuredPost = null
  if (currentPage === 1 && !selectedCategory) {
    const featuredPosts = await getFeaturedBlogPosts(locale, 1)
    featuredPost = featuredPosts.length > 0 ? featuredPosts[0] : null
  }
  
  // Get categories for filter
  const categories = await getBlogCategories(locale)
  
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <BlogHeader />
        
        {/* Featured Post - show only on first page and when no category filter */}
        {featuredPost && currentPage === 1 && !selectedCategory && (
          <div className="mb-16">
            <BlogFeatured post={featuredPost} />
          </div>
        )}
        
        {/* Category Filter */}
        <BlogCategoryFilter 
          categories={categories} 
          activeCategory={selectedCategory} 
        />
        
        {/* Blog Posts Grid */}
        <BlogGrid posts={posts} />
        
        {/* Pagination */}
        <BlogPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
        />
      </div>
    </div>
  )
}