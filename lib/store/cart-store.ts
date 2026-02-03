import { create } from 'zustand'
import { CartStore, Product, CartItem } from '@/types'

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,

  addToCart: (product: Product) => {
    const { cartItems } = get()
    const existingItem = cartItems.find(item => item.id === product.id)

    if (existingItem) {
      set({
        cartItems: cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalQuantity: get().totalQuantity + 1,
        totalPrice: get().totalPrice + product.price
      })
    } else {
      const newItem: CartItem = { ...product, quantity: 1 }
      set({
        cartItems: [...cartItems, newItem],
        totalQuantity: get().totalQuantity + 1,
        totalPrice: get().totalPrice + product.price
      })
    }
  },

  removeFromCart: (id: string | number) => {
    const { cartItems } = get()
    const existingItem = cartItems.find(item => item.id === id)

    if (existingItem) {
      set({
        cartItems: cartItems.filter(item => item.id !== id),
        totalQuantity: get().totalQuantity - existingItem.quantity,
        totalPrice: get().totalPrice - (existingItem.price * existingItem.quantity)
      })
    }
  },

  increaseQuantity: (id: string | number) => {
    const { cartItems } = get()
    const existingItem = cartItems.find(item => item.id === id)

    if (existingItem) {
      set({
        cartItems: cartItems.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalQuantity: get().totalQuantity + 1,
        totalPrice: get().totalPrice + existingItem.price
      })
    }
  },

  decreaseQuantity: (id: string | number) => {
    const { cartItems } = get()
    const existingItem = cartItems.find(item => item.id === id)

    if (existingItem) {
      if (existingItem.quantity > 1) {
        set({
          cartItems: cartItems.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalQuantity: get().totalQuantity - 1,
          totalPrice: get().totalPrice - existingItem.price
        })
      } else {
        get().removeFromCart(id)
      }
    }
  },

  clearCart: () => {
    set({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0
    })
  }
}))