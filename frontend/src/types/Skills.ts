export interface SkillInterface {
    src: string;
    name: string;
}
 
export interface SkillsDataInterface {
    [key: string]: SkillInterface[];
}
  
export interface CategoryInterface {
    id: string;
    name: string;
    icon: React.ComponentType<any>;
}
