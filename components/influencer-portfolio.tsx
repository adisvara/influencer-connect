"use client"

import { useState } from "react"
import { Instagram, Youtube } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for portfolio items
const portfolioItems = {
  instagram: [
    {
      id: 1,
      type: "post",
      image: "/placeholder.svg?height=300&width=300",
      likes: "15.2K",
      comments: "423",
      caption: "Exploring the beautiful coastline with @travelcompany's new adventure package! #ad #travelpartner",
      date: "May 10, 2025",
    },
    {
      id: 2,
      type: "post",
      image: "/placeholder.svg?height=300&width=300",
      likes: "18.7K",
      comments: "512",
      caption:
        "Starting my day with @coffeebrand's new organic blend. The perfect morning ritual! #sponsored #morningroutine",
      date: "April 28, 2025",
    },
    {
      id: 3,
      type: "post",
      image: "/placeholder.svg?height=300&width=300",
      likes: "22.1K",
      comments: "678",
      caption: "These new wireless earbuds from @techbrand have been a game-changer for my workouts! #ad #fitnessgear",
      date: "April 15, 2025",
    },
    {
      id: 4,
      type: "post",
      image: "/placeholder.svg?height=300&width=300",
      likes: "19.5K",
      comments: "543",
      caption:
        "Self-care Sunday with @skincarebrand's new hydrating mask. My skin feels amazing! #sponsored #skincareroutine",
      date: "April 2, 2025",
    },
    {
      id: 5,
      type: "post",
      image: "/placeholder.svg?height=300&width=300",
      likes: "16.8K",
      comments: "389",
      caption: "Loving these sustainable fashion pieces from @ecobrand's spring collection! #ad #sustainablefashion",
      date: "March 20, 2025",
    },
    {
      id: 6,
      type: "post",
      image: "/placeholder.svg?height=300&width=300",
      likes: "20.3K",
      comments: "612",
      caption: "Weekend getaway made perfect with @hotelbrand's luxury accommodations. #sponsored #traveldiaries",
      date: "March 8, 2025",
    },
  ],
  youtube: [
    {
      id: 1,
      title: "Honest Review: The Latest Tech Gadgets You Need in 2025",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "245K",
      likes: "18.2K",
      duration: "15:42",
      date: "May 5, 2025",
      sponsored: true,
      brand: "TechGadget Pro",
    },
    {
      id: 2,
      title: "My Morning Routine: Wellness & Productivity Tips",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "189K",
      likes: "15.7K",
      duration: "12:18",
      date: "April 22, 2025",
      sponsored: true,
      brand: "Wellness Essentials",
    },
    {
      id: 3,
      title: "Travel Vlog: Hidden Gems in Coastal California",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "312K",
      likes: "24.5K",
      duration: "22:36",
      date: "April 8, 2025",
      sponsored: true,
      brand: "Travel Adventures Co.",
    },
    {
      id: 4,
      title: "Sustainable Fashion Haul: Eco-Friendly Brands I Love",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "178K",
      likes: "14.3K",
      duration: "18:52",
      date: "March 25, 2025",
      sponsored: true,
      brand: "EcoStyle Fashion",
    },
  ],
}

export function InfluencerPortfolio() {
  const [activeTab, setActiveTab] = useState("instagram")

  return (
    <div>
      <Tabs defaultValue="instagram" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instagram" className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            Instagram
          </TabsTrigger>
          <TabsTrigger value="youtube" className="flex items-center gap-2">
            <Youtube className="h-4 w-4" />
            YouTube
          </TabsTrigger>
        </TabsList>

        <TabsContent value="instagram" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.instagram.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-md">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Instagram post ${item.id}`}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">{item.date}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">❤️ {item.likes}</span>
                      <span className="text-xs">💬 {item.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm line-clamp-4">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="youtube" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.youtube.map((video) => (
              <div key={video.id} className="group overflow-hidden rounded-md border">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                  {video.sponsored && (
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      Sponsored
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-2">{video.title}</h3>
                  <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>{video.views} views</span>
                      <span>❤️ {video.likes}</span>
                    </div>
                    <span>{video.date}</span>
                  </div>
                  {video.sponsored && <p className="text-xs text-muted-foreground mt-2">Sponsored by {video.brand}</p>}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

