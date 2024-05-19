import React from "react";
import Image from "next/image";

const Whatsappicon = () => {
  return (
    <>
      <div className="fixed bottom-20 right-3">
        <a
          href="https://wa.me/6398141941?text=Hello, I got your contact through website."
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center "
            src="/whatsapp.png"
            width={720}
            height={600}
            alt="whatsapp icon"
          />
        </a>
      </div>
    </>
  );
};

export default Whatsappicon;
