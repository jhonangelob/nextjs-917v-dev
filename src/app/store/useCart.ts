import { create } from 'zustand'
import { CartStore } from '../Models/CartMode'
import { persist } from 'zustand/middleware'

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeToCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        })),
      emptyCart: () => set({ cart: [] }),
    }),
    {
      name: 'shopping-cart',
      getStorage: () => localStorage,
    }
  )
)
