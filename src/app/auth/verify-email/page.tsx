'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MailCheck, RefreshCw, ArrowLeft } from 'lucide-react'

export default function VerifyEmailPage() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters
    
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newCode = [...code]
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i]
      }
    }
    
    setCode(newCode)
    
    // Focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex(digit => digit === '')
    const focusIndex = nextEmptyIndex === -1 ? 5 : Math.min(nextEmptyIndex, 5)
    inputRefs.current[focusIndex]?.focus()
  }

  const isCodeComplete = code.every(digit => digit !== '')

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <MailCheck className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl text-center">Verify your email</CardTitle>
        <CardDescription className="text-center">
          Enter the 6-digit code sent to your email address
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-md text-center">
          <p className="text-sm text-muted-foreground mb-2">
            We&apos;ve sent a verification code to:
          </p>
          <p className="text-sm font-medium">
            your-email@domain.com
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-center gap-1 sm:gap-2">
            {code.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value.replace(/\D/g, ''))}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-10 h-10 sm:w-12 h-12 text-center text-base sm:text-lg font-semibold"
                placeholder="•"
              />
            ))}
          </div>
          
          <Button 
            className="w-full h-11 text-sm" 
            disabled={!isCodeComplete}
          >
            Verify Email
          </Button>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full h-11 text-sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Resend verification code
          </Button>
        </div>
        
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <p>Didn&apos;t receive the code? Check your spam folder or</p>
          <Link href="/auth/signup" className="text-primary hover:underline">
            try a different email address
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center text-xs sm:text-sm text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}