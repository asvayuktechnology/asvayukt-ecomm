import HomeLayout from '@/components/layouts/homelayout/HomeLayout'
import ProductDetail from '@/components/productsInfo/ProductDetail'
import React from 'react'

const page = () => {
  return (
    <HomeLayout>
      <ProductDetail/>
    </HomeLayout>
  )
}

export default page
