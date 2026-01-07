import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MailCheck, RefreshCw, ArrowLeft } from 'lucide-react'

export default function VerifyEmailPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <MailCheck className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl text-center">Verify your email</CardTitle>
        <CardDescription className="text-center">
          We've sent a verification link to your email address
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-md text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Check your email and click the verification link to activate your account.
          </p>
          <p className="text-sm font-medium">
            your-email@domain.com
          </p>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Resend verification email
          </Button>
          
          <Button className="w-full">
            I've verified my email
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>Didn't receive the email? Check your spam folder or</p>
          <Link href="/auth/signup" className="text-primary hover:underline">
            try a different email address
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}