import BlogCard from "@/SharedComponent/BlogCard/BlogCard";


import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const Blogs = () => {
  return (
    <div>
      <SectionTitle title="Our Blogs"/>

      <div className=" gap-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
        {[1,2,3,4,4,5]?.map(()=><BlogCard/>)}
      </div>
    </div>
  );
};

export default Blogs;