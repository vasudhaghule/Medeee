interface FeatureCardProps {
    icon: string
    title: string
    description: string
  }
  
  export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <div className="space-y-2">
        <div className="text-2xl">{icon}</div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    )
  }
  
  