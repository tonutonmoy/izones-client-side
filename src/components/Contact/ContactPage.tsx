import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className="dark:bg-black bg-gray-50 py-10 "id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-gray-600 dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-white">
              In hac habitasse platea dictumst
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-white">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-white">Sk's iZone, Winnipeg, MB </p>
                    <p className="text-gray-600 dark:text-white">Canada, Manitoba</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                    <p className="text-gray-600 dark:text-white">Mobile: +1 (123) 456-7890</p>
                    <p className="text-gray-600 dark:text-white">Mail: izonesinfo@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working hours</h3>
                    <p className="text-gray-600 dark:text-white">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-600 dark:text-white">Saturday & Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-white sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-white sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols={30}
                      rows={5}
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-white sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full dark:bg-orange-500 bg-gray-900 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Section */}

        <div className=' w-full flex justify-center mt-20 '>
        <div className="px-4 my-4 w-full md:w-2/5 xl:w-1/5 bg-gray-800 p-3  rounded-full ">
         
         {/* Social Media Links */}
         <div className="flex justify-center items-center gap-5 ">
         
         <Link href="https://www.facebook.com/profile.php?id=61571096711271" className="inline-flex items-center justify-center h-8 w-8 border  rounded-full mr-1 text-blue-400 border-blue-400">
           <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
             <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
           </svg>
         </Link>
         <Link   href="https://wa.me/16476749796"  className="inline-flex items-center justify-center h-8 w-8 border  rounded-full mr-1 text-green-400 border-green-400">
             <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
               <path d="M380.9 97.1C339.3 55.5 283.8 32 224 32 100.3 32 0 132.3 0 256c0 43.1 11.4 85.3 33 122L1.5 482.8c-1.6 8.5 6.2 15.9 14.5 13.6l114.4-30.6c35.7 19.6 76.3 29.9 117.6 29.9 123.7 0 224-100.3 224-224 0-59.8-23.5-115.3-65.1-156.9zM224 456c-39.5 0-78.1-10.5-112.2-30.3l-7.9-4.6-67.8 18.1 18.1-67.8-4.6-7.9C30.5 339.8 20 301.2 20 261.7 20 153.9 117.9 56 224 56c51.1 0 99.1 19.9 135.1 55.9C395 148.9 416 200 416 256c0 106.1-97.9 200-192 200zm99.7-151.2c-5.5-2.8-32.5-16.1-37.5-17.9-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 17.9-17.5 21.6-3.2 3.7-6.4 4.2-11.9 1.4-32.5-16.2-53.9-28.9-75.5-65.5-5.7-9.7 5.7-9 16.2-30.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.2-41.5-4.5-10.8-9.2-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.5s19.9 53.9 22.6 57.6c2.8 3.7 39 59.6 94.6 83.6 13.2 5.7 23.6 9 31.7 11.5 13.3 4.2 25.4 3.6 34.9 2.2 10.6-1.6 32.5-13.3 37.1-26.2 4.6-13.1 4.6-24.3 3.2-26.2-1.3-1.8-5-3.6-10.5-6.5z"></path>
             </svg>
               </Link>

         <a href="https://www.instagram.com/khurshids_/?hl=en" className="inline-flex items-center justify-center h-8 w-8 border  rounded-full mr-1 text-red-500 border-red-500">
           <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.1 26.2-26.2 34.4-58 36.2-93.9 2.1-37.1 2.1-148 0-184.9zM224.1 388c-71.4 0-129.9-58.4-129.9-129.9S152.7 128.2 224.1 128.2 354 186.6 354 258s-58.5 129.9-129.9 129.9z"></path>
           </svg>
         </a>
         <a href="#" className="inline-flex items-center justify-center h-8 w-8 border rounded-full mr-1 text-blue-400 border-blue-400">
           <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path d="M148.4 81.7c-47.3 0-85.6 38.3-85.6 85.6v268.5c0 47.3 38.3 85.6 85.6 85.6h151.2c47.3 0 85.6-38.3 85.6-85.6V167.3c0-47.3-38.3-85.6-85.6-85.6H148.4zm0 48.6h151.2c20.1 0 36.4 16.3 36.4 36.4v268.5c0 20.1-16.3 36.4-36.4 36.4H148.4c-20.1 0-36.4-16.3-36.4-36.4V167.3c0-20.1 16.3-36.4 36.4-36.4z"></path>
           </svg>
         </a>
       </div>
       </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
