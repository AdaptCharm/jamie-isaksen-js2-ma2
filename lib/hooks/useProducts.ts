import useSWR from 'swr'
import fetcher from '../fetcher'
import { Product } from '@data/types'

export const useProducts = (): {
  products?: Product[]
  isLoading: boolean
  isError: any
} => {
  const { data, error } = useSWR<Product[]>('/api/product', fetcher)

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  }
}
