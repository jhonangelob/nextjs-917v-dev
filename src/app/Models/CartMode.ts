import { IProduct } from './ProductModel'

export type CartItem = Omit<
  IProduct,
  'date_created' | 'date_updated' | 'status'
>

export type CartItems = Omit<
  IProduct,
  'date_created' | 'date_updated' | 'status'
>[]

export type CartStore = {
  cart: CartItems
  addToCart: (product: CartItem) => void
  removeToCart: (product: CartItem) => void
  emptyCart: () => void
}
