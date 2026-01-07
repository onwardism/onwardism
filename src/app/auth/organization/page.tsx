import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Building2, Plus, Users, Hash } from 'lucide-react'

export default function OrganizationPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold">Join or Create Organization</h1>
        <p className="mt-2 text-muted-foreground">
          Get started by joining an existing organization or creating a new one
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Create Organization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Organization
            </CardTitle>
            <CardDescription>
              Start a new organization and invite your team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="orgName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Organization name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="orgName"
                  type="text"
                  placeholder="Organization name"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="orgSlug" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Organization URL
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                  app.com/
                </span>
                <Input
                  id="orgSlug"
                  type="text"
                  placeholder="organization-name"
                  className="rounded-l-none"
                />
              </div>
            </div>
            <Button className="w-full">
              Create Organization
            </Button>
          </CardContent>
        </Card>

        {/* Join Organization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Join Organization
            </CardTitle>
            <CardDescription>
              Join an existing organization with an invite code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="inviteCode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Invite code
              </label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="inviteCode"
                  type="text"
                  placeholder="INVITE123"
                  className="pl-10 uppercase"
                />
              </div>
            </div>
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an invite code? Ask your organization admin to send you one.
              </p>
            </div>
            <Button className="w-full" variant="outline">
              Join Organization
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Organizations */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Organizations</CardTitle>
          <CardDescription>
            Organizations you&apos;ve recently interacted with
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Building2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No recent organizations</p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Link
          href="/auth/login"
          className="text-sm text-primary hover:underline"
        >
          Skip for now and continue to dashboard
        </Link>
      </div>
    </div>
  )
}