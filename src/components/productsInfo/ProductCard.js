export default function ProductCard({ title, price, stock, imageUrl }) {
  return (
    <>
      <div className="group box-border overflow-hidden flex rounded-md pe-0 flex-col items-center bg-white relative">
        <div className="w-full flex justify-between">
          <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
            Stock :
            <span className="text-orange-700 pl-1 font-bold">{stock}</span>
          </span>
        </div>

        <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
          <div
            className="relative w-full h-full p-2 flex items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            <img
              alt={title}
              src={imageUrl}
              className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 w-25 "
              sizes="100%"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2n text-wrap">{title}</span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <div className=" product-price font-bold">
              <span className="inline-block text-lg font-semibold text-gray-800">
                ${price}
              </span>
            </div>

            <button
              aria-label="cart"
              className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
            >
              <span className="text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
