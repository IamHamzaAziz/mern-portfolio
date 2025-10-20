export interface ISkill {
  src: string
  name: string
}

export interface ISkillsData {
  [key: string]: ISkill[]
}

export interface ICategory {
  id: string
  name: string
  icon: React.ComponentType<any>
}
