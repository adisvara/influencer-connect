"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"

interface BookingFormProps {
  influencer: {
    id: number
    name: string
    services: {
      title: string
      price: string
    }[]
  }
}

export function BookingForm({ influencer }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [service, setService] = useState<string>("")
  const [budget, setBudget] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the booking request
    alert("Booking request submitted! We'll notify you once the influencer responds.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="service">Select Service</Label>
        <Select value={service} onValueChange={setService} required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {influencer.services.map((service, index) => (
              <SelectItem key={index} value={service.title}>
                {service.title} - {service.price}
              </SelectItem>
            ))}
            <SelectItem value="custom">Custom Request</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Preferred Start Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal" id="date">
              <Calendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Your Budget</Label>
        <div className="relative">
          <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="budget"
            type="text"
            placeholder="Enter your budget"
            className="pl-8"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project Details</Label>
        <Textarea
          id="details"
          placeholder="Describe your campaign goals, requirements, and any specific ideas you have"
          className="min-h-[100px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company/Brand Name</Label>
        <Input id="company" type="text" placeholder="Enter your company name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full">
          Submit Booking Request
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting this request, you agree to our Terms of Service and Privacy Policy. No payment will be processed
        until the influencer accepts your booking.
      </p>
    </form>
  )
}

