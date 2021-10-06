import { FC } from 'react'
import cn from 'classnames'
import { useSWRConfig } from 'swr'

import { Product } from '@data/types'

import { Text } from '@components/ui'
import { X } from '@components/icons'

interface Props {
  className?: string
  product: Product
  onClick?: (id: string) => void
}

const ProductCard: FC<Props> = ({ className, product, onClick }) => {
  const variant = product.title.split(' ')[0].toLowerCase()

  const { mutate } = useSWRConfig()
  const deleteProduct = async (e: any) => {
    e.preventDefault()

    await fetch(`/api/product/${product.isbn}`, {
      method: 'DELETE',
    })

    mutate('/api/product')
  }

  return (
    <div className='relative group'>
      <div
        className={cn(
          'bg-white dark:bg-black flex p-6 rounded-md transition-box-shadow shadow-1 group-hover:shadow-2 border-l-4',
          className,
          {
            'border-blue-500': variant === 'great',
            'border-green-500': variant === 'ok',
            'border-yellow-500': variant === 'bad',
            'border-red-500': variant === 'terrible',
          }
        )}
      >
        <div className='flex-1 overflow-hidden'>
          <div>
            <Text className='font-medium text-base'>{product?.title}</Text>
          </div>
          <div className='mt-6'>
            <div className='flex items-center justify-between gap-x-3'>
              <Text color='gray' className='font-medium'>
                ISBN:
              </Text>
              <Text color='gray' className='font-medium'>
                {product?.isbn}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <button
          className='inline-block p-1 text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-white dark:hover:bg-black border border-black dark:border-white rounded-full transform -translate-y-2 translate-x-2'
          onClick={deleteProduct}
        >
          <X />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
