import Link from "next/link";
import React from "react";

const InfoZone = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            INFORMATION ZONE
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <Link href="/infozone/Blogs">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className=" items-center mb-3">
                  <h2 className="text-gray-900 text-lg text-center title-font font-medium">
                    ARTICLES
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-4 md:w-1/3">
            {/* <video autoPlay muted loop width="320" height="240" controls preload="none">
              <source src="/video.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video> */}

            <Link href="/infozone/Videos">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className=" items-center mb-3">
                  <h2 className="text-gray-900 text-lg text-center title-font font-medium">
                    VIDEOS
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-4 md:w-1/3">
            <Link href="/infozone/Gallary">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className=" items-center mb-3">
                  <h2 className="text-gray-900 text-lg text-center title-font font-medium">
                    GALLERY
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoZone;
