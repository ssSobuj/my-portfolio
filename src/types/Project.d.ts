export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  links: {
    live?: `${string}.${string}`;
    figma?: string;
    github?: `/${string}` | `${string}/${string}`;
  };
  techs: string[];
  hasImage?: boolean;
  isSmall?: boolean;
  isInProgress?: boolean;
}
