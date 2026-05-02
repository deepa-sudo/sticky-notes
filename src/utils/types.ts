export type Note = {
  id: string;
  content: string;
  color: "yellow" | "green" | "blue" | "pink";
  x: number;
  y: number;
  isActive?: boolean;
};
