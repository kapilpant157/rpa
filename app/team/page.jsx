import React from 'react'
import Image from 'next/image'
import { LuFacebook } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Team = () => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">&quot; Unifying strengths, multiplying potential. Together, we navigate challenges, forge pathways, and conquer horizons. Each member, a pillar of support; together, an unbreakable fortress. In unity, we innovate, inspire, and elevate, crafting success from diversity. Together, we redefine possibilities, for we are not just a team, but a force of synergy.&quot;</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image
                                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                src="/Ravindra.jpg"
                                width={200}
                                height={200}
                                alt="Picture of the author"
                            />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Ravindra Pandey</h2>
                                <h3 class="text-gray-500 mb-3">Proprietor </h3>
                                <p class="mb-4">Taxation, Compliance, Auditing, Non-profit Organization, IT & educational Sector.</p>
                                <span class="inline-flex">
                                    <a class="text-gray-500" href='#'>
                                        
                                        <LuFacebook />
                                    </a>
                                    <a class="ml-2 text-gray-500" href='#'>
                                    <FaXTwitter/>
                                    </a>
                                    <a class="ml-2 text-gray-500" href='#'>
                                       <CiLinkedin/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image
                                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                src="/Birendra.jpg"
                                width={200}
                                height={200}
                                alt="Birendra Joshi"
                            />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Birendra Prasad Joshi</h2>
                                <h3 class="text-gray-500 mb-3">Manager – Taxation</h3>
                                <p class="mb-4">Taxation, Tax Accounting, Construction Accounting, management advisory.</p>
                                <span class="inline-flex">

                                    <a class="text-gray-500">
                                    <LuFacebook/>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                    <FaXTwitter/>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <CiLinkedin/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}



export default Team