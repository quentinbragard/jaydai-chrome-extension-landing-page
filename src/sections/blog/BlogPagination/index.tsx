'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

const BlogPagination: React.FC<BlogPaginationProps> = ({
  currentPage,
  totalPages
}) => {
  const t = useTranslations('blog')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    
    // Always show first page
    if (currentPage > 3) {
      pageNumbers.push(1)
    }
    
    // Show dots if needed
    if (currentPage > 4) {
      pageNumbers.push('...')
    }
    
    // Show current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pageNumbers.push(i)
    }
    
    // Show dots if needed
    if (currentPage < totalPages - 3) {
      pageNumbers.push('...')
    }
    
    // Always show last page if it exists
    if (totalPages > 1 && currentPage < totalPages - 1) {
      pageNumbers.push(totalPages)
    }
    
    return pageNumbers
  }
  
  const changePage = (page: number) => {
    // Preserve existing query parameters
    const params = new URLSearchParams(searchParams.toString())
    
    // Update or add the page parameter
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    
    // Navigate to the new URL
    const newUrl = `${pathname}?${params.toString()}`
    router.push(newUrl)
  }
  
  // If there's only one page, don't show pagination
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex items-center gap-1">
        {/* First page button */}
        <button
          onClick={() => changePage(1)}
          disabled={currentPage === 1}
          aria-label={t('pagination.firstPage')}
          className={cn(
            "w-9 h-9 flex items-center justify-center rounded-md",
            currentPage === 1
              ? "text-foreground/40 cursor-not-allowed"
              : "hover:bg-secondary/20 text-foreground"
          )}
        >
          <ChevronsLeft size={16} />
        </button>
        
        {/* Previous page button */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label={t('pagination.previousPage')}
          className={cn(
            "w-9 h-9 flex items-center justify-center rounded-md",
            currentPage === 1
              ? "text-foreground/40 cursor-not-allowed"
              : "hover:bg-secondary/20 text-foreground"
          )}
        >
          <ChevronLeft size={16} />
        </button>
        
        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`dots-${index}`} className="w-9 h-9 flex items-center justify-center text-foreground/60">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => changePage(page as number)}
              aria-label={t('pagination.goToPage', { page })}
              aria-current={currentPage === page ? 'page' : undefined}
              className={cn(
                "w-9 h-9 flex items-center justify-center rounded-md text-sm",
                currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary/20 text-foreground"
              )}
            >
              {page}
            </button>
          )
        ))}
        
        {/* Next page button */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label={t('pagination.nextPage')}
          className={cn(
            "w-9 h-9 flex items-center justify-center rounded-md",
            currentPage === totalPages
              ? "text-foreground/40 cursor-not-allowed"
              : "hover:bg-secondary/20 text-foreground"
          )}
        >
          <ChevronRight size={16} />
        </button>
        
        {/* Last page button */}
        <button
          onClick={() => changePage(totalPages)}
          disabled={currentPage === totalPages}
          aria-label={t('pagination.lastPage')}
          className={cn(
            "w-9 h-9 flex items-center justify-center rounded-md",
            currentPage === totalPages
              ? "text-foreground/40 cursor-not-allowed"
              : "hover:bg-secondary/20 text-foreground"
          )}
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default BlogPagination