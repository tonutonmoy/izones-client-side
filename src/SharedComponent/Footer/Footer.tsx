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
              
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
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
                <li><a href="#" className="hover:text-blue-400 text-[15px]">Getting Started With HTML and CSS</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">What Is Flex And When to Use It?</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">How TailwindCSS Can Help Your Productivity?</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">5 Tips to Make Responsive Website</a></li>
                <li><a href="#" className="hover:text-blue-400 text-[15px]">See More</a></li>
              </ul>
            </div>

          

            {/* New Email and Address Section */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-xl pb-4 mb-4 border-b-4 border-blue-500">Contact Information</h2>
              </div>
              <ul className="leading-8 text-[15px]">
                <li>Email: <a href="mailto:info@tailwindow.com" className="hover:text-blue-400">info@tailwindow.com</a></li>
                <li>Address: 1234 Tailwind Street, City, Country</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
