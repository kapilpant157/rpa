import React from 'react'
import Image from 'next/image'

const Works = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Works</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here is the list of our few achievements.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/healthrightinternational.png"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="text-sm title-font font-medium text-indigo-500 mb-1">Staturory Audit</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Health Right International</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/betan.jpeg"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Internal Audit</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Betan Karnali Sanchayakarta Hydropower Co. Ltd.</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/healthrightinternational.png"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/healthrightinternational.png"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/healthrightinternational.png"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <Image
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src="/healthrightinternational.png"
                                width={600}
                                height={360}
                                alt="Health Right International"
                            />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works