import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "../About";
import Intro from "../Intro";
import Experinece from '../Experineces'
import Projects from "../Projects";
import Contact from "../Contact"
import Sider from "../../components/Sider";

export default function Home() {
  return (
    <div id="home-section">
        <Header />
        <div className="bg-primary px-4 lg:px-32">
          <Intro />
          <About />
          <Experinece />
          <Projects />
          <Contact /> 
          <Footer/> 
        {/* <Sider /> */}
        </div>
    </div>
  )
}

