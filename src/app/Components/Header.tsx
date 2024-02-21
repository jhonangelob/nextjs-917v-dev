'use client'

import React from 'react'
import { AddProductButton } from './AddProductButton'
import CartButton from './CartButton'
import { useRouter } from 'next/navigation'

type Props = {}

const Header = ({}: Props) => {
  const router = useRouter()

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
        </div>
        <a className='btn btn-ghost text-xl' href='/'>
          Lazapee
        </a>
      </div>
      <div className='navbar-end flex flex-row gap-2'>
        <CartButton onClick={() => router.push('/cart')} label='View Cart' />
        <AddProductButton name='New Product' />
      </div>
    </div>
  )
}

export default Header
