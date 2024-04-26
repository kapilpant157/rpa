import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Services</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">We offer wide range of professional services, closely managed and involved directly with our client. We are committed to understand client’s business and solve their problems immediately and effectively.</p>
        </div>
        <div class="flex flex-wrap -m-3">
        <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/company.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 class="text-lg text-gray-900 text-center font-medium title-font mb-4">Company Formation </h2>
              <ul>
                <li>•	Company Registration.</li>
                <li>•	Comapny Name Change.</li>
                <li>•	Company Audit</li>
                <li>•	Company Policies Update Tracking</li>
                <li>•	Company Dissolve</li>
                <li>•	And Many More..</li>
              </ul>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/bussiness.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 class="text-lg text-gray-900 text-center font-medium title-font mb-4">Bussiness & Start-Ups</h2>
              <ul>
                <li>•	Bussness Formation.</li>
                <li>•	Feasibility Study.</li>
                <li>•	Financial Study</li>
                <li>•	Consultancy</li>
                <li>•	Literature Reviews</li>
              </ul>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/auditing.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 class="text-lg text-gray-900 text-center font-medium title-font mb-4">Auditing & Assurance Services </h2>
              <ul>
                <li>•	Statutory/External/Final Audit.</li>
                <li>•	Tax Audit.</li>
                <li>•	Internal Audit & Concurrent audit</li>
                <li>•	Internal Control Review and Management Audit</li>
                <li>•	Due Diligence Audit</li>
                <li>•	Certification</li>
              </ul>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/accountin.jpg"
                width={720}
                height={401}
                alt="Picture of the author"
              />
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 class="text-lg text-gray-900 text-center font-medium title-font mb-4">Accounting Services</h2>
              <ul>
                <li class="leading-relaxed text-base">•	Design, implementation and review of accounting manual, accounting system for every kind of company, firm and organizations.
                </li>
                <li class="leading-relaxed text-base">•	We also support client for accounting record keeping system</li>
                <li class="leading-relaxed text-base">•	Preparation of Balance sheet and other financial statements.</li>
                <li class="leading-relaxed text-base">•	Advice on various accounting issues including those related to Accounting Standards and Auditing Standards.</li>
                <li class="leading-relaxed text-base">•	Projections and estimations of financial statements and report thereon.</li>
                <li class="leading-relaxed text-base">•	Asset Accounting Management</li>
                <li class="leading-relaxed text-base">•	MIS Reporting, Budgeting</li>








              </ul>            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/finance.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"> */}
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 class="text-lg text-gray-900 text-center font-medium title-font mb-4">Financial Services </h2>
              <ul>
                <li class="leading-relaxed text-base">•	Financial Analysis and Planning</li>
                <li class="leading-relaxed text-base">•	Working Capital Management
                </li>
                <li class="leading-relaxed text-base">•	Preparation of project reports & feasibility analysis
                </li>
                <li class="leading-relaxed text-base">•	Bank Loan & Facility Processing including LC, BG, OD, TR, Term loan, Personal loan, Demand Loan & other Project loans.
                </li>

              </ul>


            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/tax.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"> */}
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 class="text-lg text-gray-900 taxt-center font-medium title-font mb-4">TAX , VAT, Excise Consultancy, Planning & Verification Services </h2>
              <ul>
                <li class="leading-relaxed text-base">•	PAN, VAT, Excise, Import Export, Bonded Warehouse Registration services
                </li>
                <li class="leading-relaxed text-base">•	Filing of VAT Returns & Maintenance of VAT Records & VAT Accounts
                </li>
                <li class="leading-relaxed text-base">•	ETDS Filing & Matters related to Deduction of Tax at Source (TDS) and Withholding of Taxes.
                </li>
                <li class="leading-relaxed text-base">•	Consultancy on various complicated matters pertaining to Income tax including full audit.
                </li>
                <li class="leading-relaxed text-base">•	Effective Tax Management and Tax Advisory.</li>
                <li class="leading-relaxed text-base">•	Filing Estimated Tax Return & consultancy on advance tax calculations</li>
                <li class="leading-relaxed text-base">•	Liaison with Inland Revenue Office for rectification, assessments, and all Income Tax related Matters.</li>
                <li class="leading-relaxed text-base">•	Filing of every type of Income Tax Return, Excise return & Business closure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services