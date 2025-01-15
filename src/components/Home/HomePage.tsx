import Container from "@/SharedComponent/Container/Container";
import HomeBanner from "./HomeBanner/HomeBanner";
import Courses from "./Courses/Courses";
import Advertisement from "./Advertisement/Advertisement";
import Blogs from "./Blogs/Blogs";
import About from "./About/About";
import Question from "@/SharedComponent/Question/Question";

const HomePage = () => {
  return (
    <Container>
      <HomeBanner/>
      <Courses/>
      <About/>
      
      <Advertisement/>
      <Blogs/>
      <Question/>
    </Container>
  );
};

export default HomePage;