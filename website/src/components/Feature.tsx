interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function Feature(props: FeatureProps) {
  return (
    <div>
      <div className="flex justify-center">
        <span className="bg-main/5 inline-flex h-9 w-9 items-center justify-center rounded-lg">
          {props.icon}
        </span>
      </div>

      <h2 className="mt-4 text-center text-lg">{props.title}</h2>

      <p className="text-main/50 mt-4 text-center text-sm">{props.description}</p>
    </div>
  )
}
