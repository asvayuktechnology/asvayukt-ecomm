import AccordionCom from "../ui/common/accordion/AccordionCom";

const Footer = () => {
  const features = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4 text-emerald-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      text: "Free Shipping From €500.00",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4 text-emerald-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      text: "Support 24/7 At Anytime",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4 text-emerald-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      text: "Secure Payment Totally Safe",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4 text-emerald-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
      text: "Latest Offer Upto 20% Off",
    },
  ];
  return (
    <>
      <footer>
        <div className="relative mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="border-r border-gray-200 py-1 flex items-center justify-center bg-white"
              >
                <div className="mr-3">{feature.icon}</div>
                <div>
                  <span className="block font-serif text-sm font-medium leading-5 text-black">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        
            <AccordionCom/>

      </footer>
    </>
  );
};

export default Footer;
