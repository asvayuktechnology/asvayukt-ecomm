'use client';
import { usePathname } from 'next/navigation';
import Loginform from '@/components/forms/loginform/Loginform'
import Registerfrom from '@/components/forms/registerform/page';
import React from 'react'
import Link from "next/link";

const Authlayout = () => {
        const pathname = usePathname();

    // Determine if current route is "login" or "register"
    const currentPage = pathname.includes('/register') ? 'register' : 'login';
    return (
        <>
            <div className="bg-gray-50">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                    <div className="py-4 flex flex-col lg:flex-row w-full">
                        <div className="w-full sm:p-5 lg:p-8">
                            <div className="mx-auto text-left justify-center rounded-md w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2x">
                                <div className="overflow-hidden mx-auto">
                                    <div className="text-center mb-6">
                                        <h2 className="text-3xl font-bold text-black">
                                            {currentPage == 'register' ? "Register" :  "Login"}</h2>
                                        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                                         {currentPage == 'register' ? "Create an account by sign up with provider or email, password" :  " Login with your email and password"}  
                                        </p>
                                    </div>
                                    {currentPage == 'register' ? <Registerfrom/> :  <Loginform/>}
                                    
                                    <div className="my-4 text-center font-medium">
                                        <div className="after:bg-gray-100 before:bg-gray-100 text-black">OR</div>
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <button
                                            className="
    text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center rounded-md focus:outline-none shadow-sm
    px-3 py-4 h-12 w-full mb-6 mr-2
  bg-green-600 text-white hover:bg-green-700"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                version="1.1"
                                                viewBox="0 0 16 16"
                                                className="text-2xl"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M8.159 6.856v2.744h4.537c-0.184 1.178-1.372 3.45-4.537 3.45-2.731 0-4.959-2.262-4.959-5.050s2.228-5.050 4.959-5.050c1.553 0 2.594 0.663 3.188 1.234l2.172-2.091c-1.394-1.306-3.2-2.094-5.359-2.094-4.422 0-8 3.578-8 8s3.578 8 8 8c4.616 0 7.681-3.247 7.681-7.816 0-0.525-0.056-0.925-0.125-1.325l-7.556-0.003z" />
                                            </svg>
                                            <span className="ml-2">Login With Google</span>
                                        </button>


                                    </div>
                                    <div className="text-center text-sm text-gray-900 mt-4">
                                        <div className="text-gray-500 mt-2.5">
                                            Don't have an account?
                                            <Link href="/register"
                                                className="text-gray-800 hover:text-cyan-500 font-bold mx-2"
                                            >
                                                <span className="capitalize">Sign Up</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Authlayout