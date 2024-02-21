'use client'

import React, { useEffect, useState } from 'react'
import { useCartStore } from '../store/useCart'
import Image from 'next/image'

const Cart = () => {
  const { cart, removeToCart } = useCartStore()
  const [totalPrice, setTotalPrice] = useState(0)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + Number(item.price), 0)
    setTotalPrice(total)
  }, [cart])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className='max-w-4xl mx-auto mt-4'>
      <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-4 text-center border-b border-gray-800 pb-4'>
          <div></div>
          <div>Name</div>
          <div>Amount</div>
          <div>Price</div>
        </div>
        {cart.map((item, index) => (
          <div key={index} className='grid grid-cols-4 text-center h-20'>
            <div className=' flex items-center justify-center'>
              <Image
                src={item.image}
                alt={item.image}
                width={120}
                height={120}
                quality={100}
                className='rounded-md'
              />
            </div>
            <div className='flex items-center justify-start'>{item.name}</div>
            <div className='flex flex-row items-center justify-center space-x-4'>
              <button
                className='btn btn-outline btn-info'
                onClick={() => removeToCart(item)}
              >
                Remove
              </button>
            </div>
            <div className='flex items-center justify-center'>
              {Number(item.price)}
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className='grid grid-cols-4 text-center border-t border-gray-800 pt-4'>
            <div>Total</div>
            <div></div>
            <div></div>
            <div>{totalPrice}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
