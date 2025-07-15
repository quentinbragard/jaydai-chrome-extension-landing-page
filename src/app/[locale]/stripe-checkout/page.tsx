// src/app/[locale]/stripe-checkout/page.tsx
"use client"

import React, { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { AIToolGrid } from "@/components/common/AITools/AIToolGrid"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-backgound"
import { useTranslations } from "next-intl"
import { trackEvent } from "@/lib/analytics"

function StripeCheckoutContent() {
  const searchParams = useSearchParams()
  const t = useTranslations('payment')
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  
  useEffect(() => {
    const verifySession = async () => {
      try {
        const sessionId = searchParams.get('sessionId')
        const redirectUrl = searchParams.get('redirect-url')
        const isDev = searchParams.get('dev') === 'true'
        
        if (!sessionId) {
          setError('Missing session ID')
          setLoading(false)
          return
        }
        
        const apiUrl = isDev 
          ? 'https://api.dev.jayd.ai/verify-session'
          : 'https://api.prod.jayd.ai/verify-session'
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        })
        
        const data = await response.json()
        
        if (data.success) {
          setSuccess(true)
          // Track successful payment
          trackEvent('Payment Completed', {
            page_location: window.location.pathname,
            timestamp: new Date().toISOString()
          })
          
          // If redirect URL is provided, redirect the user
          if (redirectUrl) {
            window.location.href = redirectUrl
          }
        } else {
          setError(data.message || 'Verification failed')
        }
      } catch (err) {
        setError('An error occurred during verification')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    
    verifySession()
  }, [searchParams])
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-xl font-medium">
            {t('verifying')}
          </h2>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 text-center">
          <div className="text-destructive mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {t('verificationFailed')}
          </h2>
          <p className="text-foreground/70 mb-6">
            {error}
          </p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground"
          >
            {t('tryAgain')}
          </Button>
        </div>
      </div>
    )
  }
  
  // Success state without redirect
  if (success) {
    return (
      <AuroraBackground>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="relative mb-6"
              >
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                {t('paymentSuccessful')}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-foreground/70 mb-8"
              >
                {t('thankYou')}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-8 mb-8"
            >
              <div className="text-center mb-6">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-medium mb-2">
                  {t('getStarted')}
                </h3>
                <p className="text-foreground/70">
                  {t('chooseToolBelow')}
                </p>
              </div>
              
              <AIToolGrid />
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    )
  }
  
  return null
}

export default function StripeCheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StripeCheckoutContent />
    </Suspense>
  )
}