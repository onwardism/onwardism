'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UserPlus, Mail, Lock, User, Users, Building } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [accountType, setAccountType] = useState<'individual' | 'organization' | null>(null)

  const handleAccountTypeSelect = (type: 'individual' | 'organization') => {
    if (type === 'organization') {
      router.push('/auth/organization')
      return
    }
    setAccountType(type)
  }

  if (accountType === null) {
    return (
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl text-center">Choose account type</CardTitle>
          <CardDescription className="text-center">
            Select how you want to use Onwardism
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:p-6">
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="h-auto p-4 sm:p-6 flex flex-col items-center space-y-2 hover:bg-muted text-center"
              onClick={() => handleAccountTypeSelect('individual')}
            >
              <User className="h-6 w-6 sm:h-8 w-8" />
              <div className="text-center">
                <div className="font-semibold text-sm sm:text-base">Individual Account</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  For personal use and individual publishing
                </div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="h-auto p-4 sm:p-6 flex flex-col items-center space-y-2 hover:bg-muted text-center"
              onClick={() => handleAccountTypeSelect('organization')}
            >
              <Building className="h-6 w-6 sm:h-8 w-8" />
              <div className="text-center">
                <div className="font-semibold text-sm sm:text-base">Organization Account</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  For teams and collaborative publishing
                </div>
              </div>
            </Button>
          </div>
          
          <div className="text-center text-xs sm:text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <User className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl text-center">Create individual account</CardTitle>
        <CardDescription className="text-center">
          Enter your information to create a new account
        </CardDescription>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setAccountType(null)}
          className="self-start"
        >
          ← Back to account type
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              First name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="firstName"
                type="text"
                placeholder="First name"
                className="pl-10 text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Last name
            </label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last name"
              className="text-sm"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="email@domain.com"
              className="pl-10 text-sm"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="pl-10 text-sm"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Confirm password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="pl-10 text-sm"
            />
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 mt-0.5"
          />
          <label htmlFor="terms" className="text-xs sm:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I agree to the{' '}
            <Link href="/legal/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/legal/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        <Button className="w-full h-11 text-sm">
          Create account
        </Button>
        <div className="text-center text-xs sm:text-sm">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}