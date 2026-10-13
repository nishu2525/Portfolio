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
          Hello! I&apos;m Nishad Umap, an MBA student at Universal AI University, specializing in Marketing & Business Analytics, with a background in full-stack and mobile application development.
          </p>
          <p className="text-white tracking-widest">
          My professional journey began in software development, where I worked as a Jr. Full Stack Developer at Power Code Technology, building mobile application interfaces using React Native and JavaScript, integrating backend APIs, and collaborating with cross-functional teams. This experience helped me develop strong problem-solving, technical, and analytical skills.
          </p>
          <p className="text-white tracking-widest">
          Currently, I'm expanding my expertise in business strategy, market research, customer relationship management, and data-driven decision-making through my MBA. During my internship at Austin Realty, I worked with channel partners and customers, supported the sales process, and contributed to 14 property bookings worth ₹7+ crore in transaction value.
         </p>
          <p className="text-white tracking-widest">
          I&apos;m passionate about bridging the gap between technology and business by combining my technical foundation with management knowledge and analytical thinking. My goal is to contribute to projects that solve real-world business problems, improve customer experiences, and create measurable value. I enjoy collaborating with diverse teams, learning new skills, and exploring opportunities at the intersection of technology, business analytics, and management.
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
