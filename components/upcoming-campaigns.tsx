import { Calendar, Clock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Mock data for upcoming campaigns
const campaigns = [
  {
    id: 1,
    name: "Summer Collection Launch",
    influencer: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    startDate: "Jun 15, 2025",
    endDate: "Jun 30, 2025",
    daysLeft: 12,
    progress: 65,
    platform: "Instagram",
  },
  {
    id: 2,
    name: "Product Review Series",
    influencer: {
      name: "Marcus Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    startDate: "Jun 20, 2025",
    endDate: "Jul 10, 2025",
    daysLeft: 17,
    progress: 40,
    platform: "YouTube",
  },
  {
    id: 3,
    name: "Brand Awareness Campaign",
    influencer: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    startDate: "Jul 1, 2025",
    endDate: "Jul 15, 2025",
    daysLeft: 28,
    progress: 20,
    platform: "Multiple",
  },
]

export function UpcomingCampaigns() {
  return (
    <div className="space-y-4">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="border-b pb-4 last:border-0 last:pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={campaign.influencer.avatar} alt={campaign.influencer.name} />
                <AvatarFallback>{campaign.influencer.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{campaign.name}</h4>
                <p className="text-sm text-muted-foreground">with {campaign.influencer.name}</p>
              </div>
            </div>
            <Badge variant="outline">{campaign.platform}</Badge>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>
                {campaign.startDate} - {campaign.endDate}
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{campaign.daysLeft} days left</span>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{campaign.progress}%</span>
            </div>
            <Progress value={campaign.progress} className="h-2" />
          </div>
        </div>
      ))}

      <div className="pt-2">
        <Button variant="outline" className="w-full">
          View All Campaigns
        </Button>
      </div>
    </div>
  )
}

