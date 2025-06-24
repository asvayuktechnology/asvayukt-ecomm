import React from 'react'

const PasswordInput = ({custClasses}) => {
    return (
        <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={`text-black py-2 pl-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 ${custClasses}`}
            defaultValue={12345678}
        />
    )
}

export default PasswordInput