import { TypeAnimation } from "react-type-animation";
import { userData } from "../config";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6 pt-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">{userData.name}</span> 👋
      </h1>

      <div className="text-xl md:text-2xl font-medium text-gray-400 mb-4 h-10">
        <TypeAnimation
          sequence={[
            userData.title,
            2000,
            "React Enthusiast",
            2000,
            "Computer Engineering Student",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
        I'm a final year Computer Engineering student at Pokhara University,
        passionate about building clean and user-friendly web applications.
      </p>
    </section>
  );
}

export default Hero;