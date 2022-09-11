import { ProductModel } from "../../interfaces/product.interface";
import { SortEnum } from "./Sort.props";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Raiting }

export interface SortReducerState {
  sort: SortEnum,
  products: ProductModel[]
}
