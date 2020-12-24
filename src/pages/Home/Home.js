import classes from "./Home.module.css";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};

export default Home;
