import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallary = () => {
  const data = [
    {
      link: "add link here",
      image: "/rb.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/q.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image:
        "/w.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image:
        "/e.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image:
        "/r.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image:
        "/t.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
  ];
  return (
    <>
      <div className="">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl">Journey</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x) => {
              return (
                <>
                  <article
                    key={x.comment}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    {/* <Link
                      href={x.link}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
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
                        Visite Website
                      </Link> */}
                    </div>
                    {/* <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="#"
                        className="block relative group-hover:text-purple-500 transition-colors duration-200"
                      >
                        <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                      </Link>
                    </h3> */}
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

export default Gallary;
