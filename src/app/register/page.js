'use client';
import Registerfrom from '@/components/forms/registerform/page'
import Authlayout from '@/components/layouts/authlayout/Authlayout'
import HomeLayout from '@/components/layouts/homelayout/HomeLayout'
import React from 'react'

const page = () => {


    return (
        <HomeLayout>
            <Authlayout  />
        </HomeLayout>
    )
}

export default page