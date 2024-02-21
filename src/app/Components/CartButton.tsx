import Link from 'next/link'
import React from 'react'
import { BiCartAdd } from 'react-icons/bi'

type CartButtonProps = {
  onClick: () => void
  label?: string
  disabled?: boolean
}

const CartButton = ({ onClick, label, disabled }: CartButtonProps) => {
  return (
    <button
      className='btn btn-outline btn-info flex flex-row gap-2 items-center'
      onClick={onClick}
      disabled={disabled}
    >
      <BiCartAdd size='2rem' />
      <p>{label}</p>
    </button>
  )
}

export default CartButton
