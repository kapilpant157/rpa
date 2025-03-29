import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="flex flex-wrap w-full mb-20"> */}
        <div className="flex flex-col text-center w-full mt-10 mb-50">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SERVICES</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We offer wide range of professional services, closely managed and
            involved directly with our client. We are committed to understand
            client’s business and solve their problems immediately and
            effectively.</p>
    </div>
          
        {/* </div> */}

        <div className="flex flex-wrap -m-3">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/company.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
              Auditing & Assurance Services {" "}
              </h2>
              <p>
              Our audit and assurance practice focuses on managing risks, as well as identify areas for operational improvement of the corporates and business entities so they can focus on their core businesses. Our understanding each client's business enables us to provide value added insights to clients to improve client efficiency, performance and profitability. We help in risk management strategies in the areas of Internal Audit, Statutory Audit, Operational Audit and Tax Audit. 
              </p>
              {/* <ul>
                <li>• Company Registration.</li>
                <li>• Comapny Name Change.</li>
                <li>• Company Audit</li>
                <li>• Company Policies Update Tracking</li>
                <li>• Company Dissolve</li>
                <li>• And Many More..</li>
              </ul> */}
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/bussiness.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
              Accounts management
              </h2>
              <p>Organizations are challenged to constantly improve their accounting procedures to keep pace with the global environment. We help in designing and implementing of accounting system, review of existing accounting manual and accounting system for every kind of company, firm and organizations. We understand this need and assist companies with accounting procedures that match international practices and standards, which gives them a competitive advantage. This includes the Nepal Financial Reporting Standards (NFRS) and International Financial Reporting Standards (IFRS). We also help our clients by providing analysis of financial statements, transactional management and budget planning activities that helps them make sound investment and financial decisions. </p>
              {/* <ul>
                <li>• Bussness Formation.</li>
                <li>• Feasibility Study.</li>
                <li>• Financial Study</li>
                <li>• Consultancy</li>
                <li>• Literature Reviews</li>
              </ul> */}
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/auditing.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
              Tax and Related Advisory Services {" "}
              </h2>
              <p>Tax practice is aimed to create value for our clients and to bring competitive advantage to their activities and helps clients find opportunities for tax savings that will have significant impact on the financial statements. Financial and business advisory services can provide valuable insights into how companies can grow and enhance their shareholder value. </p>
              {/* <ul>
                <li>• Statutory/External/Final Audit.</li>
                <li>• Tax Audit.</li>
                <li>• Internal Audit & Concurrent audit</li>
                <li>• Internal Control Review and Management Audit</li>
                <li>• Due Diligence Audit</li>
                <li>• Certification</li>
              </ul> */}
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/finance.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"> */}
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 className="text-lg text-gray-900 text-center font-medium title-font ">
              Due Diligence Audit Review {" "}
               </h2>
               <p>We provide both desktop Due Diligence and detailed Financial and Tax Due Diligence support. Desktop due diligence is a preliminary investigation conducted on the target company to evaluate the performance of the company based on the data/ information which is available in public domain. Financial and Tax Due Diligence is a detailed exercise which involves on site reviews, interviews with target management and identification of pricing issues and structuring issues on deals. </p>
              
              <h3>we provide</h3>
              
              
              <ul>
                <li className="leading-relaxed text-base">
                • Financial Due Diligence Review                 </li>
                <li className="leading-relaxed text-base">
                • Commercial Due Diligence Review                 </li>
                <li className="leading-relaxed text-base">
                • Integrity Due Diligence Review (IDD)                 </li>
                <li className="leading-relaxed text-base">
                • HR Due Diligence Review </li>
                <li className="leading-relaxed text-base">
                • Operational Due Diligence Review  </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/accountin.jpg"
                width={720}
                height={401}
                alt="Picture of the author"
              />
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
              Business Valuation Services 
              </h2>
<p className="mb-2">Appropriate and Independent Valuation is the key to the success of any transactions (be it mergers, acquisitions or takeovers). </p>
<p className="mb-2">Valuation is a perception of the value of a business at a given point of time. Valuation plays a central part in an equity transaction. Fair value of the business must be decided prior to accepting or making an offer. Our objective is to provide a valuation of the business and provide inputs on matter impacting the valuation. With careful application of our professional judgment, we select the most appropriate valuation techniques. While valuation form an integral part of any M&A transaction, we also provide standalone valuation services for statutory purposes, family settlements, dispute resolutions etc. </p>
<p>Our team have been instrumental in the Valuations of many transactions taken place in Nepal. Our team have the blend of knowledge and expertise in doing valuations of different companies across the industry. </p>


              {/* <ul>
                <li className="leading-relaxed text-base">
                  • Design, implementation and review of accounting manual,
                  accounting system for every kind of company, firm and
                  organizations.
                </li>
                <li className="leading-relaxed text-base">
                  • We also support client for accounting record keeping system
                </li>
                <li className="leading-relaxed text-base">
                  • Preparation of Balance sheet and other financial statements.
                </li>
                <li className="leading-relaxed text-base">
                  • Advice on various accounting issues including those related
                  to Accounting Standards and Auditing Standards.
                </li>
                <li className="leading-relaxed text-base">
                  • Projections and estimations of financial statements and
                  report thereon.
                </li>
                <li className="leading-relaxed text-base">
                  • Asset Accounting Management
                </li>
                <li className="leading-relaxed text-base">
                  • MIS Reporting, Budgeting
                </li>
              </ul>{" "} */}
            </div>
          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/tax.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"> */}
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 className="text-lg text-gray-900 taxt-center font-medium title-font mb-4">
              Related Services {" "}
              </h2>
              <p className="font-medium">Company Formation Services including:</p>
              <ul>
                <li>• Company Registration.</li>
                <li>• Comapny Name Change.</li>
                <li>• Company Audit</li>
                <li>• Company Policies Update Tracking</li>
                <li>• Company Dissolve</li>
                <li>• And Many More..</li>
              </ul>
            </div>
          </div>
        </div>



        <div className="flex flex-wrap -m-3">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/company.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Company Formation{" "}
              </h2>
              <ul>
                <li>• Company Registration.</li>
                <li>• Comapny Name Change.</li>
                <li>• Company Audit</li>
                <li>• Company Policies Update Tracking</li>
                <li>• Company Dissolve</li>
                <li>• And Many More..</li>
              </ul>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/bussiness.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Bussiness & Start-Ups
              </h2>
              <ul>
                <li>• Bussness Formation.</li>
                <li>• Feasibility Study.</li>
                <li>• Financial Study</li>
                <li>• Consultancy</li>
                <li>• Literature Reviews</li>
              </ul>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100  p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/auditing.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Auditing & Assurance Services{" "}
              </h2>
              <ul>
                <li>• Statutory/External/Final Audit.</li>
                <li>• Tax Audit.</li>
                <li>• Internal Audit & Concurrent audit</li>
                <li>• Internal Control Review and Management Audit</li>
                <li>• Due Diligence Audit</li>
                <li>• Certification</li>
              </ul>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/finance.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"> */}
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Financial Services{" "}
              </h2>
              <ul>
                <li className="leading-relaxed text-base">
                  • Financial Analysis and Planning
                </li>
                <li className="leading-relaxed text-base">
                  • Working Capital Management
                </li>
                <li className="leading-relaxed text-base">
                  • Preparation of project reports & feasibility analysis
                </li>
                <li className="leading-relaxed text-base">
                  • Bank Loan & Facility Processing including LC, BG, OD, TR,
                  Term loan, Personal loan, Demand Loan & other Project loans.
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/accountin.jpg"
                width={720}
                height={401}
                alt="Picture of the author"
              />
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Accounting Services
              </h2>
              <ul>
                <li className="leading-relaxed text-base">
                  • Design, implementation and review of accounting manual,
                  accounting system for every kind of company, firm and
                  organizations.
                </li>
                <li className="leading-relaxed text-base">
                  • We also support client for accounting record keeping system
                </li>
                <li className="leading-relaxed text-base">
                  • Preparation of Balance sheet and other financial statements.
                </li>
                <li className="leading-relaxed text-base">
                  • Advice on various accounting issues including those related
                  to Accounting Standards and Auditing Standards.
                </li>
                <li className="leading-relaxed text-base">
                  • Projections and estimations of financial statements and
                  report thereon.
                </li>
                <li className="leading-relaxed text-base">
                  • Asset Accounting Management
                </li>
                <li className="leading-relaxed text-base">
                  • MIS Reporting, Budgeting
                </li>
              </ul>{" "}
            </div>
          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-1 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/tax.jpg"
                width={720}
                height={600}
                alt="Picture of the author"
              />
              {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"> */}
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
              <h2 className="text-lg text-gray-900 taxt-center font-medium title-font mb-4">
                TAX , VAT, Excise Consultancy, Planning & Verification Services{" "}
              </h2>
              <ul>
                <li className="leading-relaxed text-base">
                  • PAN, VAT, Excise, Import Export, Bonded Warehouse
                  Registration services
                </li>
                <li className="leading-relaxed text-base">
                  • Filing of VAT Returns & Maintenance of VAT Records & VAT
                  Accounts
                </li>
                <li className="leading-relaxed text-base">
                  • ETDS Filing & Matters related to Deduction of Tax at Source
                  (TDS) and Withholding of Taxes.
                </li>
                <li className="leading-relaxed text-base">
                  • Consultancy on various complicated matters pertaining to
                  Income tax including full audit.
                </li>
                <li className="leading-relaxed text-base">
                  • Effective Tax Management and Tax Advisory.
                </li>
                <li className="leading-relaxed text-base">
                  • Filing Estimated Tax Return & consultancy on advance tax
                  calculations
                </li>
                <li className="leading-relaxed text-base">
                  • Liaison with Inland Revenue Office for rectification,
                  assessments, and all Income Tax related Matters.
                </li>
                <li className="leading-relaxed text-base">
                  • Filing of every type of Income Tax Return, Excise return &
                  Business closure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
