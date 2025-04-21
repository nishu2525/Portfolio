// import Sectit from "../components/Sectitle";
import boy from "../assets/boy.png";
import Sectitle from "../components/Sectitle";


function About() {
  const skills = [
    "React Native",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",

  ];
  return (
    <div id="about-section">
      <Sectitle title="About" />
      <div className="flex flex-col lg:flex-row items-center w-full gap-6">
        <div className="w-full lg:w-1/2 justify-center">
          <img className="lg:h-2/3 w-fit" src={boy} alt="boy" />
        </div>
        <div className="w-full flex flex-col gap-8 lg:w-1/2 lg:h-[70vh] justify-center">
          <p className="text-white tracking-widest">
          Hello! I&apos;m Nishad Umap, a passionate Full Stack Developer with experience in building responsive and scalable web and mobile applications. My development journey began with the MERN stack, where I built hands-on projects like an Amazon clone and contact management app. These projects taught me the value of clean UI, performance optimization, and real-world problem-solving through code. I enjoy working with technologies like <strong>React.js and React Native</strong> to create seamless user experiences.
          </p>
          <p className="text-white tracking-widest">
          Currently, I&apos;m working as a <strong>Jr. Full Stack Developer at PowerCode Technology</strong>, where I focus on building mobile interfaces and integrating backend APIs. I&apos;m always learning and exploring new tools to stay ahead in this fast-evolving industry. My goal is to build user-focused applications that are both functional and intuitive. I thrive in collaborative environments and am always excited to take on challenging projects that push my skills and creativity forward.
          </p>
        </div>
      </div>
      <div className="py-5">
        <Sectitle title="Skills" />
        <h1 className="text-tertiary text-xl -mt-4">
          Here are a few technologies I&apos;ve been working with/learning
          recently.
        </h1>
        <div className="lg:flex grid grid-cols-2 gap-5 lg:items-center lg:gap-10  my-4">
          {skills.map((skill, index) => (
            <div className="border-2 border-tertiary hover:bg-tertiary py-2 px-5  hover:lg:px-8 hover:px-7  duration-300" key={index}>
              <h1 className="text-white hover:text-primary lg:my-2 ">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
