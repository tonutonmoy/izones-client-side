import Link from "next/link";

const Advertisement = () => {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10 mt-20">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl text-orange-600">33% OFF</p>
        <p className="text-4xl font-bold md:text-7xl">winter batch</p>
        <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
        <Link
         href={'https://www.facebook.com/profile.php?id=61571096711271'} 
        // href="https://wa.me/8801732159683" 
        
         className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800 uppercase">contact us</Link>
      </div>
      <div className="order-1 lg:order-2">
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