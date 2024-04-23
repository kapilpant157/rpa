import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image
                    class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                    src="/dcba.jpg"
                    width={720}
                    height={600}
                    alt="Picture of the author"
                />
                {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">R. Pandey & Associates Chartered Accountants
</h1>
                    <p class="mb-8 leading-relaxed">R. Pandey & Associates established in Year 2071 B.S. is a professionally managed, is one of the Leading Chartered Accountants Firm in Nepal. It was established with a spirit to serve better the need of companies and other entities that are operating in Nepal.
                        We provide various comprehensive Professional services which include Business and Financial Consultancy, Audit & Assurance services, accounting services, Taxation and Compliance consultancy, Project Feasibility Analysis, Financial Projections, and other related services etc.
                        We are dedicated to excellence in Professional Services, upholding high standards of honesty and Integrity to meet our client’s requirement.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero