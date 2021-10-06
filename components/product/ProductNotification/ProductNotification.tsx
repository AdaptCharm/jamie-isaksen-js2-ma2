import { FC } from 'react'
import { Text } from '@components/ui'

interface Props {
  title: string
  description: string
}

const ProductNotification: FC<Props> = ({ title, description }) => {
  return (
    <>
      <div className='sm:col-span-2'>
        <div className='flex flex-col items-center justify-center gap-y-2 min-h-[400px] p-12 rounded-lg border border-accents-2'>
          <Text className='font-medium'>{title}</Text>
          <Text color='gray'>{description}</Text>
        </div>
      </div>
    </>
  )
}

export default ProductNotification
