import InstructorCard from "@/SharedComponent/InstructorCard/InstructorCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const Instructor = () => {
    const data = [
        {id:1,
            img:'',
         name:" Sajal Khurshid"
          
        },
        {id:2,
            img:'',
         name:" Sajal Khurshid"
          
        },
        {id:3,
            img:'',
         name:" Sajal Khurshid"
          
        },
        {id:4,
            img:'',
         name:" Sajal Khurshid"
          
        },
       
        
      ];
  return (
    <div>
    <SectionTitle title="Our Instructors"/>

    <div className=" gap-10 grid md:grid-cols-2  xl:grid-cols-4 3xl:grid-cols-5">
      {data?.map((Instructors)=><InstructorCard data={Instructors}/>)}
    </div>
  </div>
  );
};

export default Instructor;