import Link from "next/link"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfluencerCard } from "@/components/influencer-card"
import { InfluencerFilters } from "@/components/influencer-filters"

// Mock data for influencers
import { influencers } from "@/lib/data"

export default function InfluencersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              InfluenceConnect
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/influencers" className="text-sm font-medium hover:underline">
              Browse Influencers
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Browse Influencers</h1>
              <p className="text-muted-foreground">Find the perfect influencer for your next marketing campaign</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by name, niche, or location..." className="w-full pl-8" />
              </div>
              <Button variant="outline" className="md:w-auto w-full">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="lg:col-span-1 h-fit">
                <CardContent className="p-6">
                  <InfluencerFilters />
                </CardContent>
              </Card>

              <div className="lg:col-span-3 space-y-6">
                <Tabs defaultValue="all">
                  <div className="flex justify-between items-center">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="verified">Verified</TabsTrigger>
                      <TabsTrigger value="trending">Trending</TabsTrigger>
                      <TabsTrigger value="new">New</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Sort by:</span>
                      <select className="text-sm border rounded p-1">
                        <option>Relevance</option>
                        <option>Followers: High to Low</option>
                        <option>Engagement: High to Low</option>
                        <option>Price: Low to High</option>
                      </select>
                    </div>
                  </div>

                  <TabsContent value="all" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {influencers.map((influencer) => (
                        <InfluencerCard key={influencer.id} influencer={influencer} />
                      ))}
                    </div>

                    <div className="flex justify-center mt-8">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled>
                          Previous
                        </Button>
                        <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <Button variant="outline" size="sm">
                          3
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="verified" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {influencers
                        .filter((influencer) => influencer.verified)
                        .map((influencer) => (
                          <InfluencerCard key={influencer.id} influencer={influencer} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trending" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {influencers
                        .filter((influencer) => influencer.trending)
                        .map((influencer) => (
                          <InfluencerCard key={influencer.id} influencer={influencer} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="new" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {influencers
                        .filter((influencer) => influencer.new)
                        .map((influencer) => (
                          <InfluencerCard key={influencer.id} influencer={influencer} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              InfluenceConnect
            </Link>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 InfluenceConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

