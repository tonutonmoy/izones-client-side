import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400 mt-10">
        <Container>
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* Logo and Description */}
            <div className="px-4 my-4 w-full xl:w-1/5">
            <Link href='/'>
              <img className="h-[50px] w-[150px]" src="./logo/logo.png" alt="Your Company" />
              </Link>
              {/* Social Media Links */}
              <div className="flex gap-5 mt-5">
              
              <Link href="https://www.facebook.com/profile.php?id=61571096711271" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </Link>
              <Link href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-green-400 hover:border-green-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339.3 55.5 283.8 32 224 32 100.3 32 0 132.3 0 256c0 43.1 11.4 85.3 33 122L1.5 482.8c-1.6 8.5 6.2 15.9 14.5 13.6l114.4-30.6c35.7 19.6 76.3 29.9 117.6 29.9 123.7 0 224-100.3 224-224 0-59.8-23.5-115.3-65.1-156.9zM224 456c-39.5 0-78.1-10.5-112.2-30.3l-7.9-4.6-67.8 18.1 18.1-67.8-4.6-7.9C30.5 339.8 20 301.2 20 261.7 20 153.9 117.9 56 224 56c51.1 0 99.1 19.9 135.1 55.9C395 148.9 416 200 416 256c0 106.1-97.9 200-192 200zm99.7-151.2c-5.5-2.8-32.5-16.1-37.5-17.9-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 17.9-17.5 21.6-3.2 3.7-6.4 4.2-11.9 1.4-32.5-16.2-53.9-28.9-75.5-65.5-5.7-9.7 5.7-9 16.2-30.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.2-41.5-4.5-10.8-9.2-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.5s19.9 53.9 22.6 57.6c2.8 3.7 39 59.6 94.6 83.6 13.2 5.7 23.6 9 31.7 11.5 13.3 4.2 25.4 3.6 34.9 2.2 10.6-1.6 32.5-13.3 37.1-26.2 4.6-13.1 4.6-24.3 3.2-26.2-1.3-1.8-5-3.6-10.5-6.5z"></path>
                  </svg>
                    </Link>

              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-red-00 hover:border-red-500">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.1 26.2-26.2 34.4-58 36.2-93.9 2.1-37.1 2.1-148 0-184.9zM224.1 388c-71.4 0-129.9-58.4-129.9-129.9S152.7 128.2 224.1 128.2 354 186.6 354 258s-58.5 129.9-129.9 129.9z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M148.4 81.7c-47.3 0-85.6 38.3-85.6 85.6v268.5c0 47.3 38.3 85.6 85.6 85.6h151.2c47.3 0 85.6-38.3 85.6-85.6V167.3c0-47.3-38.3-85.6-85.6-85.6H148.4zm0 48.6h151.2c20.1 0 36.4 16.3 36.4 36.4v268.5c0 20.1-16.3 36.4-36.4 36.4H148.4c-20.1 0-36.4-16.3-36.4-36.4V167.3c0-20.1 16.3-36.4 36.4-36.4z"></path>
                </svg>
              </a>
            </div>
            </div>

            {/* Company Section */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-xl pb-4 mb-4 border-b-4 border-blue-500">Company</h2>
              </div>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400 text-[15px]">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">Contact Us</a></li>
              </ul>
            </div>

            {/* Blog Section */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-xl pb-4 mb-4 border-b-4 border-blue-500">Blog</h2>
              </div>
              <ul className="leading-8">
                <li><Link href="#" className="hover:text-blue-400 text-[15px]">Getting Started With HTML and CSS</Link></li>
                <li><Link href="#" className="hover:text-blue-400 text-[15px]">What Is Flex And When to Use It?</Link></li>
                <li><Link href="#" className="hover:text-blue-400 text-[15px]">How TailwindCSS Can Help Your Productivity?</Link></li>
                <li><Link href="#" className="hover:text-blue-400 text-[15px]">5 Tips to Make Responsive Website</Link></li>
                <li><Link href="#" className="hover:text-blue-400 text-[15px]">See More</Link></li>
              </ul>
            </div>

          

            {/* New Email and Address Section */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-xl pb-4 mb-4 border-b-4 border-blue-500">Contact Information</h2>
              </div>
              <ul className="leading-8 text-[15px]">
                <li>Email: <a href="mailto:izonesinfo@gmail.com" className="hover:text-blue-400">izonesinfo@gmail.com</a></li>
                <li>Address: Sk's iZone, Winnipeg, MB, Canada, Manitoba</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
