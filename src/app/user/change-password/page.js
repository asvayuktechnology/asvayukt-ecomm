import React from 'react'

const page = () => {
  return (
    <>
     <h2 className="text-xl  font-semibold mb-5">Change Password</h2>
  <form>
    <div className="md:grid-cols-6 md:gap-6">
      <div className="md:mt-0 md:col-span-2">
        <div className="lg:mt-6 bg-white">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6">
              <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  readOnly=""
                  placeholder="Email Address"
                  autoComplete="username"
                  className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 bg-gray-100 cursor-not-allowed text-gray-500"
                  defaultValue=""
                />
              </div>
              <span className="text-red-400 text-sm mt-2" />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  autoComplete="new-password"
                  className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 "
                  defaultValue=""
                />
              </div>
              <span className="text-red-400 text-sm mt-2" />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  autoComplete="new-password"
                  className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 "
                  defaultValue=""
                />
              </div>
              <span className="text-red-400 text-sm mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5 text-right">
      <button
        type="submit"
        className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
      >
        Change Password
      </button>
    </div>
  </form>
    </>
  )
}

export default page