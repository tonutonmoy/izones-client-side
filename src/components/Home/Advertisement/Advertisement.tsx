import Link from "next/link";

const Advertisement = () => {
  return (
    <section className="px-3 py-5 dark:gray-100 bg-neutral-100 lg:py-10 mt-32">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl  text-orange-600">33% OFF</p>
        <p className="text-4xl font-bold md:text-7xl dark:text-black">winter batch</p>
        <p className="mt-2 text-sm md:text-lg dark:text-black">For limited time only!</p>
        <Link
         href={'https://docs.google.com/forms/d/e/1FAIpQLSd_X5eJmk-XHYwlK4RDJRUbVmgZnZPA7EXIe5oOeWkKVgL0EQ/viewform'} 
        
        
         className="text-lg md:text-2xl bg-black dark:bg-orange-500 text-white py-2 px-5 mt-10 hover:bg-zinc-800 uppercase">sign up</Link>
      </div>
      <div className="order-1 lg:order-2 ">
        <img
          className="h-80 w-80 object-fill lg:w-[500px] lg:h-[500px]"
          src="./advertisement/advertisement.jpg"
          alt="Summer Sale"
        />
      </div>
    </div>
  </section>
  );
};

export default Advertisement;