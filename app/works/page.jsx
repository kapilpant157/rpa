import React from 'react'
import Image from 'next/image'

const Works = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Works</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here is the list of our few achievements.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/healthrightinternational.png"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="text-sm title-font font-medium text-indigo-500 mb-1">Staturory Audit</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Health Right International</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                className="absolute w-full h-full"
                                src="/betan.jpeg"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Internal Audit</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Betan Karnali Sanchayakarta Hydropower Co. Ltd.</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/kitab.jpg"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Internal Audit</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kanun Kitaab Bywastha Samiti</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/nathm.jpg"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Internal Audit</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NATHAM</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/wateraid.jpg"
                                width={600}
                                height={360}
                                alt="water aid logo"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Financial Evaluation </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Water Aid Nepal </h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                // className="absolute inset-0 w-full h-full object-cover object-center"
                                className="absolute w-full h-full"
                                src="/neaeng.jpg"
                                width={600}
                                height={360}
                                alt="NEA Engineering Company Ltd"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Internal Audit</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">NEA Engineering Company Ltd.</h1>
                                <p className="leading-relaxed">ooth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works