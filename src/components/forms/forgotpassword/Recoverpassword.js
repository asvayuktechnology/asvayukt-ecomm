import EmailInput from '@/components/ui/common/inputs/EmailInput'
import React from 'react'

const Recoverpassword = () => {
    return (
        <>
            <form className="flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-5">


                    <div className="form-group">
                        <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                            </div>
                            <EmailInput custClasses="pl-10" />
                        </div>
                        <span className="text-red-400 text-sm mt-2" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex ms-auto">
                            <a
                                className="text-black text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                                href="/login"
                            >
                                login?
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
                    >
                        Recover Password
                    </button>
                </div>
            </form>
        </>
    )
}

export default Recoverpassword