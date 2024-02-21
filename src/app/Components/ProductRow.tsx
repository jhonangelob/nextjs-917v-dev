'use client'

import { IProduct } from '@/app/Models/ProductModel'
import { BiInfoCircle } from 'react-icons/bi'
import { deleteProduct } from '@/app/Helpers/Products'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import CartButton from './CartButton'
import { useCartStore } from '../store/useCart'

interface ProductRowProps {
  product: IProduct
  removeOptimisticProduct: (productId: number) => void
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  removeOptimisticProduct,
}) => {
  const router = useRouter()
  const handleViewProduct = (product_id: number) => {
    router.push(`/products/${product_id}`)
  }
  const { cart, addToCart } = useCartStore()

  const handleDeleteProduct = async (product_id: number) => {
    removeOptimisticProduct(product_id)

    // Directus: Product Delete
    await deleteProduct(product_id)
  }

  const handleAddtoCart = (product: IProduct) => {
    addToCart(product)
  }

  const itemIsAlreadyInCart = (product: IProduct) => {
    const { id } = product
    return cart.some((item) => item.id === id)
  }

  return (
    <tr key={product.id}>
      <td></td>
      <td>
        <div className='avatar'>
          <div className='w-24 h-24 rounded-xl'>
            <Image
              src={product.image}
              alt={product.image}
              width={240}
              height={240}
              quality={100}
            />
          </div>
        </div>
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <div className='flex space-x-2'>
          <button
            className='btn btn-outline btn-info'
            onClick={() => handleViewProduct(product.id)}
          >
            <BiInfoCircle size='2rem' />
          </button>
          <CartButton
            onClick={() => handleAddtoCart(product)}
            disabled={itemIsAlreadyInCart(product)}
          />
        </div>
      </td>
    </tr>
  )
}

export default ProductRow
