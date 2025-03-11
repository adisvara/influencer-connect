"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function InfluencerFilters() {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [followersRange, setFollowersRange] = useState([0, 100])

  const categories = [
    "Fashion",
    "Technology",
    "Food",
    "Fitness",
    "Travel",
    "Photography",
    "Lifestyle",
    "Music",
    "Beauty",
    "Gaming",
    "Business",
    "Education",
  ]

  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter", "Facebook", "LinkedIn", "Pinterest", "Twitch"]

  const locations = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "India",
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[0, 5000]} max={10000} step={100} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex items-center justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}+</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Followers (in thousands)</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[0, 100]}
            max={1000}
            step={10}
            value={followersRange}
            onValueChange={setFollowersRange}
          />
          <div className="flex items-center justify-between">
            <span className="text-sm">{followersRange[0]}K</span>
            <span className="text-sm">{followersRange[1] === 1000 ? "1M+" : `${followersRange[1]}K`}</span>
          </div>
        </div>
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium">Categories</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={`category-${category}`} />
              <label
                htmlFor={`category-${category}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium">Platforms</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {platforms.map((platform) => (
            <div key={platform} className="flex items-center space-x-2">
              <Checkbox id={`platform-${platform}`} />
              <label
                htmlFor={`platform-${platform}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {platform}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium">Location</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox id={`location-${location}`} />
              <label
                htmlFor={`location-${location}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {location}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium">Additional Filters</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="verified" />
            <label
              htmlFor="verified"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Verified Only
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="available" />
            <label
              htmlFor="available"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Available Now
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="highEngagement" />
            <label
              htmlFor="highEngagement"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              High Engagement (>3%)
            </label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="pt-4 space-y-2">
        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full">
          Reset
        </Button>
      </div>
    </div>
  )
}

