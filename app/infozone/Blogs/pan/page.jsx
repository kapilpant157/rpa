import React from "react";
import Image from "next/image";
import Link from "next/link";

const pan = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col  justify-center items-center">
        <p className="text-sky-600 object-cover object-center">PAN</p>
        <Image
          className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/pan.png"
          width={720}
          height={600}
        ></Image>
        <div className="w-full md:w-2/3 flex flex-col mb-16 text-justify">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Procedure of PAN registration
          </h1>
          <p className="mb-8 leading-relaxed">
            PAN is a unique number allocated to taxpayer by IRD. Any person
            doing Employment, Business or Profession, Trade in Nepal is required
            to obtain PAN from IRD. Any person desirous to obtain PAN can
            voluntarily apply for PAN.
          </p>
          <h2>
            1. For Natural Person, Following should obtain PAN compulsorily:
          </h2>

          <ul className="list-disc">
            <li>
              Who has provided house in rent to Government or Semi-Government
              Offices.
            </li>
            <li>
              Auditor, Doctor, Engineer, Lawyer, Consultant, Insurer Agent,
              Artist and Commission Agent.
            </li>
            <li>
              Person having turnover of sale/purchase more than NPR 1 million.
            </li>
            <li>
              Employed person with income more than NPR 3.5 Lakh (4 Lakh in case
              of couple/Married).
            </li>
            <li>
              Person who provides vehicles in rent. Person who has VAT liability
              with respect of registered or non-registered business.
            </li>
          </ul>
          <h2>
            {" "}
            2. For Entity: Any entity registered as per law in Nepal such as
            Firm, Company, NGO, Trust, Local entity and organizations should
            obtain PAN.
          </h2>

          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            How to apply for PAN
          </h2>

          <h3>for online application</h3>
          <ul className="list-disc">
            <li>go to <Link className="text-lime-400" href="https://ird.gov.np" target="_blank" >ird.gov.np</Link></li>
            <li>click on e-PAN</li>
            <li>get Submission Number</li>
            <li>fill the data such as username, password</li>
            <li>click on PAN registration</li>
            <li>Fill all the details</li>
            <li>go to Help for any difficulty in filling the form</li>
          </ul>

          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            Documents Required
          </h2>
          <h3 className="title-font sm:text-2xl text-2xl mb-4 font-small text-gray-900">For Individual</h3>
          <ol className="list-decimal">
            <li>
              <h3 className=" mt-2 underline underline-offset-2">In case of personal</h3>
              <ul className="list-disc">
                <li>Application form</li>
                <li>2 photos</li>
                <li>
                  Citizenship Certificate copy (Passport/ Identity provided by
                  their embassy in case of Foreigner)
                </li>
              </ul>
            </li>

            <li>
              <h3 className=" mt-2 underline underline-offset-2">In case of Business Pan:</h3>
              <ul className="list-disc">
                <li>Application form</li>
                <li>2 photos</li>
                <li>Certificate of Business registration</li>
                <li>
                  Rent agreement and 3 months TDS deposit receipt on Rent (if
                  rented property) or Proof of owned property.
                </li>
                <li>
                  Citizenship Certificate copy (Passport/ Identity provided by
                  their embassy in case of Foreigner)
                </li>
              </ul>
            </li>
          </ol>

          <h3 className="title-font sm:text-2xl text-2xl my-2 font-small text-gray-900">For For Entity</h3>
          <ul className="list-disc">
            <li>Application Form</li>
            <li>Registration certificate</li>
            <li>MoA, AoA, Agreement</li>
            <li>Rent Agreement (3 Months TDS should be paid on such rent)</li>
            <li>
              BOD Minute authorizing a person whose photo should be attached to
              the form.
            </li>
            <li>
              Citizenship Certificate copy (Passport/ Identity provided by their
              embassy in case of Foreigner) for every partner.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default pan;
