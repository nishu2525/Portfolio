import Header from "../../components/Header";
import About from "./About";
import Experineces from "./Experineces";
import Intro from "./Intro";
import Projects from "./Projects";


export default function Home() {
  return (
    <div>
        <Header/>
        <div  className="bg-primary px-40">
          <Intro/>
          <About />
          <Experineces />
          <Projects />
        </div>
    </div>
  )
}

