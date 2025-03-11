"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Star, ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for featured influencers
const influencers = [
  {
    id: 1,
    name: "Alex Johnson",
    handle: "@alexjcreates",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Lifestyle",
    followers: "1.2M",
    engagement: "4.5%",
    rating: 4.8,
    platforms: ["instagram", "youtube"],
    price: "$1,200",
  },
  {
    id: 2,
    name: "Sophia Chen",
    handle: "@sophiaeats",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Food",
    followers: "850K",
    engagement: "5.2%",
    rating: 4.9,
    platforms: ["instagram", "twitter"],
    price: "$950",
  },
  {
    id: 3,
    name: "Marcus Williams",
    handle: "@marcustech",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Technology",
    followers: "2.5M",
    engagement: "3.8%",
    rating: 4.7,
    platforms: ["youtube", "twitter"],
    price: "$2,500",
  },
  {
    id: 4,
    name: "Priya Sharma",
    handle: "@priyabeauty",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Beauty",
    followers: "1.8M",
    engagement: "6.1%",
    rating: 4.9,
    platforms: ["instagram", "youtube"],
    price: "$1,800",
  },
  {
    id: 5,
    name: "Jordan Taylor",
    handle: "@jordanfitness",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Fitness",
    followers: "950K",
    engagement: "5.5%",
    rating: 4.6,
    platforms: ["instagram", "twitter"],
    price: "$1,100",
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    handle: "@emmatravels",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Travel",
    followers: "1.5M",
    engagement: "4.2%",
    rating: 4.8,
    platforms: ["instagram", "youtube"],
    price: "$1,600",
  },
]

export function FeaturedInfluencers() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(influencers.length / itemsPerPage)

  const displayedInfluencers = influencers.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "youtube":
        return <Youtube className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedInfluencers.map((influencer) => (
          <Card key={influencer.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500" />
            </CardHeader>
            <CardContent className="p-6 pt-0 -mt-12">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src={influencer.avatar} alt={influencer.name} />
                  <AvatarFallback>{influencer.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-bold">{influencer.name}</h3>
                <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                <Badge className="mt-2" variant="secondary">
                  {influencer.category}
                </Badge>

                <div className="flex items-center mt-4 space-x-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{influencer.rating}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mt-4">
                  <div className="text-center">
                    <p className="text-sm font-medium">{influencer.followers}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{influencer.engagement}</p>
                    <p className="text-xs text-muted-foreground">Engagement</p>
                  </div>
                </div>

                <div className="flex mt-4 space-x-2">
                  {influencer.platforms.map((platform) => (
                    <div key={platform} className="p-2 rounded-full bg-muted">
                      {getPlatformIcon(platform)}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col p-6 pt-0 gap-4">
              <div className="text-center w-full">
                <p className="text-sm text-muted-foreground">Starting at</p>
                <p className="text-xl font-bold">{influencer.price}</p>
              </div>
              <Link href={`/influencers/${influencer.id}`} className="w-full">
                <Button className="w-full">View Profile</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button variant="outline" size="icon" onClick={prevPage}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="flex items-center px-2">
            {currentPage + 1} / {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={nextPage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

