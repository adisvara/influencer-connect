import Link from "next/link"
import { ArrowRight, Search, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FeaturedInfluencers } from "@/components/featured-influencers"
import { Categories } from "@/components/categories"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xl font-bold">InfluenceConnect</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Connect with the Perfect Influencers for Your Brand
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find and collaborate with influencers who align with your brand values and reach your target audience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search influencers by niche, location..."
                    className="w-full bg-background pl-8 rounded-lg border"
                  />
                </div>
                <Button className="w-full">
                  Find Influencers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Influencers</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover top-performing influencers across various niches
                </p>
              </div>
            </div>
            <FeaturedInfluencers />
            <div className="flex justify-center mt-8">
              <Link href="/influencers">
                <Button variant="outline">View All Influencers</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse by Category</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find influencers specialized in your industry
                </p>
              </div>
            </div>
            <Categories />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Simple steps to connect with influencers and grow your brand
                </p>
              </div>
            </div>
            <HowItWorks />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Brand?
                </h2>
                <p className="text-primary-foreground/90 md:text-xl">
                  Join thousands of brands that have found their perfect influencer match on our platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button variant="secondary" size="lg">
                      Sign Up as a Brand
                    </Button>
                  </Link>
                  <Link href="/influencer-signup">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Join as an Influencer
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl">5000+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Active Influencers</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl">2500+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Brands</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl">10K+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Successful Campaigns</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl">98%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xl font-bold">InfluenceConnect</span>
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

