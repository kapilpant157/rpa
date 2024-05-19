import React from "react";
import Image from "next/image";
import Link from "next/link";

const fdi = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col  justify-center items-center">
        <p className="text-sky-600 object-cover object-center">Foreign</p>
        <Image
          className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/invest.jpg"
          width={720}
          height={600}
        ></Image>
        <div className="w-full md:w-2/3 flex flex-col mb-16 text-justify">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Foreign Direct Investment (FDI)
          </h1>
          <h3 className="title-font sm:text-2xl text-2xl mb-4 font-small text-gray-900">
            Applicable Acts:
          </h3>
          <p className="mb-8 leading-relaxed">
            Foreign Investment and Technology Transfer Act (FITTA)
          </p>
          <p className="mb-8 leading-relaxed">
            Industrial Enterprise Act (IEA){" "}
          </p>
          <p className="mb-8 leading-relaxed">
            No Foreign person can investment in Nepal without prior approval of
            the Department of Industry in Nepal. Any one desirous of making
            Foreign Investment or Transfer of Technology should file an
            application to the Department. The minimum amount for FDI is NPR
            Five Million for the project.
          </p>
          <h2>A. Forms of Investment:</h2>

          <ul className="list-disc">
            <li>
              Establish a new firm, either with 100% foreign equity or as a
              joint venture (JV) with Nepalese/foreign investor(s)
            </li>
            <li>Equity investment (of existing company)</li>
            <li>Debt investment</li>
            <li>Technology transfer</li>
          </ul>

          <h2>
            B. Required Documents - (Foreign equity investment in a new industry
            (100%) subsidiary or JVC):
          </h2>
          <ul className="list-disc">
            <li>Project Report</li>
            <li>JV Agreement</li>
            <li>
              Citizenship Certificate of Local Party or Certificate of
              Incorporation and MOA/AOA (in case local party is a company)
            </li>
            <li>
              Copy of Passport of Foreign party or Certificate of Incorporation
              and MOA/AOA (in case foreign investor is a company)
            </li>
            <li>Bio-data / Company profile of the foreign investor</li>
            <li>
              Financial Credibility Certificate (CFC) of the foreign investor
              provided by a home country bank or domiciled country bank
            </li>
          </ul>
          <h2>
            C. Required Documents - (For investment in an existing industry by
            share transfer)
          </h2>
          <ul className="list-disc">
            <li>Project Report</li>
            <li>Share Transfer Agreement</li>
            <li>
              Copy of minutes of the Board Meeting, Certificate of Incorporation
              and company profile of the foreign investor in the participant is
              a company.
            </li>
            <li>
              Financial Credibility Certificate (CFC) of the foreign investor
              provided by a home country bank or domiciled country bank
            </li>
            <li>Bio-data / Company profile of the foreign investor</li>
            <h2 className="underline">
              Required Documents from Nepalese Company:
            </h2>
            <li>
              {" "}
              a copy of minutes of the Board Meeting of the Nepalese Company
              regarding inclusion of FDI in to the Company.
            </li>
            <li>
              Request letter from the share transferor (not required in case of
              issue of new shares)
            </li>
            <li>
              Request letter from the share transferee (not required in case of
              issue of new shares)
            </li>
            <li>Recent Auditor&apos;s Report</li>
            <li>Tax Clearance Certificate</li>
            <li>
              Authority letter from the respective companies concerned to sign
              on behalf of the companies.
            </li>
          </ul>

          <h2>
            D. Required Documents - (For establishing a place of business):
          </h2>
          <ul className="list-disc">
            <li>
              The foreign company go for establishment of a permanent
              establishment (PE) or a Liaison Office in Nepal after approval of
              the concerned authority in Nepal.
            </li>
            <li>
              A Nepali Citizen shall be appointed as a contact person for this
              purpose.{" "}
            </li>
            <li>
              The PEs cannot undertake any income-generating activities in
              Nepal.
            </li>
            <li>
              Liaison Office can oversee a company&apos;s existing business interest,
              spread awareness of a company&apos;s products, and explore
              opportunities for further growth and development.
            </li>
            <h2 className="underline">
              Initial Requirements:
            </h2>
           <li> Copies of MOA/AOA and Certificate of Establishment (along with Nepali Translation)</li>
           <li>Details of Parent Company</li>
           <li>Details of Directors, Managers, Company Secretary</li>
           <li>Details of contact person in Nepal and Business place in Nepal.</li>
           <h2 className="underline">
              Other Requirements:
            </h2>
            <li>The company has to file annual returns (Accounts/ Audit) with Company Registrar Office in Nepal</li>
          </ul>

          
        </div>
      </div>
    </section>
  );
};

export default fdi;
