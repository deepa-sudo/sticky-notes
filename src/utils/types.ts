export type Note = {
  id: string;
  content?: string;
  title: string;
  color: "yellow" | "green" | "blue" | "pink";
  paperStyle: "style1" | "style2" | "style3" | "style4";
  x?: number;
  y?: number;
  isActive?: boolean;
};
