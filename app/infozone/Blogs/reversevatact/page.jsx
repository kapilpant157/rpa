import React from "react";
import Image from "next/image";
import Link from "next/link";

const reversevatact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col  justify-center items-center">
        <p className="text-sky-600 object-cover object-center">VAT</p>
        <Image
          className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/revvat.png"
          width={720}
          height={600}
        ></Image>
        <div className="w-full md:w-2/3 flex flex-col mb-16 text-justify">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Reverse VAT under VAT Act, 2052
          </h1>

          <p className="mb-8 leading-relaxed">
            Generally VAT has to be collected by the person who is registered as
            per VAT Act, 2052 and engaged in selling of Goods or providing
            services in Nepal. In the following cases, buyer of the goods or
            services is required to pay VAT to the revenue itselfwhich is known
            as reverse charging. Person need not issue any self-invoice in case
            of reverse charging as many countries requires so:
          </p>

          <h3 className="underline">Service receiver from foreigners:</h3>
          <p className="mb-8 leading-relaxed">
            According to see 8(2) any person (registered or not under VAT Act)
            in Nepal receive services from person outside Nepal, need to pay VAT
            for the services received. If the person is registere, he can claim
            the VAT paid as credit same as other purchases on the basis of
            payment voucher.
          </p>

          <h3 className="underline">Construction of Businesses Structure:</h3>
          <p className="mb-8 leading-relaxed">
            According to section 8(3) any person (registered or not under VAT
            Act) in Nepal engaged in constructing of commercial buildings,
            apartments, shopping mall or construction of similar nature of value
            more than NPR 5 millions performs such works/ purchases from the
            person who is not registered under VAT, need to pay VAT on the
            construction cost if the purchases is not made through the person
            who is registered under VAT.
          </p>
          <h3 className="underline">Importation:</h3>
          <p className="mb-8 leading-relaxed">
            If any person imports goods from abroad, VAT needs to be paid at the
            custom point as destination based tax.
          </p>

          <h3 className="underline">Accounting for Reverse VAT:</h3>
          <p className=" leading-relaxed">
            Reverse VAT is to be shown seperately in books of account. A sample
            journal entry (entry opinion may differ).
          </p>
            <ul >
              <li>Dr. Expenses (Expense Account Head)</li>
              <li>Dr. VAT - Reverse Charge (input credit)</li>
              <li>Cr. Bank Account</li>
              <li>Cr. TDS Payable</li>
            </ul>
<br className="mb-8"/>
          <h3 className="underline">Notes:</h3>
          <h3 className="underline">
            Note 1: Conditions for reverse VAT (VAT Directive, pg. 16):
          </h3>
          
          <ol className="list-decimal">
            <li>
              Any Foreign person shall have provided Services to person in
              Nepal.
            </li>
            <li>The supply of service is to be supplied from outside Nepal.</li>
            <li>The referred Service shall be taxable Service in Nepal. (refer schedule 1 for VAT exemt services)</li>
            <li>The service is <strong>NOT</strong> imported through Customs Department.</li>
            <li>The Service Receiver is a registered taxpayer in Nepal.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default reversevatact;
