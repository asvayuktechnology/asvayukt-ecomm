import React from 'react'

const page = () => {
  return (
   <div className="max-w-screen-2xl">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h2 className="text-xl  font-semibold mb-5">
          Update Profile
        </h2>
      </div>
    </div>
  </div>
  <form>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="bg-white space-y-6">
        <div>
          <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
            Photo
          </label>
          <div className="mt-1 flex items-center">
            <div className="w-full text-center">
              <div
                className="px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
                role="presentation"
                tabIndex={0}
              >
                <input
                  accept="image/jpeg,.jpeg,image/png,.png,image/webp,.webp"
                  type="file"
                  tabIndex={-1}
                  style={{
                    border: 0,
                    clip: "rect(0px, 0px, 0px, 0px)",
                    clipPath: "inset(50%)",
                    height: 1,
                    margin: "0px -1px -1px 0px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: 1,
                    whiteSpace: "nowrap"
                  }}
                />
                <span className="mx-auto flex justify-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-3xl text-emerald-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1={12} y1={12} x2={12} y2={21} />
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                    <polyline points="16 16 12 12 8 16" />
                  </svg>
                </span>
                <p className="text-sm mt-2">Drag your image here</p>
                <em className="text-xs text-gray-400">
                  (Only *.jpeg and *.png images will be accepted)
                </em>
              </div>
              <aside className="flex flex-row flex-wrap mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid-cols-6 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="lg:mt-6 mt-4 bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 "
                      defaultValue=""
                    />
                  </div>
                  <span className="text-red-400 text-sm mt-2" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 "
                      defaultValue=""
                    />
                  </div>
                  <span className="text-red-400 text-sm mt-2" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                    Phone/Mobile
                  </label>
                  <div className="relative">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone/Mobile"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 "
                      defaultValue=""
                    />
                  </div>
                  <span className="text-red-400 text-sm mt-2" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      readOnly=""
                      placeholder="Email Address"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 bg-gray-100 cursor-not-allowed text-gray-500"
                      defaultValue="justin@gmail.com"
                    />
                  </div>
                  <span className="text-red-400 text-sm mt-2" />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                <button
                  type="submit"
                  className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

  )
}

export default page