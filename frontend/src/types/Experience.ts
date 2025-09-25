export interface TechItemInterface {
    name: string;
    description: string;
}
  
export interface HighlightItemInterface {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ExperienceItemInterface {
    company: string;
    position: string;
    duration: string;
    coreTech: TechItemInterface[];
    highlights: HighlightItemInterface[];
}
