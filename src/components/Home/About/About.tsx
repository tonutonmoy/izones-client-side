import SectionTitle from '@/SharedComponent/SectionTitle/SectionTitle';
import React from 'react';

const About = () => {
  return (

    <div>
<SectionTitle title='About us'/>
    
<section className=" relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full ">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed dark:text-white">About Us</h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="dark:text-orange-500 text-orange-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                 Introducing iZones IELTS
                  </h2>
                  <p className="text-gray-500 dark:text-white text-base font-normal leading-relaxed lg:text-start text-center">
                 
                       We are initially offering online classes worldwide from Winnipeg, MB 🇨🇦 and are expanding our team so that we can get services soon from the other parts of the world 🌍 
                       In person classes are offered depending on certain tutors locations📍
                       Have a quick moment to take a look and kindly let us know how we could be a help ☎️
                       Also, let your family & friends know about us so that they could also be benefited ♻️
                       ®️We are opening our registration soon
                       📧 Please send us an email to stay tuned.
                       
                       We, iZones wish you all a seamless year ahead with your family and friends 🩶
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                {/* Achievement Cards */}
                {/* <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Influencing Digital Landscapes Together
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Excellence Achieved Through Success
                    </p>
                  </div>
                </div> */}
                {/* <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Our Dedication to Innovation Wins Understanding
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Mirrors our Focus on Client Satisfaction.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-black  dark:bg-orange-500 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-white text-sm  font-medium leading-6  group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Right Section */}
          <div className="w-full  justify-center items-start flex  ">
            <div className="sm:w-[564px] w-full sm:h-[646px]  h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200  relative ">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover hover:translate-y-10  duration-500 "
                // src="https://pagedone.io/asset/uploads/1717742431.png"
                src="./about/about.jpeg"
                alt="About Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
