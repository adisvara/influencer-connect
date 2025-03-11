import { Star, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface InfluencerReviewsProps {
  rating: number
  reviewCount: number
}

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "May 15, 2025",
    content:
      "Working with Alex was an absolute pleasure! Their content was delivered on time and exceeded our expectations. The engagement on our campaign was much higher than our previous influencer partnerships.",
    helpful: 24,
    brand: "EcoStyle Fashion",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "April 28, 2025",
    content:
      "Alex created an amazing YouTube video for our product launch. Their authentic approach to presenting our brand really resonated with their audience. We saw a significant increase in website traffic and sales.",
    helpful: 18,
    brand: "TechGadget Pro",
  },
  {
    id: 3,
    name: "Jessica Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "March 12, 2025",
    content:
      "Great collaboration overall. Alex was professional and delivered quality content. The only reason for 4 stars instead of 5 is that we had to request some minor revisions, but they were completed promptly.",
    helpful: 10,
    brand: "Wellness Essentials",
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "February 5, 2025",
    content:
      "This was our second time working with Alex and it was even better than the first! Their understanding of our brand has deepened, and it shows in the content they created. Looking forward to our next project together.",
    helpful: 15,
    brand: "Travel Adventures Co.",
  },
]

// Rating distribution for visualization
const ratingDistribution = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
]

export function InfluencerReviews({ rating, reviewCount }: InfluencerReviewsProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">{rating.toFixed(1)}</h3>
            <div className="flex items-center justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.round(rating) ? "fill-primary text-primary" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Based on {reviewCount} reviews</p>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="flex items-center w-16">
                  <span className="text-sm">{item.stars}</span>
                  <Star className="h-4 w-4 ml-1" />
                </div>
                <Progress value={item.percentage} className="h-2" />
                <span className="text-sm w-10">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-0">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.brand}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="mt-3">{review.content}</p>
                <div className="mt-3 flex items-center">
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline">Load More Reviews</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

