import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import Link from "next/link";

const Advertisement = () => {
  return (
    <>
    <SectionTitle title='SignUp'/>
    <section className="px-3 py-5 dark:gray-100 bg-neutral-100 lg:py-10 mt-10">
      
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        
          {/*  */}
          <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p className=" w-full flex justify-center">
              <Link
           href={'https://docs.google.com/forms/d/e/1FAIpQLSd_X5eJmk-XHYwlK4RDJRUbVmgZnZPA7EXIe5oOeWkKVgL0EQ/viewform'} 
          
          
           className="text-lg md:text-2xl bg-orange-500  group-hover:bg-orange-400   dark:bg-orange-500 text-white py-2 px-5 mt-10 hover:bg-zinc-800 uppercase">sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
          {/*  */}
         
        
        <div className="order-1 lg:order-2 ">
          <img
            className="h-80 w-80 object-fill lg:w-[500px] lg:h-[500px]"
            src="./advertisement/advertisement.jpg"
            alt="Summer Sale"
          />
        </div>
    </div>
    </section>
    
    </>
   
  );
};

export default Advertisement;