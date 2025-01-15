import Link from "next/link";
import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section >
      
      <div >
        <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border hover:bg-orange-50 border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="h-56 w-full object-cover"
              alt="We came first in Awwwards ceremony 2021"
            />
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
                  />
                </svg>
                Awards
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                We came first in Awwwards ceremony 2021
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.
              </p>
              <Link href={'/blogs/123'} className="inline-block cursor-pointer select-none rounded-lg border border-gray-800 bg-gray-800 px-3 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Learn More
              </Link>
            </div>
          </div>
        </article>

      

        
      </div>
    </section>
  );
};

export default BlogSection;
