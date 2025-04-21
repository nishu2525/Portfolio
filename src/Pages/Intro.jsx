import { TypeAnimation } from 'react-type-animation';

function Intro() {
  
  return (
    <div className="h-[90vh]  bg-primary flex flex-col items-start justify-center gap-10 lg:gap-12 py-10">
      <h1 className="text-white text-xl lg:text-4xl "> Hi, I&apos;m</h1>
      <h2 className=" text-7xl lg:text-8xl  bg-gradient-to-r from-pink to-teal bg-clip-text text-transparent font-semibold italic">Nishad Umap</h2>
      <div className="text-teal flex flex-wrap">
      <TypeAnimation
      sequence={[
        'a Frontend Developer',
        1000,
        'a React.js Developer',
        1000,
        'a React Native Developer',
        1000,
        'a Full Stack Developer',
        1000,
        'a MERN Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '2.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </div>
      <h2 className="text-3xl lg:text-5xl text-white font-semibold">Transforming Ideas into Dynamic Web Applications.</h2>
      {/* <p className="text-white lg:w-2/3">I am a passionate software developer with a strong foundation in the MERN stack, eager to build scalable and high-quality web applications. I&apos;m committed to learning and growing, staying up-to-date with industry trends, and solving challenges with creative and effective solutions.</p> */}
      <a href="https://drive.google.com/file/d/1mA7xUxV-xtBVEQbdcJDiRpeAHVYT1JLg/view?usp=sharing" target="_blank"><button className="border-2 border-tertiary text-white px-8 py-2 hover:bg-tertiary hover:text-primary">Know More</button></a>
    </div>
  )
}

export default Intro
