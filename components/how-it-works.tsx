import { Search, UserCheck, CreditCard, BarChart } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find Influencers",
      description:
        "Search and filter through thousands of influencers based on niche, audience size, location, and more.",
    },
    {
      icon: UserCheck,
      title: "Connect & Collaborate",
      description: "Reach out to influencers, discuss campaign details, and agree on deliverables and pricing.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description:
        "Make secure payments through our platform with funds held in escrow until the campaign is completed.",
    },
    {
      icon: BarChart,
      title: "Track Results",
      description: "Monitor campaign performance with detailed analytics and reporting tools.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
              <step.icon className="h-8 w-8" />
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-muted -translate-y-1/2">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

