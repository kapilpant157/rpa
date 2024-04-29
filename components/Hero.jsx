import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">



                <div className="flex justify-center  ">
                    <div className="flex flex-col items-center justify-center">

                        <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                                <div className="text-3xl md:text-7xl font-bold ">R. Pandey & Associates Chartered Accountants
                                </div>
                            </div>
                            <div
                                className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                                <div >
                                    <Image
                                        className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl "
                                        src="/ca.jpeg"
                                        width={300}
                                        height={500}
                                        alt="CA logo"
                                    />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                    <div>
                                        <Image
                                            className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl "
                                            src="/invest.jpg"
                                            width={300}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl "
                                            src="/auditing.jpg"
                                            width={300}
                                            height={500}
                                            alt="Picture of the author"
                                        />                                    </div>
                                </div>
                                <div >
                                    <Image
                                        className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl "
                                        src="/company.jpg"
                                        width={300}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                    <div >
                                        <Image
                                            className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl "
                                            src="/accountin.jpg"
                                            width={720}
                                            height={600}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl "
                                            src="/finance.jpg"
                                            width={720}
                                            height={600}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                    <Image
                                        className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl "
                                        src="/ca.jpeg"
                                        width={720}
                                        height={600}
                                        alt="CA Logo"
                                    />
                                </div>


                            </div>

                        </div>
                    </div>
                </div>









                <div className="text-center lg:w-2/3 w-full">
                    <p className="mt-8 leading-relaxed">R. Pandey & Associates established in Year 2071 B.S. is a professionally managed, is one of the Leading Chartered Accountants Firm in Nepal. It was established with a spirit to serve better the need of companies and other entities that are operating in Nepal.
                        We provide various comprehensive Professional services which include Business and Financial Consultancy, Audit & Assurance services, accounting services, Taxation and Compliance consultancy, Project Feasibility Analysis, Financial Projections, and other related services etc.
                        We are dedicated to excellence in Professional Services, upholding high standards of honesty and Integrity to meet our client’s requirement.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero