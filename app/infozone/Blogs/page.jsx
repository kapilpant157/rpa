import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = () => {
  const data = [
    {
      id: 1,
      category: "PAN",
      date: "March 2",
      image: "/pan.png",
      heading: "Procedure of PAN registration",
      paragraph:
        "Permanent Account Number (PAN) is a unique number allocated to taxpayer by IRD. Any person doing Employment, Business or Profession, Trade in Nepal is required to obtain PAN from IRD. Any person desirous to obtain PAN can voluntarily apply for PAN.",
      link: "/infozone/Blogs/pan",
      authorimage: "/Ravindra.jpg",
      authorname: "Ravindra Pandey",
      authortitle: "Propriter",
    },
    {
      id: 2,
      category: "PAN",
      date: "April 12",
      image: "/abcd.jpg",
      heading: "Foreign Direct Investment (FDI)",
      paragraph: ` No Foreign person can investment in Nepal without prior approval of the Department of Industry in Nepal. Any one desirous of making Foreign Investment or Transfer of Technology should file an application to the Department. The minimum amount for FDI is NPR
      Five Million for the project.`,
      link: "/infozone/Blogs/fdi",
      authorimage: "/Ravindra.jpg",
      authorname: "Ravindra Pandey",
      authortitle: "Propriter",
    },
    {
      id: 3,
      category: "VAT",
      date: "April 12",
      image: "/vat.png",
      heading: "Reverse Charge in VAT - Section 8(3)",
      paragraph: ` This section applies to the construction of Building Apartments,
      Shopping Complex including Road, Bridge, Electricity Production
      Center, Hall which are not movable for value more than 50 lakhs.`,
      link: "/infozone/Blogs/reversevat",
      authorimage: "/Ravindra.jpg",
      authorname: "Ravindra Pandey",
      authortitle: "Propriter",
    },
    {
      id: 4,
      category: "VAT",
      date: "April 12",
      image: "/revvat.png",
      heading: "Reverse VAT under VAT Act, 2052",
      paragraph: ` Generally VAT has to be collected by the person who is registered
      as per VAT Act, 2052 and engaged in selling of Goods or providing
      services in Nepal.`,
      link: "/infozone/Blogs/reversevat",
      authorimage: "/Ravindra.jpg",
      authorname: "Ravindra Pandey",
      authortitle: "Propriter",
    },
  ];
  return (
    <>
      <div className="">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl">Blogs</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
            {data.map((x) => {
              return (
                <>
                  <article
                    key={x.id}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="border-red-800 border-solid flex items-center flex-wrap pb-4 mt-auto w-full">
                      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                        {x.category}
                      </span>
                      <div className="ml-auto flex flex-wrap items-center text-base justify-center">
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest flex-grow flex flex-col pl-4">
                          {x.date}
                        </span>
                      </div>
                    </div>

                    {/* <Image
                        className="w-100 h-100 flex-shrink-0 object-cover object-center "
                        src={x.image}
                        width={720}
                        height={600}
                        alt="PAN sample"
                      /> */}
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      {/* <Link
                        className="flex justify-center items-center bg-purple-500 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </Link> */}
                    </div>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 ">
                      {x.heading}
                    </h2>
                    <p className="leading-relaxed mb-8">{x.paragraph}</p>
                    <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <Link
                        className="text-indigo-500 inline-flex items-center"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Continue Reading
                      </Link>
                      {/* author part */}
                      <div className="ml-auto flex flex-wrap items-center text-base justify-center">
                        <Image
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center "
                          src={x.authorimage}
                          width={720}
                          height={600}
                          alt="Picture of the author"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900">
                            {x.authorname}
                          </span>
                          <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                            {x.authortitle}
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default blogs;
