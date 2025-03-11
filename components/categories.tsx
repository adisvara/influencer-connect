import Link from "next/link"
import { Camera, Coffee, Dumbbell, Globe, Laptop, Music, ShoppingBag, Utensils } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Fashion",
    icon: ShoppingBag,
    count: 450,
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300",
  },
  {
    name: "Technology",
    icon: Laptop,
    count: 320,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  },
  {
    name: "Food",
    icon: Utensils,
    count: 380,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
  },
  {
    name: "Fitness",
    icon: Dumbbell,
    count: 290,
    color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  },
  {
    name: "Travel",
    icon: Globe,
    count: 310,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
  },
  {
    name: "Photography",
    icon: Camera,
    count: 270,
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300",
  },
  {
    name: "Lifestyle",
    icon: Coffee,
    count: 420,
    color: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300",
  },
  {
    name: "Music",
    icon: Music,
    count: 240,
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300",
  },
]

export function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {categories.map((category) => (
        <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
              <div className={`p-3 rounded-full ${category.color} mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{category.count} influencers</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

