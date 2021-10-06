import { useProducts } from '@lib/hooks'

import { Layout } from '@components/common'
import { ProductCard, ProductNotification } from '@components/product'
import { Element, Container, Text, Grid, Badge } from '@components/ui'

const Home = () => {
  const { products, isLoading } = useProducts()

  return (
    <>
      <Element type='section'>
        <Container className='min-h-[624px]'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <Text variant='heading'>Products</Text>
            <div className='hidden sm:inline-flex sm:items-center space-x-4'>
              <Text variant='paragraph'>Level:</Text>
              <Badge variant='blue' size='sm'>
                1
              </Badge>
            </div>
          </div>
          <Text variant='subHeading' className='mt-8 mb-20 md:ml-12'>
            List of current products.
          </Text>

          <Grid>
            {products?.length ? (
              <>
                {isLoading ? (
                  <ProductNotification
                    title='Loading'
                    description='Products are currently loading, please wait...'
                  />
                ) : (
                  <>
                    {products.map((product) => (
                      <ProductCard product={product} key={product.title} />
                    ))}
                  </>
                )}
              </>
            ) : (
              <ProductNotification
                title='No products found'
                description='There are no products in the list.'
              />
            )}
          </Grid>
        </Container>
      </Element>
    </>
  )
}

export default Home

Home.Layout = Layout
