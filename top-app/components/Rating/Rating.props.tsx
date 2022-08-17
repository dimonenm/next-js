import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l',
  children: ReactNode
}