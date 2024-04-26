import React from 'react'
import Image from 'next/image'

const Blogs = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className='container'>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Blogs</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> This can be sotmething you could fing helpful. Browse by category.
                    </p>
                </div>
                <div className="flex flex-wrap -m-12">
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">PAN</span>
                        <Image
                                        className="w-100 h-100 flex-shrink-0 object-cover object-center "
                                        src="/pan.png"
                                        width={720}
                                        height={600}
                                        alt="PAN sample"
                                    />
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 ">Procedure of PAN registration</h2>
                        <p className="leading-relaxed mb-8">Permanent Account Number (PAN) is a unique number allocated to taxpayer by IRD. Any person doing Employment, Business or Profession, Trade in Nepal is required to obtain PAN from IRD. Any person desirous to obtain PAN can voluntarily apply for PAN.</p>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-indigo-500 inline-flex items-center" href='#'>Read More...</a>
                           
                        <a className="ml-auto flex flex-wrap items-center text-base justify-center" href='#'>
                        <Image
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center "
                                        src="/abcd.jpg"
                                        width={720}
                                        height={600}
                                        alt="Picture of the author"
                                    />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Kapil Dev Pant</span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">DEVELOPER</span>
                            </span>
                        </a>
                        </div>
                    </div>

                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Foreign</span>
                        <Image
                                        className="lex-shrink-0 object-cover object-center "
                                        src="/voffice.jpg"
                                        width={720}
                                        height={600}
                                        alt="PAN sample"
                                    />
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 ">Foreign Direct Investment (FDI)</h2>
                        <p className="leading-relaxed mb-8">No Foreign person can investment in Nepal without prior approval of the Department of Industry in Nepal. Any one desirous of making Foreign Investment or Transfer of Technology should file an application to the Department. The minimum amount for FDI is NPR Five Million for the project.</p>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-indigo-500 inline-flex items-center" href='#'>Read More...</a>
                           
                        <a className="ml-auto flex flex-wrap items-center text-base justify-center" href='#'>
                        <Image
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center "
                                        src="/dcba.jpg"
                                        width={720}
                                        height={600}
                                        alt="Picture of the author"
                                    />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Ravindra Pandey</span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">Propriter</span>
                            </span>
                        </a>
                        </div>
                    </div>
                    



                </div>

                <div className="flex flex-col text-center w-full mb-10">
                    <a className="sm:text-2xl text-2 mt-5 font-medium title-font  text-green-900" href='#'>More Blogs..</a>
                    
                </div>
            </div>
        </section>
    )
}

export default Blogs