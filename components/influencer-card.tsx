import Link from "next/link"
import { Instagram, Twitter, Youtube, Star, CheckCircle } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface InfluencerCardProps {
  influencer: {
    id: number
    name: string
    handle: string
    avatar: string
    category: string
    followers: string
    engagement: string
    rating: number
    platforms: string[]
    price: string
    verified?: boolean
    trending?: boolean
    new?: boolean
    location?: string
    bio?: string
  }
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
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
    <Card className="overflow-hidden h-full">
      <div className="flex flex-col h-full">
        <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-500" />
        <CardContent className="p-6 pt-0 -mt-12 flex-grow">
          <div className="flex flex-col">
            <div className="flex items-start justify-between">
              <Avatar className="h-20 w-20 border-4 border-background">
                <AvatarImage src={influencer.avatar} alt={influencer.name} />
                <AvatarFallback>{influencer.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-end mt-2">
                {influencer.verified && (
                  <Badge variant="outline" className="flex items-center gap-1 mb-2">
                    <CheckCircle className="h-3 w-3 fill-primary text-background" />
                    Verified
                  </Badge>
                )}
                {influencer.trending && (
                  <Badge variant="secondary" className="mb-2">
                    Trending
                  </Badge>
                )}
                {influencer.new && <Badge className="bg-green-500">New</Badge>}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <h3 className="text-lg font-bold">{influencer.name}</h3>
                {influencer.verified && <CheckCircle className="h-4 w-4 ml-1 fill-primary text-background" />}
              </div>
              <p className="text-sm text-muted-foreground">{influencer.handle}</p>
              {influencer.location && <p className="text-sm text-muted-foreground mt-1">{influencer.location}</p>}
              <Badge className="mt-2" variant="secondary">
                {influencer.category}
              </Badge>

              <div className="flex items-center mt-3 space-x-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{influencer.rating}</span>
              </div>

              {influencer.bio && <p className="text-sm mt-3 line-clamp-2">{influencer.bio}</p>}

              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                <div className="text-center p-2 bg-muted rounded-md">
                  <p className="text-sm font-medium">{influencer.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="text-center p-2 bg-muted rounded-md">
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
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6 pt-0">
          <div>
            <p className="text-sm text-muted-foreground">Starting at</p>
            <p className="text-lg font-bold">{influencer.price}</p>
          </div>
          <Link href={`/influencers/${influencer.id}`}>
            <Button>View Profile</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}

