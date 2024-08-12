import Sectitle from "../../components/Sectitle";
import boy from "../../assets/boy.png";

function About() {
  const skills = [
    "javaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];
  return (
    <div>
      <Sectitle title="About" />
      <div className="flex flex-row items-center w-full">
        <div className=" w-1/2 justify-center">
          <img className="h-2/3 w-fit" src={boy} alt="boy" />
        </div>
        <div className="flex flex-col gap-8 w-1/2 h-[70vh] justify-center">
          <p className="text-white tracking-widest">
            Hello! My name is Nishad Umap, and I&apos;m passionate about
            creating efficient and dynamic web applications. My journey into web
            development began with a strong interest in technology, where I
            started exploring the MERN stack. This led me to develop several
            projects that taught me the importance of building scalable and
            responsive web solutions.
          </p>
          <p className="text-white tracking-widest">
            Fast forward to today, I am proud to have honed my skills in
            developing full-stack applications using MongoDB, Express, React,
            and Node.js. I am constantly exploring new technologies and
            methodologies to stay current with industry trends and improve my
            craft. My primary focus is on building user-centric applications
            that not only meet client needs but also provide a seamless user
            experience. I am excited to continue growing and applying my
            knowledge in challenging environments.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I&apos;ve been working with/learning
          recently.
        </h1>
        <div className="flex gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary hover:bg-tertiary py-1 px-5" key={index}>
              <h1 className="text-tertiary hover:text-primary my-2">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
