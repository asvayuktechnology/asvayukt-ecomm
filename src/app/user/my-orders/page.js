import HomeLayout from '@/components/layouts/homelayout/HomeLayout'
import Orderstable from '@/components/user/Orderstable'
import Pagination from '@/components/ui/common/pagination/Pagination'
import React from 'react'

const page = () => {
  return (
    <>
     <h2 className="text-xl  font-semibold mb-5">My Orders</h2>
     <Orderstable/>
      <Pagination />
    </>
  )
}

export default page