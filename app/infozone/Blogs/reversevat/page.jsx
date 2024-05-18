import React from "react";
import Image from "next/image";
import Link from "next/link";

const pan = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col  justify-center items-center">
        <p className="text-sky-600 object-cover object-center">VAT</p>
        <Image
          className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/vat.png"
          width={720}
          height={600}
        ></Image>
        <div className="w-full md:w-2/3 flex flex-col mb-16 text-justify">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Reverse Charge in VAT - Section 8(3)
          </h1>
          <h2 className="underline">Applicable:</h2>
          <p className="mb-8 leading-relaxed">
            This section applies to the construction of Building Apartments,
            Shopping Complex including Road, Bridge, Electricity Production
            Center, Hall which are not movable for value more than 50 lakhs.
          </p>

          <p className="mb-8 leading-relaxed">
            Construction should be for Business Purpose. Business purpose means
            for sale or for use in income generation.
          </p>

          <p className="mb-8 leading-relaxed">
            The construction should be at one place and value more than 50
            lakhs. If Business place, Branches are constructed at different
            places, It shall not be included. But Road, Bridges etc constructed
            at different locations shall be considered as one unit.
          </p>

          <p className="mb-8 leading-relaxed">
            All the works/ purchases shall be done from VAT registered person.
            If not done from VAT registration party, reverse charge shall be
            applicable.
          </p>

          <h3 className="underline">Valuation - more than 50 lakhs</h3>
          <p className="mb-8 leading-relaxed">
            All the cost related to the project (e.g. Electrification,
            Sanitation, painting, interior decoration etc) are to be included
            except Financial Costs.
          </p>
          <h3 className="underline">Calculation of Taxable Value and Tax</h3>
          <p className="mb-8 leading-relaxed">
            Pre-construction costs (e.g. Design, Financial Charges etc.) shall
            not be included for the computation of Taxable Value.
          </p>

          <h3 className="underline">Construction Period</h3>
          <p className="mb-8 leading-relaxed">
            There is no construction period, rather a project is to be
            considered for taxation purpose.
          </p>

          <h3 className="underline">Payment of Value Added Tax</h3>
          <p className="mb-8 leading-relaxed">
            Tax amount is calculated on Taxable Amount and should be paid within
            25 days from the end of the month on which transaction occurred.
          </p>

          <h3 className="underline">Penalty</h3>
          <p className="mb-8 leading-relaxed">
            If the payment is not done as per this section 25% of penalty can be
            imposed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default pan;
