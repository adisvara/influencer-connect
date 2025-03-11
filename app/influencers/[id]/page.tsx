import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Instagram,
  Mail,
  MessageSquare,
  Star,
  Twitter,
  Youtube,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingForm } from "@/components/booking-form"
import { InfluencerReviews } from "@/components/influencer-reviews"
import { InfluencerPortfolio } from "@/components/influencer-portfolio"

// Mock data for a single influencer
const influencer = {
  id: 1,
  name: "Alex Johnson",
  handle: "@alexjcreates",
  avatar: "/placeholder.svg?height=200&width=200",
  coverImage: "/placeholder.svg?height=400&width=1200",
  category: "Lifestyle",
  followers: "1.2M",
  engagement: "4.5%",
  rating: 4.8,
  reviewCount: 124,
  platforms: [
    { name: "instagram", url: "https://instagram.com/alexjcreates", followers: "850K" },
    { name: "youtube", url: "https://youtube.com/alexjcreates", followers: "320K" },
    { name: "twitter", url: "https://twitter.com/alexjcreates", followers: "75K" },
  ],
  price: "$1,200",
  location: "Los Angeles, CA",
  languages: ["English", "Spanish"],
  bio: "Lifestyle content creator specializing in travel, fashion, and wellness. I help brands connect with millennials and Gen Z through authentic storytelling and visually stunning content.",
  verified: true,
  responseTime: "Usually responds within 24 hours",
  completedProjects: 87,
  services: [
    {
      title: "Instagram Post",
      description: "One high-quality Instagram post featuring your product or service",
      price: "$800",
      deliveryTime: "3-5 days",
    },
    {
      title: "Instagram Story",
      description: "A series of 3-5 Instagram stories featuring your product or service",
      price: "$500",
      deliveryTime: "2-3 days",
    },
    {
      title: "YouTube Video",
      description: "A dedicated 10-15 minute YouTube video featuring your product or service",
      price: "$2,500",
      deliveryTime: "7-10 days",
    },
    {
      title: "Full Campaign",
      description: "Comprehensive campaign including 1 YouTube video, 2 Instagram posts, and 5 Instagram stories",
      price: "$3,500",
      deliveryTime: "14 days",
    },
  ],
  stats: [
    { label: "Avg. Engagement", value: "4.5%" },
    { label: "Audience Age", value: "18-34" },
    { label: "Gender Split", value: "65% F / 35% M" },
    { label: "Top Locations", value: "US, UK, Canada" },
  ],
  availability: "Available from June 15, 2025",
}

export default function InfluencerProfilePage({ params }: { params: { id: string } }) {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              InfluenceConnect
            </Link>
          </div>
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
        <div className="relative">
          <div className="h-64 w-full bg-gradient-to-r from-blue-500 to-purple-500">
            {influencer.coverImage && (
              <img
                src={influencer.coverImage || "/placeholder.svg"}
                alt={`${influencer.name} cover`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="container relative -mt-20">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-40 w-40 border-4 border-background">
                  <AvatarImage src={influencer.avatar} alt={influencer.name} />
                  <AvatarFallback>{influencer.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center md:text-left">
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold">{influencer.name}</h1>
                    {influencer.verified && <CheckCircle className="h-6 w-6 fill-primary text-background" />}
                  </div>
                  <p className="text-muted-foreground">{influencer.handle}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <Badge variant="secondary">{influencer.category}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="font-medium">{influencer.rating}</span>
                      <span className="text-muted-foreground ml-1">({influencer.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-4 mt-4 md:mt-20">
                <Button variant="outline" className="flex gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </Button>
                <Button className="flex gap-2">
                  <Calendar className="h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-8">
              <Link
                href="/influencers"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all influencers
              </Link>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">About</h2>
                  <p>{influencer.bio}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Card className="flex-1">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Location</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>{influencer.location}</span>
                    </CardContent>
                  </Card>

                  <Card className="flex-1">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>{influencer.languages.join(", ")}</CardContent>
                  </Card>

                  <Card className="flex-1">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Response Time</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{influencer.responseTime}</span>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Social Platforms</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {influencer.platforms.map((platform) => (
                      <Card key={platform.name}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-muted">{getPlatformIcon(platform.name)}</div>
                            <div>
                              <h3 className="font-medium capitalize">{platform.name}</h3>
                              <p className="text-sm text-muted-foreground">{platform.followers} followers</p>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full mt-4" asChild>
                            <a href={platform.url} target="_blank" rel="noopener noreferrer">
                              View Profile
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Audience Demographics</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {influencer.stats.map((stat) => (
                      <Card key={stat.label}>
                        <CardContent className="p-6 text-center">
                          <p className="text-xl font-bold">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Tabs defaultValue="portfolio">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="portfolio" className="mt-6">
                    <InfluencerPortfolio />
                  </TabsContent>

                  <TabsContent value="services" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {influencer.services.map((service, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                                <span className="font-bold">{service.price}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                                <span>{service.deliveryTime}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6">
                    <InfluencerReviews rating={influencer.rating} reviewCount={influencer.reviewCount} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Book {influencer.name}</CardTitle>
                    <CardDescription>Complete the form below to request a booking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookingForm influencer={influencer} />
                  </CardContent>
                </Card>
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

