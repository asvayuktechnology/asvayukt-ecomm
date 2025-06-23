'use client';
import Authlayout from '@/components/layouts/authlayout/Authlayout'
import HomeLayout from '@/components/layouts/homelayout/HomeLayout'
import React from 'react'

const page = () => {
    return (
        <HomeLayout>
            <Authlayout />
        </HomeLayout>
    )
}

export default page