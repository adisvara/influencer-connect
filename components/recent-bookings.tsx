import Link from "next/link"
import { CheckCircle, Clock, XCircle } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for recent bookings
const bookings = [
  {
    id: 1,
    influencer: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@alexjcreates",
    },
    service: "Instagram Post + Story",
    date: "May 15, 2025",
    status: "approved",
    price: "$1,200",
  },
  {
    id: 2,
    influencer: {
      name: "Sophia Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@sophiaeats",
    },
    service: "YouTube Video",
    date: "May 10, 2025",
    status: "pending",
    price: "$2,500",
  },
  {
    id: 3,
    influencer: {
      name: "Marcus Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@marcustech",
    },
    service: "Full Campaign",
    date: "May 5, 2025",
    status: "rejected",
    price: "$3,500",
  },
]

export function RecentBookings() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Approved
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <XCircle className="h-3 w-3" />
            Rejected
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={booking.influencer.avatar} alt={booking.influencer.name} />
              <AvatarFallback>{booking.influencer.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{booking.influencer.name}</h4>
                {getStatusBadge(booking.status)}
              </div>
              <p className="text-sm text-muted-foreground">{booking.service}</p>
              <p className="text-xs text-muted-foreground">
                {booking.date} • {booking.price}
              </p>
            </div>
          </div>
          <Button size="sm" variant="outline" asChild>
            <Link href={`/dashboard/bookings/${booking.id}`}>View</Link>
          </Button>
        </div>
      ))}

      <div className="pt-2">
        <Button variant="outline" className="w-full">
          View All Bookings
        </Button>
      </div>
    </div>
  )
}

