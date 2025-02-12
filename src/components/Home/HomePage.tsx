import Container from "@/SharedComponent/Container/Container";
import HomeBanner from "./HomeBanner/HomeBanner";
import Courses from "./Courses/Courses";
import Advertisement from "./Advertisement/Advertisement";
// import Blogs from "./Blogs/Blogs";
import About from "./About/About";
import Question from "@/SharedComponent/Question/Question";
import Instructor from "./Instructor/Instructor";

const HomePage = () => {
  return (
   <div>

   
      <HomeBanner/>
      <Container>
      <Courses/>
      <Instructor/>
      <About/>
      
      <Advertisement/>
      {/* <Blogs/> */}
      <Question/>
    </Container>
    </div>
  );
};

export default HomePage;