import Container from "@/SharedComponent/Container/Container";
import HomeBanner from "./HomeBanner/HomeBanner";
import Courses from "./Courses/Courses";
import Advertisement from "./Advertisement/Advertisement";

const HomePage = () => {
  return (
    <Container>
      <HomeBanner/>
      
      <Courses/>
      <Advertisement/>
    </Container>
  );
};

export default HomePage;