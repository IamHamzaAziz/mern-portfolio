export interface ITechItem {
  name: string
  description: string
}

export interface IHighlightItem {
  icon: JSX.Element
  title: string
  description: string
}

export interface IExperienceItem {
  company: string
  position: string
  duration: string
  coreTech: ITechItem[]
  highlights: IHighlightItem[]
}
