import { Carousel } from 'flowbite-react'
import React from 'react'
import img1 from '../../../../../public/images/bannerimg1.webp'
import img2 from '../../../../../public/images/bannerimg2.webp'
import img3 from '../../../../../public/images/bannerimg3.webp'
import img4 from '../../../../../public/images/bannerimg4.webp'
import Image from 'next/image'

const BannerCarousel = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bannercarouselwrapper ">
            <Carousel leftControl=" " rightControl=" ">
                {[img1, img2, img3, img4].map((img, index) => (
                    <div key={index} className="relative w-full h-full">
                        <Image
                            src={img}
                            alt={`Banner image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}

            </Carousel>
        </div>
    )
}

export default BannerCarousel