
import Card from "@/SharedComponent/Card/Card";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const CoursesPage = () => {
  const data = [
    { img: "/courses/courses1.jpg",
      name: "Premium 8 weeks",
      price: {
        old: 11900,
        new: 7973
      },
      duration: "61 days",
      numberOfClasses: 24,
      oneOnOneClasses: 8
    },
    { img: "/courses/courses2.jpg",
      name: "Conclusive Mocks",
      price: {
        old: 2900,
        new: 1943
      },
      duration: "N/A",
      numberOfMockTests: 4,
      totalTestReviews: 4
    },
    { img: "/courses/courses3.jpg",
      name: "Fast-track 15 days",
      price: {
        old: 4900,
        new: 3283
      },
      duration: "15 days",
      numberOfClasses: 6,
      oneOnOneClasses: 3,
      eligibility: "Must complete Premium 8 weeks or Conclusive Mocks"
    }
  ];
  
  return (
    <div>
    <SectionTitle title="All Courses"/>

<div className=" gap-10 grid md:grid-cols-2  xl:grid-cols-4 3xl:grid-cols-5 ">
{data?.map((course)=><Card data={course}/>)}
</div>
 </div>
  );
};

export default CoursesPage;