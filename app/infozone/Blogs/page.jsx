import React from 'react'
import Image from 'next/image'
const Blogs = () => {
  return (
    // <div class="flex justify-center">
    //   <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
    //     <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
    //       <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?nature "
    //         alt="" class="" /> </div>
    //       <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
    //       <div class="font-bold text-lg text-black m-2">There is something about nature that just feels so calming.
    //       </div>
    //       <div class="text-gray-500 m-2 text-sm"><a href="">There is something about nature that just feels so
    //         calming. Whether you are out hiking through the wilderness or simply taking a stroll through your
    //         local park, being surrounded by natural beauty can really put you in a good mood. And there is
    //         definitely something therapeutic about spending time in nature, whether it is clearing your mind
    //         after a long day or just enjoying the peace and quiet.</a></div>
          
    //     </div>
    //     <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
    //       <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?beach "
    //         alt="" class="" /> </div>
    //       <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
    //       <div class="font-bold text-lg text-black m-2">This is post title</div>
    //       <div class="text-gray-500 m-2 text-sm"><a href="">When you go to the beach, there are a few things that you
    //         should expect. The first thing is that the beach will be hot. The beaches in California are
    //         typically hot, and the beaches in Florida are typically hot.</a></div>
          
    //     </div>
    //     <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
    //       <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?galaxy "
    //         alt="" class="" /> </div>
    //       <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
    //       <div class="font-bold text-lg text-black m-2">This is post title</div>
    //       <div class="text-gray-500 m-2 text-sm"><a href="">Galaxies are one of the biggest things in the Universe.
    //         They are so big that they can be seen with the naked eye. Galaxies are made up of billions of
    //         stars.</a></div>
          
    //     </div>
    //   </div>
    // </div>
<section className="text-gray-600 body-font overflow-hidden">
            <div className='container'>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Blogs</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> This can be something you could fing helpful. Browse by category.
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
                            className="w-100 h-100 lex-shrink-0 object-cover object-center "
                            src="/invest.jpg"
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
                    
                    <a className="sm:text-2xl text-2 mt-5 font-medium title-font  text-green-900" href='/infozone/Blogs/postid'>Read More Blogs..</a>

                </div>
            </div>
        </section>

  )
}

export default Blogs